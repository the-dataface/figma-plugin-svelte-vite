<script lang="ts">
	import tooltipAction from '$ui/lib/actions/tooltip';

	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface $$Props extends HTMLLabelAttributes {
		/** toggle between `<legend>` and `<label>` */
		legend?: boolean;
		/** highlight the label on focus-within, as figma does on text inputs */
		highlightOnFocus?: boolean;
		/** tooltip content */
		tooltip?: string | undefined;
		/** is this label for a select? if so, tweak padding so dropdown is always visible */
		isSelect?: boolean;
	}

	export let legend: $$Props['legend'] = false;

	export let highlightOnFocus: $$Props['highlightOnFocus'] = false;

	export let tooltip: $$Props['tooltip'] = undefined;

	export let isSelect = false;
</script>

<svelte:element
	this={legend ? 'legend' : 'label'}
	{...$$restProps}
	class:input-text={true}
	class:focus-highlight={highlightOnFocus}
	class:select={isSelect}
	on:click
	use:tooltipAction={{ content: tooltip }}
>
	<slot />
</svelte:element>

<style lang="postcss">
	label,
	legend {
		@apply flex flex-row gap-2 items-center w-fit bg-figma-color-bg border border-transparent rounded-sm focus-within:border-figma-color-border-selected;
	}
	:where(label, legend):not(:focus-within):hover {
		@apply hover:border-figma-color-bg-tertiary;
	}

	:where(label, legend):not(.select) {
		@apply p-1.5;
	}
</style>
