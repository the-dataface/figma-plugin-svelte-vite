/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';

declare global {
	// general width/height dimensions
	interface Size {
		width: number;
		height: number;
	}

	interface MessageData {
		type: string;
		[key: string]: any;
	}

	// messages from plugin to UI
	interface MessageDataFromPlugin extends MessageData {
		type: 'init';
	}

	interface MessageDataFromUI extends MessageData {
		type: 'resize-window';
	}

	type TabName = string;
	type TabIcon = typeof SvelteComponent | string;

	interface App {
		tabs: SvelteComponent[];
		tab: Writable<TabName>;
	}
}

export {};
