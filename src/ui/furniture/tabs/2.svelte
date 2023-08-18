<script lang="ts" context="module">
	export const name: TabName = 'Inputs';
	export const icon: TabIcon = 'adjust';
</script>

<script lang="ts">
	import { formatAngle } from '$ui/lib/actions/formatinput';
	import Checkbox from '$ui/lib/components/inputs/Checkbox.svelte';
	import ColorPicker from '$ui/lib/components/inputs/ColorPicker.svelte';
	import Input from '$ui/lib/components/inputs/Input.svelte';
	import PositionGrid from '$ui/lib/components/inputs/PositionGrid.svelte';
	import Radio from '$ui/lib/components/inputs/Radio.svelte';
	import Select from '$ui/lib/components/inputs/Select.svelte';

	const inputs = [
		{
			component: Checkbox,
			props: {
				label: 'Check me?',
				checked: true,
				id: 'test-check',
			},
			label: 'Checkbox',
			description:
				"A basic checkbox, mimicking Figma's. Exported `checked` is boolean. Pass in `label` to include associated text.",
		},
		{
			component: Input,
			props: {
				icon: 'angle',
				tooltip: 'Tooltip',
				placeholder: 'Placeholder',
				format: formatAngle,
			},
			label: 'Basic Input',
			description:
				'A basic input. Optional icon, placeholder, tooltip and formatter.',
		},
		{
			component: ColorPicker,
			props: {},
			label: 'Color Picker',
			description:
				"A color picker, accepting HEX, RGB and HSL. Comes with a default formatter to standardize the output. Opacity is editable on the right, represented in terms of 0-100 percent. Click on the color box on the left to use Chrome's native color picker.",
		},
		{
			component: Select,
			props: {
				options: [
					{ label: 'Visible', value: 'visible', icon: 'visible' },
					{ label: 'Hidden', value: 'hidden', icon: 'hidden' },
				],
				placeholder: false,
			},
			label: 'Select',
			description:
				'A select input, accepting an array of items. Each item can have an icon, a label, and a value. The value of the selected item is exported. Optional tooltip and placeholder.',
		},
		{
			component: Radio,
			props: {
				items: [
					{
						icon: 'visible',
						value: true,
						checked: true,
						id: 'test-visible',
						'aria-label': 'visible',
					},
					{
						icon: 'hidden',
						value: false,
						id: 'test-hidden',
						'aria-label': 'hidden',
					},
				],
			},
			label: 'Radio group',
			description:
				'A radio group, accepting an array of items. Each item can have an icon, a label, and a value. Each input has a tooltip stemming from `aria-label`. The value of the selected item is exported.',
		},
		{
			component: PositionGrid,
			props: {},
			label: 'Position grid',
			description:
				"A basic position grid, mimicking Figma's autolayout grid. Exported value is expressed as `top-center`, `bottom-left`, etc.",
		},
	] as const;
</script>

<h2 class="font-bold text-lg mb-2">{name}</h2>

<p>
	This template comes with several Figma-esque inputs out-of-the-box to help you
	build faster.
</p>

<ul class="divide-y divide-figma-color-bg-tertiary mt-4">
	{#each inputs as input, i}
		<li
			class="py-4 flex flex-col gap-1 first-of-type:border-t border-figma-color-bg-tertiary"
		>
			<h3 class="font-bold">{@html input.label}</h3>
			<p class="text-sm">{@html input.description}</p>
			<div
				class="my-2 p-4 bg-figma-color-bg-tertiary bg-opacity-40 rounded-sm border border-figma-color-bg-tertiary grid place-content-center"
			>
				<svelte:component this={input.component} {...input.props} />
			</div>
		</li>
	{/each}
</ul>
