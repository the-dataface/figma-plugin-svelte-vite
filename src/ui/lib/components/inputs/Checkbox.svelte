<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import uid from '$ui/lib/utils/uid';

	interface $$Props extends svelteHTML.HTMLAttributes<HTMLLabelElement> {
		label: string;
		checked: boolean;
		id: string;
	}

	export let label: string;
	export let checked: boolean;
	export let id = `checkbox-${uid()}`;

	const dispatch = createEventDispatcher();
</script>

<div class="group container relative flex cursor-pointer items-center gap-2">
	<input
		class="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
		type="checkbox"
		{id}
		bind:checked
		on:change
		on:focus
		on:blur
		on:toggle={() => {
			checked = !checked;
			dispatch('toggle');
		}}
	/>
	<div
		class="checkmark pointer-events-none relative flex h-3 w-3 flex-shrink-0 flex-grow-0 items-center justify-center border border-solid border-figma-border rounded-sm peer-checked:bg-figma-color-bg-brand peer-checked:border-figma-color-bg-brand"
	>
		{#if checked}
			<svg
				class="svg"
				width="8"
				height="8"
				viewBox="0 0 8 8"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="fill-figma-color-text-onselected-strong"
					d="M1.176 2.824L3.06 4.706 6.824.941 8 2.118 3.059 7.059 0 4l1.176-1.176z"
					fill-rule="evenodd"
					fill-opacity="1"
					stroke="none"
				/>
			</svg>
		{/if}
	</div>
	<label
		for={id}
		class="flex-grow cursor-pointer select-none pointer-events-none m-0 text-xs"
	>
		{label}
	</label>
</div>
