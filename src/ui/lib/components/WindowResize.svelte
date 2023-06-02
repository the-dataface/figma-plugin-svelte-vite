<script lang="ts">
	import { Maximize2Icon } from 'svelte-feather-icons';
	import { postMessage } from '$ui/lib/components/Message.svelte';

	let resizing = false;

	const resizeWindow = (e: MouseEvent) => {
		if (!resizing) return;

		const [width, height] = [e.clientX, e.clientY].map((d) =>
			Math.max(50, Math.floor(d + 5))
		);

		postMessage({ type: 'resize', size: { width, height } });
	};
</script>

<div
	id="resize"
	class="flex h-full cursor-se-resize items-center justify-center overflow-hidden border-l border-solid border-figma-border p-2 text-figma-text hover:text-figma-text-secondary active:text-figma-text-tertiary"
	on:mousedown={() => {
		resizing = true;
		window.addEventListener('mousemove', resizeWindow, true);
	}}
	on:mouseup={() => {
		resizing = false;
		window.removeEventListener('mousemove', resizeWindow, true);
	}}
>
	<Maximize2Icon size="16" class="rotate-90" />
</div>
