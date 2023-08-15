<script context="module" lang="ts">
	import * as d3color from 'd3-color';

	/** Colorspaces supported in UI */
	const colorspaces = {
		hex: { format: 'formatHex', parse: 'hex' },
		hsl: { format: 'formatHsl', parse: 'hsl' },
		rgb: { format: 'formatRgb', parse: 'rgb' },
	} as const;

	export type Colorspace = keyof typeof colorspaces;

	/** Check if the given value is a valid color */
	export const valid = (value: string): boolean => !!d3color.color(value);
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import formatinput from '$ui/lib/actions/formatinput';
	import ColorPickerPanel from './ColorPickerPanel.svelte';

	/** the color space to render. Dropdown options */
	export let colorspace: Colorspace = 'hex';

	/** The color value */
	export let value: string = '#000000';

	/** fallback value if color is invalid */
	export let fallback: string = value;

	/** the color, sans opacity */
	export let color = d3color?.color(value) || d3color?.color(fallback);

	/** the default opacity value */
	export let fallbackOpacity = 1;

	/** the opacity of the color */
	export let opacity: number = fallbackOpacity;

	let isPanelOpen = false;

	$: activeColorspace = colorspaces[colorspace].format;

	const formatColor = (node: HTMLInputElement): string => {
		// first parse the color value
		const parsed = d3color?.color(node.value);

		// update opacity
		if (parsed) opacity = parsed.opacity;

		// then format it into the active colorspace, or default to fallback
		const formatted = parsed?.[activeColorspace]() || fallback;

		// update the local value
		value = formatted;

		// and serve it to the UI
		return formatted;
	};

	const formatOpacity = (node: HTMLInputElement): string => {
		// default to 1 if the value is not a number
		if (isNaN(+node.value) || +node.value >= 100) {
			opacity = 1;
			return `100%`;
		} else if (+node.value <= 0) {
			opacity = 0;
			return `0%`;
		}

		// else return the new value with a percent symbol
		opacity = +node.value / 100;
		return `${node.value}%`;
	};

	const focus = (e: FocusEvent) => {
		(e.target as HTMLInputElement).select();
	};

	const openPanel = () => (isPanelOpen = true);
	const closePanel = () => (isPanelOpen = false);

	$: {
		color = d3color?.color(value) || d3color?.color(fallback);
		if (color) color.opacity = opacity;
		value = color?.[activeColorspace]() || fallback;
	}

	// $: console.log(color, value);

	setContext('ColorPicker', {
		openPanel,
		closePanel,
	});
</script>

<div
	class="flex flex-row gap-2 items-center w-fit border border-transparent rounded-sm focus-within:border-figma-color-border-selected focus-highlight input-text"
	on:blur={closePanel}
>
	<button
		class="w-4 h-4 shrink-0 grow-0 relative"
		style:background-color={color?.copy({ opacity: 1 })?.formatRgb() ||
			fallback}
		title="Open color panel"
		on:click={openPanel}
	>
		{#if color && color.opacity < 1}
			<div
				class="pointer-events-none w-1/2 h-full absolute right-0 inset-y-0"
				style:opacity={1 - color.opacity}
				style:background="url(data:image/svg+xml;utf8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200H3V3H0V0Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M3%200H6V3H3V0Z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M3%203H6V6H3V3Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M0%203H3V6H0V3Z%22%20fill%3D%22white%22/%3E%3C/svg%3E%0A)"
			/>
		{/if}
	</button>

	<label class="flex-[1_0_72px] pl-[7px]">
		<input
			class="border-0 outline-none ring-0 uppercase"
			type="text"
			value={color?.formatHex() || fallback}
			aria-label="Color"
			on:focus={focus}
			use:formatinput={formatColor}
		/>
	</label>

	<label
		class="grid place-content-center flex-[0_0_48px] border-l border-black"
	>
		<input
			class="border-0 outline-none ring-0 w-full"
			type="text"
			value={color?.opacity !== undefined
				? color?.opacity * 100
				: fallbackOpacity}
			aria-label="Color opacity"
			on:focus={focus}
			use:formatinput={formatOpacity}
		/>
	</label>
</div>

{#if isPanelOpen}
	<ColorPickerPanel />
{/if}

<style lang="postcss">
	div.focus-highlight:not(:focus-within):hover {
		@apply hover:border-figma-color-bg-tertiary;
	}
</style>
