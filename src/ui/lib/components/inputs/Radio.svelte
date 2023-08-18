<script lang="ts">
	import tooltip from '$ui/lib/actions/tooltip';
	import uid from '$ui/lib/utils/uid';
	import FigmaIcon from '../figma-icons/FigmaIcon.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface RadioItem extends HTMLInputAttributes {
		icon: FigmaIconName;
		value: unknown;
		checked?: boolean;
		id: string;
		/** a text description of the input. Required for a11y */
		'aria-label': string;
	}

	/** The label for the entire fieldset. Visually hidden. */
	export let label: string | undefined = undefined;

	/** the name of the radio groups */
	export let name: string = `radio-${uid()}`;

	export let items: RadioItem[] = [
		{
			icon: 'hidden',
			value: 'a',
			checked: true,
			id: 'radio-a',
			'aria-label': 'radio a',
		},
		{
			icon: 'visible',
			value: 'b',
			id: 'radio-b',
			'aria-label': 'radio b',
		},
	];

	export let value: unknown | undefined =
		items.find((d) => d.checked === true)?.value || items[0]?.value;

	let itemEls: HTMLLabelElement[] = [];
</script>

<div>
	<fieldset
		class="rounded-sm overflow-hidden inline-flex flex-row flex-nowrap border border-transparent hover:border-figma-color-bg-tertiary focus:border-figma-color-bg-tertiary group bg-figma-color-bg"
	>
		{#if label}
			<legend class="sr-only">{label}</legend>
		{/if}

		{#each items as { icon, value: inputValue, ...inputAttributes }, i}
			{@const isChecked = value === inputValue}
			<div>
				<label
					class="group/label w-6 h-6 grid relative place-content-center leading-none {isChecked
						? 'bg-figma-color-bg-tertiary rounded-sm group-hover:rounded-none group-focus:rounded-none'
						: ''}"
					aria-label={inputAttributes['aria-label']}
					bind:this={itemEls[i]}
					use:tooltip={{ content: inputAttributes['aria-label'] }}
				>
					<FigmaIcon name={icon} />

					<input
						{...inputAttributes}
						value={inputValue}
						type="radio"
						{name}
						class:sr-only={true}
						bind:group={value}
					/>
				</label>
			</div>
		{/each}
	</fieldset>
</div>

<style lang="postcss">
</style>
