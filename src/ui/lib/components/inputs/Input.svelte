<script context="module" lang="ts">
	import { format } from 'd3';

	export const pctFormat = format('.0%');
</script>

<script lang="ts">
	import FigmaIcon from '../figma-icons/FigmaIcon.svelte';
	import Label from './Label.svelte';

	export let icon: FigmaIconName | undefined = 'visible';

	export let tooltip: string | undefined = 'hello world';
</script>

<Label class="h-7" {tooltip} highlightOnFocus>
	{#if icon}
		<FigmaIcon name={icon} class="max-w-[16px] -translate-x-1/2" />
	{/if}
	<input
		class="bg-figma-color-bg text-figma-color-text font-normal text-[11px] leading-none rounded-none focus:ring-0 focus:outline-none"
		dir="auto"
		spellcheck="false"
	/>
</Label>
