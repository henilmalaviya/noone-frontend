import { browser } from '$app/environment';

export function insideInstalledApp() {
	if (!browser) return false;

	return (
		window.matchMedia('(display-mode: standalone)').matches ||
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(window.navigator as any).standalone === true
	);
}
