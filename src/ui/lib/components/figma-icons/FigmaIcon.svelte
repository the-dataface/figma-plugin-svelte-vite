<script lang="ts" context="module">
	// glob import all figma icons
	const iconModules = import.meta.glob('./icons/*.svg', {
		as: 'raw',
		import: 'default',
		eager: true,
	});

	// unique set of icon names
	export const icons = new Set(
		Object.keys(iconModules).map((path) => {
			return path?.match(/(?<=\/icons\/).*(?=\.svg)/)?.[0];
		})
	);
</script>

<script lang="ts">
	export let name: FigmaIconName;

	let classes: string | undefined = '';
	export { classes as class };

	export let size: 'sm' | 'md' | 'lg' | 'xl' | false = false;

	$: icon = iconModules[`./icons/${name}.svg`];
</script>

<span class="figma-icon {size || ''} {classes}">
	{#if icon}
		{@html icon}
	{/if}
</span>

<style lang="postcss">
	.figma-icon.sm :global(svg) {
		@apply w-8 h-8;
	}
	.figma-icon.md :global(svg) {
		@apply w-8 h-8;
	}
	.figma-icon.lg :global(svg) {
		@apply w-10 h-10;
	}
	.figma-icon.xl :global(svg) {
		@apply w-12 h-12;
	}
</style>
