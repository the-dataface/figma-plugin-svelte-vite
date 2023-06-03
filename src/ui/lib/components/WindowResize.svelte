<script lang="ts">
	import { Maximize2Icon } from 'svelte-feather-icons';
	import { postMessage } from '$ui/lib/components/Message.svelte';

	let resizing = false;

	const resizeWindow = (e: MouseEvent) => {
		if (!resizing) return;

		const [width, height] = [e.clientX, e.clientY].map((d) =>
			Math.max(50, Math.floor(d + 5))
		);

		postMessage({ type: 'resize-window', size: { width, height } });
	};
</script>

<button
	id="resize"
	class="flex h-full cursor-nesw-resize items-center justify-center overflow-hidden border-l border-solid border-foreground p-2 hover:text-accent-dark active:text-accent-dark focus:text-accent-dark hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100"
	on:mousedown={() => {
		resizing = true;
		window.addEventListener('mousemove', resizeWindow, true);
	}}
	on:mouseup={() => {
		resizing = false;
		window.removeEventListener('mousemove', resizeWindow, true);
	}}
>
	<Maximize2Icon size="16" class="rotate-0" />
</button>
