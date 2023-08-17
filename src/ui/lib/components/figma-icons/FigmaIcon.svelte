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

	export let isLabelIcon: boolean = false;

	$: icon = iconModules?.[`./icons/${name}.svg`] ?? name;
</script>

<span
	class="figma-icon {size || ''} {classes} input-text"
	class:label-icon={isLabelIcon}
>
	{#if icon}
		<span>
			{@html icon}
		</span>
	{/if}
</span>

<style lang="postcss">
	.figma-icon {
		@apply uppercase text-center grid place-content-center pointer-events-none;
	}
	.figma-icon.label-icon {
		@apply text-figma-color-text-secondary;
	}
	.figma-icon.sm :global(svg) {
		@apply w-6 h-6;
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
