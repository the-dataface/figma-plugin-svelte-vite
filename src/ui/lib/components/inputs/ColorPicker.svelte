<script context="module" lang="ts">
	import * as d3color from 'd3-color';

	/** A d3color.color() instance that we know can not be null as there is a fallback */
	type NonNullColor = Exclude<d3color.RGBColor | d3color.HSLColor, null>;

	/** The type of input that changed */
	type ColorInputs =
		/** the native `<input type="color"/> selector */
		| 'picker'
		/** the `<input type='text'>` hex input, accepts and passes any entry to d3color.color() */
		| 'color'
		/** the `<input type='text'>` opacity input */
		| 'opacity';

	/** fallback HEX value if color is invalid */
	const fallback = d3color.color('#000000');

	/** Check if the given value is a valid color */
	export const valid = (value: string): boolean => !!d3color.color(value);

	/** try to parse a color in as many ways as possible, with a fallback */
	const parseColor = (value: string): NonNullColor => {
		// first try the color as-is
		const asIs = d3color.color(value);
		if (asIs) return asIs;

		// then see if it just needs a hash as-is
		const withHash = d3color.color(`#${value}`);
		if (withHash) return withHash;

		// then see if its a shortened hex value sans hash
		if ((!value.startsWith('#') && value.length === 1) || value.length === 2) {
			const withHash = d3color.color(`#${value}${value}${value}`);
			if (withHash) return withHash;
		}

		// or if its a shortened hex value with hash
		if (value.startsWith('#') && (value.length === 2 || value.length === 3)) {
			const noHash = value.slice(1);
			const withHash = d3color.color(`#${noHash}${noHash}${noHash}`);
			if (withHash) return withHash;
		}

		// lastly, revert to the fallback
		return fallback as NonNullColor;
	};

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

	/** The color value as a string with opacity. ex: rgba(255,255,255,0.1), #ffffff */
	export let value: string = fallback?.formatRgb() ?? '#000000';

	/** the color factory instance, including opacity and conversion options */
	export let color: Writable<d3color.RGBColor | d3color.HSLColor | null> =
		writable(d3color?.color(value) || fallback);

	// dynamically update value string whenever color changes
	$: if ($color) value = ($color ?? fallback)?.formatRgb();

	$: if ($color) {
		if ($color.opacity > 1) $color.opacity = 1;
		else if ($color.opacity < 0) $color.opacity = 0;
	}

	$: colorPickerValue = ($color ?? fallback)?.formatHex();
	$: colorValue = ($color ?? fallback)?.formatHex().slice(1).toUpperCase();
	$: opacityValue = `${toHundredths($color?.opacity || 1)}%`;

	/**
	 * Update color object when inputs change
	 */
	const onChange = (type: ColorInputs) => (e: Event) => {
		const node = e.target as HTMLInputElement;

		switch (type) {
			case 'picker':
			case 'color': {
				// get new value or use fallback
				const parsed = parseColor(node.value);

				// preserve opacity if using picker, which doesn't support opacity
				if (type === 'picker') parsed.opacity = $color?.opacity || 1;

				// update color object
				color.set(parsed);

				break;
			}

			case 'opacity': {
				if (!$color) break;

				// clamp values to 0-100
				if (isNaN(+node.value) || +node.value >= 100) {
					$color.opacity = 1;
					return `100%`;
				} else if (+node.value <= 0) {
					$color.opacity = 0;
					return `0%`;
				}

				// else normalize into 0-1 range
				$color.opacity = +node.value / 100;
				break;
			}
		}
	};
</script>

<div
	class="flex flex-row items-center w-fit border border-transparent rounded-sm focus-within:border-figma-color-border-selected focus-highlight input-text group bg-figma-color-bg"
>
	<label class="shrink-0 grow-0 pl-1.5 py-1.5">
		<div
			class="relative w-4 h-4"
			style:background-color={(
				$color?.copy({ opacity: 1 }) ?? fallback
			)?.formatRgb()}
		>
			{#if $color && $color.opacity < 1}
				<div
					class="absolute inset-y-0 right-0 w-1/2 h-full pointer-events-none"
					style:opacity={1 - $color.opacity}
					style:background="url(data:image/svg+xml;utf8,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200H3V3H0V0Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M3%200H6V3H3V0Z%22%20fill%3D%22white%22/%3E%3Cpath%20d%3D%22M3%203H6V6H3V3Z%22%20fill%3D%22%23E1E1E1%22/%3E%3Cpath%20d%3D%22M0%203H3V6H0V3Z%22%20fill%3D%22white%22/%3E%3C/svg%3E%0A)"
				/>
			{/if}
		</div>
		<span class="sr-only">Color picker</span>
		<input
			class="sr-only"
			type="color"
			name="color-picker"
			value={colorPickerValue}
			on:focus={focus}
			on:change={onChange('picker')}
			on:paste={onChange('picker')}
		/>
	</label>

	<label class="h-7 flex-1 p-1.5 flex flex-row flex-nowrap">
		<span class="sr-only">Color</span>
		<input
			class="bg-figma-color-bg text-figma-color-text border-0 outline-none ring-0 flex-[1_0_72px]"
			type="text"
			name="color"
			value={colorValue}
			on:focus={focus}
			on:change={onChange('color')}
			on:paste={onChange('color')}
		/>
	</label>

	<label
		class="h-7 grid place-content-center flex-[0_0_56px] m-0 p-1.5 border-l border-l-transparent group-hover:border-l-figma-color-bg-tertiary group-focus-within:border-l-figma-color-bg-tertiary"
	>
		<span class="sr-only">Opacity</span>
		<input
			class="w-full text-center border-0 outline-none bg-figma-color-bg text-figma-color-text ring-0"
			type="text"
			name="opacity"
			value={opacityValue}
			on:focus={focus}
			on:change={onChange('opacity')}
			on:paste={onChange('opacity')}
		/>
	</label>
</div>

<style lang="postcss">
	div.focus-highlight:not(:focus-within):hover {
		@apply hover:border-figma-color-bg-tertiary;
	}
</style>
