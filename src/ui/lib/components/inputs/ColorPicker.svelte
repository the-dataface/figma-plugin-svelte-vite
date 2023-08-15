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

	/** Select all text in the input on focus */
	const focus = (e: FocusEvent) => (e.target as HTMLInputElement).select();

	const toHundredths = (value: number): number => {
		const parsed = value * 100; // normalize value to 0-100
		const fixed = parsed.toFixed(2); // fix to two decimal places
		const floated = parseFloat(fixed); // turn into float again to remove trailing zeros
		return floated;
	};
</script>

<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import formatinput from '$ui/lib/actions/formatinput';

	/** the color space to render. Dropdown options */
	export let colorspace: Colorspace = 'rgb';

	/** fallback value if color is invalid */
	export let fallback: string = '#000000';

	/** The color value as a string with opacity. ex: rgba(255,255,255,0.1), #ffffff */
	export let value: string = fallback;

	/** the color factory instance, including opacity and conversion options */
	export let color: Writable<d3color.RGBColor | d3color.HSLColor | null> =
		writable(d3color?.color(value) || d3color?.color(fallback));

	//  the chosen colorspace
	$: activeColorspace = colorspaces[colorspace].format;

	// dynamically update value string whenever color changes
	$: if ($color) value = $color?.[activeColorspace]() || fallback;

	$: if ($color) {
		if ($color.opacity > 1) $color.opacity = 1;
		else if ($color.opacity < 0) $color.opacity = 0;
	}

	const formatColor = (node: HTMLInputElement): string => {
		// if invalid, try parsing as hex without hash
		const parsed = valid(node.value)
			? d3color.color(node.value)
			: d3color.color(`#${node.value}`) ?? d3color.color(fallback);

		// update color object
		color.set(parsed);

		// then format it into the active colorspace, or default to fallback
		const formatted = parsed?.[activeColorspace]() || fallback;

		// update the exported value
		value = formatted;

		// and serve it to the UI as HEX without hash, ex 000000, FF00FF
		const hex = (parsed || d3color?.color(fallback))?.formatHex();
		const hashless = (hex || fallback)?.replace(/^#/, '') || fallback;
		const uppercased = hashless.toUpperCase();

		return uppercased;
	};

	const formatOpacity = (node: HTMLInputElement): string => {
		if (!$color) return `100%`;

		// default to 1 if the value is not a number
		if (isNaN(+node.value) || +node.value >= 100) {
			$color.opacity = 1;
			return `100%`;
		} else if (+node.value <= 0) {
			$color.opacity = 0;
			return `0%`;
		}

		// else return the new value with a percent symbol
		$color.opacity = +node.value / 100;
		return `${Math.round(+node.value)}%`;
	};
</script>

<div
	class="inline-flex flex-row gap-2 items-center w-fit border border-transparent rounded-sm focus-within:border-figma-color-border-selected focus-highlight input-text group"
>
	<label class="h-7 flex-1 p-1.5 flex flex-row flex-nowrap gap-[7px]">
		<div
			class="w-4 h-4 shrink-0 grow-0 relative"
			style:background-color={$color?.copy({ opacity: 1 })?.formatRgb() ||
				fallback}
		>
			{#if $color && $color.opacity < 1}
				<div
					class="pointer-events-none w-1/2 h-full absolute right-0 inset-y-0"
					style:opacity={1 - $color.opacity}
					style:background="url(data:image/svg+xml;utf8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200H3V3H0V0Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M3%200H6V3H3V0Z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M3%203H6V6H3V3Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M0%203H3V6H0V3Z%22%20fill%3D%22white%22/%3E%3C/svg%3E%0A)"
				/>
			{/if}
		</div>
		<input
			class="border-0 outline-none ring-0 flex-[1_0_72px]"
			type="text"
			aria-label="Color"
			on:focus={focus}
			use:formatinput={formatColor}
		/>
	</label>

	<label
		class="h-7 grid place-content-center flex-[0_0_56px] m-0 p-1.5 border-l border-l-transparent group-hover:border-l-figma-color-bg-tertiary group-focus-within:border-l-figma-color-bg-tertiary"
	>
		<input
			class="border-0 outline-none ring-0 w-full text-center"
			type="text"
			aria-label="Color opacity"
			value="{toHundredths($color?.opacity || 1)}%"
			on:focus={focus}
			use:formatinput={formatOpacity}
		/>
	</label>
</div>

<style lang="postcss">
	div.focus-highlight:not(:focus-within):hover {
		@apply hover:border-figma-color-bg-tertiary;
	}
</style>
