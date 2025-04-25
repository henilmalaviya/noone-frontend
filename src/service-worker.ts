/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version, prerendered } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...prerendered, ...build, ...files];

// install service worker
self.addEventListener('install', (event) => {
	event.waitUntil(
		self.skipWaiting().then(async () => {
			const cache = await caches.open(CACHE);
			await cache.addAll(ASSETS);
		})
	);
});

// activate service worker
self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		const keys = await caches.keys();
		for (const key of keys) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

// listen to fetch events
self.addEventListener('fetch', (event) => {
	const { request } = event;

	if (request.method !== 'GET') return;

	async function respond() {
		const url = new URL(request.url);

		const cache = await caches.open(CACHE);

		// serve build files from cache
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(request);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		// try the network first
		try {
			const response = await fetch(request);

			const isNotExtension = url.protocol === 'http:';
			const isSuccess = response.status >= 200 && response.status < 300;

			if (isNotExtension && isSuccess) {
				cache.put(request, response.clone());
			}

			return response;
		} catch {
			// fall back to cache
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		return new Response('Not Found', { status: 404 });
	}

	event.respondWith(respond());
});

self.addEventListener('message', (event) => {
	if (event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
