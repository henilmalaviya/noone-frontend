<script lang="ts">
	import { onMount, tick } from 'svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { forceScreenSize } from '$lib/utils/forceScreenSize';
	import { globalState } from '$lib/states/global.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;

			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (navigator.serviceWorker.controller) {
						// New content is available, activate it silently
						newSW.postMessage({ type: 'SKIP_WAITING' });
						console.log('New version available, activating in background');
					} else {
						// This is the initial install, no need to do anything
						console.log('Service worker installed for the first time');
					}
				}
			});
		});
	}

	$effect(() => {
		if (
			['/onboarding', '/account/create', '/account/login'].includes(page.url.pathname) === false &&
			globalState.hasOnboardingCompleted === false
		) {
			goto('/onboarding');
		}

		setTimeout(() => {
			globalState.loading = false;
		}, 500);
	});

	onMount(() => {
		forceScreenSize(100, 800);
		detectSWUpdate();
	});
</script>

<!-- main wrapper -->
<div class="flex h-full flex-grow items-center justify-center">
	<!-- phone wrapper -->
	<div class="relative flex h-full w-[28rem] flex-col border-x max-md:w-full max-md:border-none">
		{#if globalState.loading === true}
			<div
				class="absolute inset-0 z-[10] flex h-full w-full items-center justify-center bg-background"
			>
				<div class="flex flex-col items-center gap-4">
					<div class="h-fit animate-pulse rounded-full bg-zinc-100 p-4">
						<img src="/favicon.svg" alt="logo" class="h-28 w-28" />
					</div>
				</div>
			</div>
		{/if}
		{@render children()}
	</div>
</div>
