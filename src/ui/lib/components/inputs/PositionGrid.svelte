<script context="module" lang="ts">
	const positions = [
		{
			label: 'Align top left',
			value: 'top-left',
		},
		{
			label: 'Align top center',
			value: 'top-center',
		},
		{
			label: 'Align top right',
			value: 'top-right',
		},
		{
			label: 'Align left',
			value: 'center-left',
		},
		{
			label: 'Align center',
			value: 'center-center',
		},
		{
			label: 'Align right',
			value: 'center-right',
		},
		{
			label: 'Align bottom left',
			value: 'bottom-left',
		},
		{
			label: 'Align bottom center',
			value: 'bottom-center',
		},
		{
			label: 'Align bottom right',
			value: 'bottom-right',
		},
	] as const;

	export type GridPosition = (typeof positions)[number]['value'];
</script>

<script lang="ts">
	import tooltip from '$ui/lib/actions/tooltip';

	export let value: GridPosition = 'center-center';

	let mouseover: GridPosition | undefined = undefined;
</script>

<fieldset
	class="inline-grid grid-cols-3 grid-rows-3 w-16 h-16 border border-solid border-figma-color-bg-tertiary rounded-sm bg-figma-color-bg"
>
	{#each positions as position}
		{@const [y, x] = position.value.split('-')}
		<label
			class="x-{x} y-{y} grid place-content-center pointer-events-[all]"
			on:mouseover={() => (mouseover = position.value)}
			on:focus={() => (mouseover = position.value)}
			on:mouseout={() => (mouseover = undefined)}
			on:blur={() => (mouseover = undefined)}
			use:tooltip={{ content: position.label }}
		>
			<input
				class="sr-only"
				type="radio"
				name={position.label}
				value={position.value}
				bind:group={value}
			/>

			<span class="sr-only">{position.label}</span>

			{#if position.value === value || position.value === mouseover}
				{@const bg =
					position.value === value
						? 'bg-figma-color-icon-brand'
						: 'bg-figma-color-icon-brand-secondary'}
				<div
					class="alignment-marker flex flex-col justify-between p-0.5 w-5 h-5 pointer-events-none"
					class:items-start={x === 'left'}
					class:items-center={x === 'center'}
					class:items-end={x === 'right'}
				>
					<div class="w-2.5 h-1 rounded-[1px] {bg}" />
					<div class="w-4 h-1 rounded-[1px] {bg}" />
					<div class="w-[7px] h-1 rounded-[1px] {bg}" />
				</div>
			{:else}
				<div
					class="w-0.5 h-0.5 bg-figma-color-icon-tertiary rounded-full pointer-events-none"
				/>
			{/if}
		</label>
	{/each}
</fieldset>
