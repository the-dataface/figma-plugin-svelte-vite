<script lang="ts" context="module">
	export const name: TabName = 'Introduction';
	export const icon: TabIcon = 'library';
</script>

<div class="flex flex-col gap-2">
	<h2 class="font-bold text-lg mb-0">{name}</h2>

	<p>
		This is a boilerplate for building Figma plugins with Svelte, Vite, and
		TypeScript. To learn more about building plugins, see the <a
			class="underline"
			href="https://www.figma.com/plugin-docs/intro/"
			target="_blank">Figma Plugin API documentation</a
		>.
	</p>

	<p>
		Read the template's <a
			class="underline"
			href="https://github.com/the-dataface/figma-plugin-svelte-vite/blob/main/README.md"
			target="_blank">README</a
		>
		to start building, and don't forget to generate your own
		<a
			class="underline"
			href="https://www.figma.com/plugin-docs/manifest/"
			target="_blank">plugin manfiest</a
		>. Click around this template's additional tabs to view included features.
	</p>

	<a
		class="flex flex-row flex-nowrap gap-2 items-center justify-center rounded-sm leading-none p-2 border border-figma-color-bg-inverse bg-figma-color-bg-inverse text-figma-color-icon-oninverse text-sm hover:opacity-95 my-2"
		href="https://github.com/new?template_name=figma-plugin-svelte-vite&template_owner=the-dataface"
		target="_blank"
	>
		<svg
			height="16"
			aria-hidden="true"
			viewBox="0 0 16 16"
			version="1.1"
			width="16"
		>
			<path
				d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
				fill="currentColor"
			/>
		</svg>
		<span>Use this template</span>
	</a>
</div>
