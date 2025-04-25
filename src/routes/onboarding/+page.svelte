<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { globalState } from '$lib/states/global.svelte';
	import { fly } from 'svelte/transition';

	$effect(() => {
		if (globalState.hasOnboardingCompleted === true) {
			goto('/');
		}
	});
</script>

<div class="flex flex-grow flex-col items-center gap-4 px-4 py-16">
	<div class="flex flex-col items-center gap-4" out:fly={{}}>
		<div class="h-fit rounded-full bg-zinc-100 p-4">
			<img src="/favicon.svg" alt="logo" class="h-28 w-28" />
		</div>

		<h1 class="text-2xl font-bold">Welcome to <span class="">NoOne</span></h1>
		<p class="text-center">
			We take your privacy <span class="font-bold">seriously</span>. That's why we don't ask for
			your personal information.
		</p>
		<p class="text-center">
			Instead, we'll generate a unique account number for you. This is the <span class="font-bold"
				>only</span
			> thing you'll need to access your account.
		</p>
	</div>
</div>
<div class="flex p-4">
	<div class="flex w-full flex-col gap-2">
		<Button size="lg" class="w-full" href="/account/create">Create new account</Button>
		<Button class="w-full" variant="secondary" href="/account/login">
			Login with existing account
		</Button>
	</div>
</div>
