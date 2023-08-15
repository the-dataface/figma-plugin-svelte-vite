<script context="module" lang="ts">
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import FigmaIcon from '$ui/lib/components/figma-icons/FigmaIcon.svelte';
	import Canvas from '$ui/lib/components/Canvas.svelte';
	import ShadeGradient from './ShadeGradient.svelte';
	import HueGradient from './HueGradient.svelte';

	let shadeGradientHeight = 150;
	let shadeGradientWidth = 200;

	let hueGradientHeight = 10;
	let hueGradientWidth = 200;

	const { closePanel } = getContext('ColorPicker') as {
		closePanel: () => void;
	};
</script>

<div
	class="absolute right-0 inset-y-0 max-w-full h-full bg-figma-color-bg border-l border-figma-color-border p-2 shadow-lg z-40"
>
	<button
		class="p-1 focus-highlight"
		title="Close color panel"
		on:click={closePanel}
	>
		<FigmaIcon name="close" />
	</button>

	<div
		style:height="{shadeGradientHeight}px"
		bind:clientWidth={shadeGradientWidth}
	>
		<Canvas
			context="color-picker-shade-gradient"
			height={shadeGradientHeight}
			width={shadeGradientWidth}
		>
			<ShadeGradient context="color-picker-shade-gradient" />
		</Canvas>
	</div>

	<div
		class="rounded-lg overflow-hidden my-2"
		style:height="{hueGradientHeight}px"
		bind:clientWidth={hueGradientWidth}
	>
		<Canvas
			context="color-picker-hue-gradient"
			height={hueGradientHeight}
			width={hueGradientWidth}
		>
			<HueGradient context="color-picker-hue-gradient" />
		</Canvas>
	</div>
</div>
