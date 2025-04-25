import { LocalStorage } from '$lib/utils/LocalStorage.svelte';

class GlobalState {
	public account = new LocalStorage('account', {
		id: null
	});

	public hasOnboardingCompleted = $derived(this.account.current.id !== null);

	public loading = $state(true);
}

export const globalState = new GlobalState();

// export const account = new LocalStorage('account', {
// 	id: null
// });

// export const hasOnboardingCompleted = $derived(account.current.id !== null);

// // eslint-disable-next-line prefer-const
// export let loading = $state(true);
