<script lang="ts">
	import FigmaIcon from '../figma-icons/FigmaIcon.svelte';
	import Label from './Label.svelte';
	import formatinput, {
		type FormatInputOptions,
	} from '$ui/lib/actions/formatinput';

	export let format: FormatInputOptions['format'] = (value) => `${value ?? ''}`;

	export let icon: FigmaIconName | undefined = 'visible';

	export let tooltip: string | undefined = 'Tooltip';

	export let value: unknown = undefined;

	const focus = (e: FocusEvent) => {
		(e.target as HTMLInputElement).select();
	};
</script>

<Label class="h-7" {tooltip} highlightOnFocus>
	{#if icon}
		<FigmaIcon name={icon} class="max-w-[16px] -translate-x-1/2" />
	{/if}
	<input
		class="bg-figma-color-bg text-figma-color-text font-normal text-[11px] leading-none rounded-none focus:ring-0 focus:outline-none"
		dir="auto"
		spellcheck="false"
		on:focus={focus}
		use:formatinput={format}
		bind:value
	/>
</Label>
