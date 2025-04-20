<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils/shadcn';
	import Icon from '@iconify/svelte';

	const TABS = [
		{
			name: 'Channels',
			icon: 'fluent:channel-16-filled',
			href: '/'
		},
		{
			name: 'Account',
			icon: 'fluent:person-20-filled',
			href: '/account'
		}
	];
</script>

<div class="flex items-center justify-center">
	{#each TABS as tab}
		{@const isActive = tab.href === $page.url.pathname}
		<a
			href={tab.href}
			class={cn(
				'flex flex-grow flex-col items-center gap-1 border-b-4 px-4 py-4 text-sm',
				!isActive && 'text-muted-foreground',
				isActive && ''
			)}
		>
			<span class={cn('rounded-full px-5 py-2', isActive && 'bg-brand-500/35 text-brand-900')}>
				<Icon icon={tab.icon} width="24" height="24" />
			</span>

			<span class={cn('text-sm font-medium', isActive && 'text-brand-900 font-bold')}>
				{tab.name}
			</span>
		</a>
	{/each}
</div>
