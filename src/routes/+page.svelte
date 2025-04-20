<script>
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="flex flex-col gap-0">
	<div
		class="flex w-full cursor-pointer items-center gap-4 px-4 py-4 transition hover:bg-brand-500/30 hover:text-brand-900"
	>
		<div>
			<Avatar.Root>
				<Avatar.Fallback class="text-xs">OC</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="flex flex-grow flex-col">
			<div class="flex items-center justify-between gap-2">
				<div class="font-medium">Owners of Class</div>
				<div class="text-xs text-muted-foreground">9:37 pm</div>
			</div>
			<div class="text-xs font-normal">No way i am going</div>
		</div>
	</div>
	<div
		class="flex w-full cursor-pointer items-center gap-4 px-4 py-4 transition hover:bg-brand-500/30 hover:text-brand-900"
	>
		<div>
			<Avatar.Root>
				<Avatar.Fallback class="text-xs">CSD</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="flex flex-grow flex-col">
			<div class="flex items-center justify-between gap-2">
				<div class="font-medium">CSD</div>
				<div class="text-xs text-muted-foreground">9:19 pm</div>
			</div>
			<div class="text-xs font-normal">New Poll: "Tomorrow Lectures?"</div>
		</div>
	</div>
</div>
