<script lang="ts">
	import uid from '$ui/lib/utils/uid';
	import float from '$ui/lib/actions/float';
	import Label from './Label.svelte';
	import outclick from '$ui/lib/actions/outclick';

	type SelectItem = {
		id: string;
		label: string;
		value: unknown;
		selected?: boolean;
		group?: string;
	};

	export let id: string = `combobox-${uid()}`;

	export let label: string = 'Dropdown';

	export let items: SelectItem[] = [];

	export let value: SelectItem | undefined = items.find((d) => d?.selected);

	export let placeholder: string = 'Select';

	export const clear = () => (value = undefined);

	let listEl: HTMLUListElement;
	let open = false;
</script>

<span class="inline-block" use:outclick={() => (open = false)}>
	<Label
		id="{id}-label"
		on:click={() => {
			open = !open;
		}}
		highlightOnFocus
	>
		<input
			type="text"
			{id}
			value={value?.value || ''}
			{placeholder}
			role="combobox"
			aria-controls="{id}-list"
			aria-autocomplete="list"
			aria-haspopup="listbox"
			aria-expanded={open}
			data-active-option="item1"
			aria-activedescendant={value?.id || undefined}
			readonly
			class="outline-none"
		/>
		<span aria-hidden="true" data-trigger="multiselect" />
	</Label>

	<ul
		id="{id}-list"
		role="listbox"
		aria-label={label}
		class="bg-figma-color-bg-inverse text-figma-color-text-oninverse p-0 m-0"
		use:float={{ target: `${id}-label`, hide: !open }}
		bind:this={listEl}
	>
		{#each items as item (item.value)}
			{@const isActive = item.value === value?.value}
			<li
				id={item.id}
				role="option"
				aria-selected={isActive}
				class:active={isActive}
				class="cursor-pointer"
				on:click={() => (value = item)}
			>
				{@html item.label}
			</li>
		{/each}
	</ul>
</span>
