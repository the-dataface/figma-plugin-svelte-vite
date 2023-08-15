<script lang="ts">
	import { getContext, onMount, afterUpdate, onDestroy } from 'svelte';
	import type Canvas from '$ui/lib/components/Canvas.svelte';
	import { type CanvasContext } from '$ui/lib/components/Canvas.svelte';

	export let context;

	const { register, deregister, invalidate, width, height } = getContext(
		context
	) as CanvasContext;

	const draw = (ctx: Canvas['$$prop_def']['ctx']) => {
		if (!ctx) return;

		ctx.rect(0, 0, $width, $height);
		const gradient = ctx.createLinearGradient(0, 0, 0, $height);
		gradient.addColorStop(0, 'red');
		gradient.addColorStop(1 / 6, 'orange');
		gradient.addColorStop(2 / 6, 'yellow');
		gradient.addColorStop(3 / 6, 'green');
		gradient.addColorStop(4 / 6, 'blue');
		gradient.addColorStop(5 / 6, 'indigo');
		gradient.addColorStop(1, 'violet');
		ctx.fillStyle = gradient;
		ctx.fill();
	};

	onMount(() => {
		register(draw);
		invalidate();

		return () => {
			deregister(draw);
		};
	});

	afterUpdate(invalidate);

	onDestroy(invalidate);
</script>
