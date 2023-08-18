<script lang="ts">
	import FigmaIcon from '../figma-icons/FigmaIcon.svelte';
	import Label from './Label.svelte';

	let selectElement: HTMLSelectElement | undefined;

	/** @description attributes of the element */
	export let attributes: Record<string, string> = {};

	/** @description array of strings as the options */
	export let options: SelectItem[] = [];

	/** @description placeholder text */
	export let placeholder: SelectItem | undefined = {
		label: 'Select an option',
		value: '-',
		icon: '-',
	};

	/** @description value of the element */
	export let value: SelectItem = placeholder || options[0];

	export let tooltip: string | undefined = undefined;

	export const clear = () => {
		if (!selectElement) return;
		value = placeholder || options[0];
	};
</script>

<Label class="h-7 relative select-label" {tooltip} highlightOnFocus isSelect>
	<slot />
	<span
		class="absolute left-0 inset-y-0 translate-y-px grid place-content-center w-6 h-6 pl-1 leading-none pointer-events-none"
	>
		<FigmaIcon
			name={value?.icon ?? '-'}
			class="max-w-[16px]"
			size="sm"
			isLabelIcon
		/>
	</span>
	<select
		placeholder={placeholder?.label ?? undefined}
		{...attributes}
		class:w-full={true}
		class:input-text={true}
		class:is-placeholder={value === placeholder}
		on:change
		bind:value
		bind:this={selectElement}
	>
		{#if placeholder}
			<option value={placeholder} selected={placeholder.value === value.value}>
				{placeholder?.label ?? 'Select an option'}
			</option>
		{/if}
		{#each options as option (option)}
			<option value={option}>{option.label}</option>
		{/each}
	</select>
</Label>

<style lang="postcss">
	:global(.select-label) {
		@apply text-figma-color-text outline-none ring-0;
	}
	select {
		@apply border-0 bg-figma-color-bg text-figma-color-text pr-4 font-normal rounded-none outline-none ring-0 placeholder:text-figma-color-text h-[inherit] w-[inherit];
		padding-left: 26px;
		background-color: rgba(255, 255, 255, 0);
		background-image: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnIiB3aWR0aD0iOCIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOCA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0zLjY0NiA1LjM1NGwtMy0zIC43MDgtLjcwOEw0IDQuMjkzbDIuNjQ2LTIuNjQ3LjcwOC43MDgtMyAzTDQgNS43MDdsLS4zNTQtLjM1M3oiCiAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iLjMiIGZpbGw9IiMwMDAiIHN0cm9rZT0ibm9uZSI+PC9wYXRoPgo8L3N2Zz4=');
		background-position: calc(100% - 4px) calc(1px + 50%),
			calc(100% - 0px) calc(1px + 50%);
		background-size: 8px 8px, 8px 8px;
		background-repeat: no-repeat;
		appearance: none;
		-webkit-appearance: none;
	}
</style>
