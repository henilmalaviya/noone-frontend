import { browser } from '$app/environment';
import { insideInstalledApp } from './insideInstalledApp';

export function forceScreenSize(width: number, height: number) {
	if (!browser) return;
	if (!insideInstalledApp()) return;

	// Size window after open the app
	window.resizeTo(width, height);

	window.addEventListener('resize', function () {
		window.resizeTo(width, height);
	});
}
