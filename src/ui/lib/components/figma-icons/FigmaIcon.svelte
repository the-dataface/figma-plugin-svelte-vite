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

	$: icon = iconModules[`./icons/${name}.svg`];
</script>

<span class="figma-icon {classes}">
	{#if icon}
		{@html icon}
	{/if}
</span>
