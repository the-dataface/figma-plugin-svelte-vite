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
	}

	export let legend: $$Props['legend'] = false;

	export let highlightOnFocus: $$Props['highlightOnFocus'] = false;

	export let tooltip: $$Props['tooltip'] = undefined;
</script>

<svelte:element
	this={legend ? 'legend' : 'label'}
	{...$$restProps}
	class:focus-highlight={highlightOnFocus}
	on:click
	use:tooltipAction={{ content: tooltip }}
>
	<slot />
</svelte:element>

<style lang="postcss">
	label,
	legend {
		@apply flex flex-row gap-2 p-1.5 items-center w-fit border border-transparent hover:border-figma-color-bg-tertiary focus:border-figma-color-border-selected focus:outline focus:outline-figma-color-border-selected rounded-sm;
	}
</style>
