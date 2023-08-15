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

	let value = 0;

	let colorpickerValue = '#ff0000';
	$: console.log(colorpickerValue);
</script>

<div class="flex flex-col gap-2">
	<p>{name}</p>

	<ColorPicker fallback="#ff0000" bind:value={colorpickerValue} />

	<div>
		<PositionGrid />
	</div>

	<div class="flex flex-row flex-wrap gap-1">
		<Select
			options={Array.from({ length: 6 }, (_, i) => ({
				label: `Option #${i}`,
				value: i,
				icon: ['alert', 'arrow-left-right', 'horizontal-padding', 'X', 'theme'][
					i
				],
			}))}
			placeholder={{ label: 'Select value', value: '-', icon: 'list' }}
		/>

		<Radio />
	</div>

	<Input icon="alert" tooltip="Angle" format={formatAngle} bind:value />

	<Checkbox id="checkbox-example" label="Checkbox" checked={true} />

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
