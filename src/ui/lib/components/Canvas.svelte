<script lang="ts" context="module">
	import { type Writable } from 'svelte/store';

	export interface CanvasContext {
		register: (fn: (ctx: CanvasRenderingContext2D | null) => void) => void;
		deregister: (fn: (ctx: CanvasRenderingContext2D | null) => void) => void;
		invalidate: () => void;
		width: Writable<number>;
		height: Writable<number>;
	}

	// adapted from https://github.com/Wattenberger/svelte-recipes/blob/master/src/components/examples/scale-canvas.js
	export const scaleCanvas = (
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		center: boolean = true
	) => {
		// assume the device pixel ratio is 1 if the browser doesn't specify it
		const devicePixelRatio = window.devicePixelRatio || 1;

		// determine the 'backing store ratio' of the canvas ctx. deprecated and stagnant at 1.
		const backingStoreRatio = 1;

		// determine the actual ratio we want to draw at
		const ratio = devicePixelRatio / backingStoreRatio;

		if (devicePixelRatio !== backingStoreRatio) {
			// set the 'real' canvas size to the higher width/height
			canvas.width = width * ratio;
			canvas.height = height * ratio;

			// ...then scale it back down with CSS
			canvas.style.width = width + 'px';
			canvas.style.height = height + 'px';
		} else {
			// this is a normal 1:1 device; just scale it simply
			canvas.width = width;
			canvas.height = height;
			canvas.style.width = '';
			canvas.style.height = '';
		}

		// scale the drawing ctx so everything will work at the higher ratio
		ctx.scale(ratio, ratio);

		if (center) ctx.translate(width / 2, height / 2);
	};
</script>

<script lang="ts">
	import { onMount, onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	interface $$Props extends svelteHTML.HTMLAttributes<HTMLCanvasElement> {
		width: number;
		height: number;
		canvas?: HTMLCanvasElement;
		ctx?: CanvasRenderingContext2D | null;
		context: string;
		center?: boolean;
		globalAlpha?: number;
	}

	export let width: $$Props['width'] = 0;
	export let height: $$Props['height'] = 0;
	export let center: $$Props['center'] = false;
	export let context: $$Props['context'] = 'canvas';
	export let globalAlpha: $$Props['globalAlpha'] = undefined;

	// useful bindings
	export let canvas: $$Props['canvas'] = undefined;
	export let ctx: $$Props['ctx'] = undefined;

	let pendingInvalidation: boolean = false;
	let frameId: number;
	let mounted = false;

	const drawFunctions: { (ctx: CanvasRenderingContext2D | null): void }[] = [];

	const update = () => {
		if (!ctx) return;

		if (globalAlpha !== undefined) ctx.globalAlpha = globalAlpha;

		if (center) ctx.clearRect(-width / 2, -height / 2, width, height);
		else ctx.clearRect(0, 0, width, height);

		drawFunctions.forEach((fn) => {
			if (!ctx) return;

			ctx.save();
			fn(ctx);
			ctx.restore();
		});

		pendingInvalidation = false;
	};

	onMount(() => {
		mounted = true;
		ctx = canvas?.getContext('2d');
	});

	onDestroy(() => {
		if (frameId) cancelAnimationFrame(frameId);
	});

	const _width = writable(width);
	const _height = writable(height);

	$: _width.set(width);
	$: _height.set(height);

	$: setContext(context, {
		register(fn) {
			drawFunctions.push(fn);
		},
		deregister(fn) {
			drawFunctions.splice(drawFunctions.indexOf(fn), 1);
		},
		invalidate() {
			if (pendingInvalidation) return;
			pendingInvalidation = true;
			frameId = requestAnimationFrame(update);
		},
		width: _width,
		height: _height,
	}) as CanvasContext;

	$: if (canvas && ctx) scaleCanvas(canvas, ctx, width, height, center);
</script>

<canvas
	id={context.replaceAll(/[\W+]/gi, '-').toLowerCase()}
	{...$$restProps}
	bind:this={canvas}
/>
<slot />

<style>
	canvas {
		display: var(--display);
		position: var(--position);
		z-index: var(--z-index);
		pointer-events: var(--pointer-events);
	}
</style>
