<script lang="ts" context="module">
	export const name: TabName = 'Features';
	export const icon: TabIcon = 'component';
</script>

<script lang="ts">
	import { notify } from '$ui/lib/components/Message.svelte';
	import FigmaIcon from '$ui/lib/components/figma-icons/FigmaIcon.svelte';

	const features = [
		{
			label: 'Tabs',
			description:
				'Tabular navigation is at the core of this template. Simply add a new `.svelte` file to the `src/ui/furniture/tabs` directory, and it will be automatically added to the navigation. The `name` and `icon` properties are required, and will be used to render the tab in the navigation.',
		},
		{
			label: 'Icons',
			description:
				"This template comes with Figma's 86 different icons built-in. Use the `FigmaIcon.svelte` component to easily render these inline, and edit colors by simply setting a text color. For example: `style:color=red;` would turn an icon red.",
		},
		{
			label: 'Messaging',
			description:
				'Simply communicate with Figma using the `Message.svelte` component. You can listen for messages using the `on:{MESSAGETYPE}` event, and send messages using the `postMessage` function exported from the same component.',
		},
		{
			label: 'Toasts',
			description:
				'Expanding on messaging, you can easily send toast to Figma while utilizing Figma\'s built-in toaster. Use the `notify` function exported from `Message.svelte` to send a toast. View notify\'s <a class="underline" href="https://www.figma.com/plugin-docs/api/properties/figma-notify/" target="_blank">documentation</a> for more information.',
		},
	];
</script>

<div class="flex flex-col gap-2">
	<h2 class="font-bold text-lg mb-0">{name}</h2>

	<p>
		This template features several built-in features and components designed to
		make developing faster and easier.
	</p>

	<div class="divide-y divide-figma-color-bg-tertiary mt-4">
		{#each features as feature}
			<div
				class="py-4 flex flex-col gap-1 first-of-type:border-t border-figma-color-bg-tertiary"
			>
				<h3 class="font-bold">{@html feature.label}</h3>
				<p class="text-sm">{@html feature.description}</p>
			</div>
		{/each}
	</div>
</div>
