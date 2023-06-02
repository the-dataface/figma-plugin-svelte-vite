/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
	// general width/height dimensions
	interface Size {
		width: number;
		height: number;
	}

	// messaging between ui + plugin
	interface PostMessage {
		type: string;
		[key: string]: any;
	}
}

export {};
