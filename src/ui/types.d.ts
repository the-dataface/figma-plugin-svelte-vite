/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';

declare global {
	type FigmaIconName =
		// letters + numbers
		| '-'
		| 'A'
		| 'B'
		| 'C'
		| 'D'
		| 'E'
		| 'F'
		| 'G'
		| 'H'
		| 'I'
		| 'J'
		| 'K'
		| 'L'
		| 'M'
		| 'N'
		| 'O'
		| 'P'
		| 'Q'
		| 'R'
		| 'S'
		| 'T'
		| 'U'
		| 'V'
		| 'W'
		| 'X'
		| 'Y'
		| 'Z'
		| '0'
		| '1'
		| '2'
		| '3'
		| '4'
		| '5'
		| '6'
		| '7'
		| '8'
		| '9'
		// FIGMA ICONS
		| 'adjust'
		| 'alert'
		| 'angle'
		| 'arrow-left-right'
		| 'arrow-up-down'
		| 'auto-layout-horizontal'
		| 'auto-layout-vertical'
		| 'back'
		| 'blend-empty'
		| 'blend'
		| 'break'
		| 'caret-down'
		| 'caret-left'
		| 'caret-right'
		| 'caret-up'
		| 'check'
		| 'close'
		| 'component'
		| 'corner-radius'
		| 'corners'
		| 'distribute-horizontal-spacing'
		| 'distribute-vertical-spacing'
		| 'draft'
		| 'effects'
		| 'ellipses'
		| 'eyedropper'
		| 'forward'
		| 'frame'
		| 'group'
		| 'hidden'
		| 'horizontal-padding'
		| 'hyperlink'
		| 'image'
		| 'instance'
		| 'key'
		| 'layout-align-bottom'
		| 'layout-align-horizontal-centers'
		| 'layout-align-left'
		| 'layout-align-right'
		| 'layout-align-top'
		| 'layout-align-vertical-centers'
		| 'layout-grid-columns'
		| 'layout-grid-rows'
		| 'layout-grid-uniform'
		| 'library'
		| 'link-broken'
		| 'link-connected'
		| 'list-detailed'
		| 'list-tile'
		| 'list'
		| 'lock-off'
		| 'lock-on'
		| 'minus'
		| 'play'
		| 'plus'
		| 'random'
		| 'recent'
		| 'resize-to-fit'
		| 'resolve-filled'
		| 'resolve'
		| 'reverse'
		| 'search-large'
		| 'search'
		| 'settings'
		| 'share'
		| 'smiley'
		| 'sort-alpha-asc'
		| 'sort-alpha-dsc'
		| 'sort-top-bottom'
		| 'spacing'
		| 'spinner'
		| 'star-off'
		| 'star-on'
		| 'stroke-weight'
		| 'styles'
		| 'swap'
		| 'theme'
		| 'tidy-up-grid'
		| 'tidy-up-list-horizontal'
		| 'tidy-up-list-vertical'
		| 'timer'
		| 'trash'
		| 'vertical-padding'
		| 'visible'
		| 'warning-large'
		| 'warning';

	/** general select item */
	interface SelectItem {
		/** value of the item */
		value: unknown;
		/** optional label. if missing, label will be value */
		label: string;
		/** optional icon. if missing, no icon will be shown */
		icon: FigmaIconName;
		/** disable the item */
		disabled?: boolean;
	}

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
		type: 'notify' | 'resize-window';
	}

	type TabName = string;
	type TabIcon = typeof SvelteComponent | FigmaIconName | undefined | Emoji;

	interface App {
		tabs: SvelteComponent[];
		tab: Writable<TabName>;
	}
}

export {};
