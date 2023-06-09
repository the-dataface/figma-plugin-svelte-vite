<script lang="ts">
	import { ArrowUpLeftIcon } from 'svelte-feather-icons';
	import { postMessage } from '$ui/lib/components/Message.svelte';

	let resizing = false;

	const resizeWindow = (e: MouseEvent) => {
		if (!resizing) return;

		const [width, height] = [e.clientX, e.clientY].map((d) =>
			Math.max(50, Math.floor(d + 5))
		);

		postMessage({
			type: 'resize-window',
			size: { width, height },
		});
	};
</script>

<svelte:window
	on:mouseup={() => {
		resizing = false;
		window.removeEventListener('mousemove', resizeWindow, true);
	}}
/>

<button
	id="resize"
	class="flex h-full cursor-nwse-resize items-center justify-center overflow-hidden p-2 text-figma-color-text hover:text-figma-color-text-hover active:text-figma-color-text-hover active:scale-125 origin-bottom-right motion-safe:transition-transform"
	on:mousedown={() => {
		resizing = true;
		window.addEventListener('mousemove', resizeWindow, true);
	}}
>
	<ArrowUpLeftIcon size="16" class="" />
</button>
