<script lang="ts">
	import Label from './Label.svelte';

	const placeholderValue = '-';
	let selectElement: HTMLSelectElement | undefined;

	/** @description attributes of the element */
	export let attributes: Record<string, string> = {};

	/** @description array of strings as the options */
	export let options: string[] = [];

	/** @description placeholder text */
	export let placeholder: string | undefined = undefined;

	/** @description value of the element */
	export let value: string = placeholder ? placeholderValue : options[0];

	export let tooltip: string | undefined = 'Tooltip';

	export const clear = () => {
		if (!(selectElement instanceof HTMLSelectElement)) return;
		value = placeholder ? placeholderValue : options[0];
	};
</script>

<Label class="h-7" {tooltip} highlightOnFocus>
	<slot />
	<select
		class=""
		{placeholder}
		{...attributes}
		class:is-placeholder={placeholder && value === placeholderValue}
		on:change
		bind:value
		bind:this={selectElement}
	>
		{#if placeholder}
			<option value="-" selected={value === placeholderValue}>
				{placeholder}
			</option>
		{/if}
		{#each options as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>
</Label>

<style lang="postcss">
	select {
		@apply border-0 bg-figma-color-bg text-figma-color-text pr-4 font-normal text-xs rounded-none p-0 leading-none outline-none ring-0 placeholder:text-figma-color-text;
		background-image: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnIiB3aWR0aD0iOCIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOCA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0zLjY0NiA1LjM1NGwtMy0zIC43MDgtLjcwOEw0IDQuMjkzbDIuNjQ2LTIuNjQ3LjcwOC43MDgtMyAzTDQgNS43MDdsLS4zNTQtLjM1M3oiCiAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iLjMiIGZpbGw9IiMwMDAiIHN0cm9rZT0ibm9uZSI+PC9wYXRoPgo8L3N2Zz4=');
		background-position: calc(100% - 4px) calc(1px + 50%),
			calc(100% - 0px) calc(1px + 50%);
		background-size: 8px 8px, 8px 8px;
		background-repeat: no-repeat;
		appearance: none;
		-webkit-appearance: none;
	}
</style>
