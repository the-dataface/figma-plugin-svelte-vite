<script lang="ts" context="module">
	export const name: TabName = 'Tab #1';
	export const icon: TabIcon = 'adjust';
</script>

<script lang="ts">
	import { formatAngle } from '$ui/lib/actions/formatinput';
	import { notify } from '$ui/lib/components/Message.svelte';
	import FigmaIcon from '$ui/lib/components/figma-icons/FigmaIcon.svelte';
	import Checkbox from '$ui/lib/components/inputs/Checkbox.svelte';
	import Input from '$ui/lib/components/inputs/Input.svelte';
	import PositionGrid from '$ui/lib/components/inputs/PositionGrid.svelte';
	import Radio from '$ui/lib/components/inputs/Radio.svelte';
	import Select from '$ui/lib/components/inputs/Select.svelte';
	import ColorPicker from '$ui/lib/components/inputs/ColorPicker.svelte';

	let angleValue = 0;
	let colorpickerValue = '#ff0000';

	const selectOptions = [
		{
			label: 'Option #1',
			value: 1,
			icon: 'alert',
		},
		{
			label: 'Option #2',
			value: 2,
			icon: 'X',
		},
		{
			label: 'Option #3',
			value: 3,
			icon: 'arrow-left-right',
		},
	] as SelectItem[];
</script>

<div class="flex flex-col gap-2">
	<p>{name}</p>

	<div class="grid grid-cols-2 gap-2">
		<div class="col-span-full flex flex-row flex-nowrap items-center gap-2">
			<ColorPicker bind:value={colorpickerValue} />
			<Radio
				items={[
					{
						icon: 'visible',
						'aria-label': 'visible',
						id: 'color-visible',
						value: true,
					},
					{
						icon: 'minus',
						'aria-label': 'hidden',
						id: 'color-hidden',
						value: false,
					},
				]}
				value={undefined}
			/>
		</div>
		<Input
			icon="alert"
			tooltip="Angle"
			format={formatAngle}
			bind:value={angleValue}
		/>
		<div class="w-full">
			<Select
				options={selectOptions}
				placeholder={{ label: 'Select value', value: '-', icon: 'list' }}
			/>
		</div>
		<Checkbox id="checkbox-example" label="Checkbox" checked={true} />
	</div>

	<div class="grid grid-cols-2">
		<PositionGrid />

		<button
			class="rounded-md bg-figma-color-bg-inverse text-figma-color-text-oninverse p-2 text-sm flex items-center justify-center"
			on:click={() => {
				notify('hello world!');
			}}
		>
			<FigmaIcon name="alert" />
			Notification!
		</button>
	</div>
</div>
