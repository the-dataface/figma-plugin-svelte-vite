<script lang="ts">
	import InputWrapper from './InputWrapper.svelte';

	const placeholderValue = '-';
	let selectElement: HTMLSelectElement | undefined;

	/** @description attributes of the element */
	export let attributes: Record<string, string> = {};

	/** @description array of strings as the options */
	export let options: string[] = [];

	/** @description placeholder text */
	export let placeholder: string | false = false;

	/** @description value of the element */
	export let value: string = placeholder ? placeholderValue : options[0];

	export const clear = () => {
		if (!(selectElement instanceof HTMLSelectElement)) return;
		value = placeholder ? placeholderValue : options[0];
	};
</script>

<InputWrapper>
	<slot />
	<select
		class="text-figma-color-text-"
		{...attributes}
		class:is-placeholder={placeholder && value === placeholderValue}
		on:change
		bind:value
		bind:this={selectElement}
	>
		{#if placeholder}
			<option value="-" disabled selected={value === placeholderValue}>
				{placeholder}
			</option>
		{/if}
		{#each options as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>
</InputWrapper>

<style lang="postcss">
	select {
		@apply border border-figma-color-border border-opacity-0 bg-figma-color-bg text-figma-color-text pr-10 font-normal text-sm rounded-none p-1;
		background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
			linear-gradient(135deg, currentColor 50%, transparent 50%);
		background-position: calc(100% - 20px) calc(1px + 50%),
			calc(100% - 16px) calc(1px + 50%);
		background-size: 4px 4px, 4px 4px;
		background-repeat: no-repeat;
		appearance: none;
		-webkit-appearance: none;
	}
	select:hover,
	select:focus {
		@apply border-opacity-100 outline outline-2 outline-offset-2 outline-figma-color-border;
	}
	select.is-placeholder {
		@apply text-figma-color-text-tertiary;
	}
</style>
