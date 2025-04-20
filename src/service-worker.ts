/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

// install service worker
self.addEventListener('install', (event) => {
	console.log('Service worker installing...');
	event.waitUntil(
		self.skipWaiting().then(async () => {
			console.log('Service worker installed');

			const cache = await caches.open(CACHE);
			console.log('Cache opened', cache);
			await cache.addAll(ASSETS);
		})
	);
});

// activate service worker
self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		const keys = await caches.keys();
		console.log('Old caches deleted', keys);
		for (const key of keys) {
			if (key !== CACHE) {
				console.log('Deleting old cache', key);
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
