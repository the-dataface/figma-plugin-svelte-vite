/// <reference types="svelte" />
/// <reference types="vite/client" />

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
}

export {};
