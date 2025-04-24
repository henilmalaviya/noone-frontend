import { LocalStorage } from '$lib/utils/LocalStorage.svelte';

class GlobalState {
	public account = new LocalStorage('account', {
		id: null
	});
	public hasOnboardingCompleted = $derived(this.account.current.id);
}

const globalState = new GlobalState();
export const getGlobalState = () => globalState;
