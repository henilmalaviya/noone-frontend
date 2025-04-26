<script lang="ts">
	import apiClient from '$lib/api-client';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils/shadcn';
	import Icon from '@iconify/svelte';

	let generatedAccountNumber = $state<string | null>(null);
	let isGeneratingAccountNumber = $state(false);
	let copiedToClipboard = $state(false);

	$effect(() => {
		if (copiedToClipboard) {
			setTimeout(() => {
				copiedToClipboard = false;
			}, 2000);
		}
	});

	async function generateAccountNumber() {
		isGeneratingAccountNumber = true;

		try {
			const { error: AccountCreateError, data } = await apiClient.POST('/v1/accounts');

			if (AccountCreateError) {
				throw new Error(AccountCreateError.message);
			}

			if (!data.data.id) {
				throw new Error('Failed to generate account number');
			}

			generatedAccountNumber = data.data.id;
		} catch (error) {
			console.error(error);
		} finally {
			isGeneratingAccountNumber = false;
		}
	}
</script>

<div class="flex w-full flex-grow flex-col gap-4 p-8">
	<h1 class="text-2xl font-bold">Get started with NoOne</h1>

	<div class="my-0"></div>

	<ol class="list-inside list-decimal space-y-8">
		<div class="space-y-4">
			<li class="text-xl font-bold">Get an account number</li>
			<div class="my-3"></div>

			{#if isGeneratingAccountNumber}
				<p>Generating account number...</p>
			{:else if !generatedAccountNumber}
				<p>Start by generating a random account number</p>

				<Button onclick={generateAccountNumber} variant="brand" class="font-semibold"
					>Generate account number</Button
				>
			{:else if generatedAccountNumber !== null}
				<p>Congrats! Here's your account number:</p>

				<div class="flex items-center gap-4">
					<h1 class="select-all text-2xl font-black tracking-widest">
						{generatedAccountNumber.match(/.{1,5}/g)?.join(' ')}
					</h1>
					<Button
						onclick={() => {
							navigator.clipboard.writeText(generatedAccountNumber || '');
							copiedToClipboard = true;
						}}
						variant="brand"
					>
						{#if copiedToClipboard}
							<Icon icon="mingcute:check-fill" class="h-4 w-4" />
							Copied!
						{:else}
							<Icon icon="mingcute:copy-fill" class="h-4 w-4" />
							Copy
						{/if}
					</Button>
				</div>

				<blockquote
					class="my-4 border-s-4 border-yellow-300 bg-gray-50 p-4 dark:border-yellow-500 dark:bg-gray-800"
				>
					<p class="leading-relaxed text-gray-900 dark:text-white">
						We <span class="font-bold">DO NOT</span> store your account number in plain text. Keep it
						safe or you will lose access to your account.
					</p>
				</blockquote>
			{/if}
		</div>

		<div class={cn('space-y-4', !generatedAccountNumber && 'blur-sm')}>
			<li class="text-xl font-bold">Login with your account number</li>
			<div class="my-3"></div>

			<p>You can login with your account number to access your account</p>

			<Button
				disabled={!generatedAccountNumber}
				href="/accounts/login"
				variant="secondary"
				class="font-semibold">Login with account number</Button
			>
		</div>
	</ol>
</div>
