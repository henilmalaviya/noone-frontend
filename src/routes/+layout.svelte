<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { forceScreenSize } from '$lib/utils/forceScreenSize';
	import { getGlobalState } from '$lib/states/global.svelte';

	let { children } = $props();

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;

			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('New version of this app is available. Reload?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		forceScreenSize(100, 800);
		detectSWUpdate();
	});
</script>

{#if getGlobalState().account.current.id}
	<!--  -->
{/if}

<!-- main wrapper -->
<div class="flex h-full flex-grow items-center justify-center">
	<!-- phone wrapper -->
	<div class="flex h-full w-[28rem] flex-col border-x max-md:w-full max-md:border-none">
		<div>
			<Header />
		</div>
		<div class="flex-grow">
			{@render children()}
		</div>
		<div>
			<Footer />
		</div>
	</div>
</div>
