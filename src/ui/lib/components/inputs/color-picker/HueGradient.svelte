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
		const gradient = ctx.createLinearGradient(0, 0, $width, 0);
		gradient.addColorStop(0, 'red');
		gradient.addColorStop(1 / 7, 'orange');
		gradient.addColorStop(2 / 7, 'yellow');
		gradient.addColorStop(3 / 7, 'green');
		gradient.addColorStop(4 / 7, 'blue');
		gradient.addColorStop(5 / 7, 'indigo');
		gradient.addColorStop(6 / 7, 'violet');
		gradient.addColorStop(1, 'red');
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
