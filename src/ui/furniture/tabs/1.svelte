<script lang="ts" context="module">
	export const name: TabName = 'Tab #1';
	export const icon: TabIcon = 'adjust';
</script>

<script lang="ts">
	import { formatAngle } from '$ui/lib/actions/formatinput';
	import FigmaIcon from '$ui/lib/components/figma-icons/FigmaIcon.svelte';
	import Checkbox from '$ui/lib/components/inputs/Checkbox.svelte';
	import Input from '$ui/lib/components/inputs/Input.svelte';
	import Label from '$ui/lib/components/inputs/Label.svelte';
	import PositionGrid from '$ui/lib/components/inputs/PositionGrid.svelte';
	import Radio from '$ui/lib/components/inputs/Radio.svelte';
	import Select from '$ui/lib/components/inputs/Select.svelte';

	let value = 0;
</script>

<p>{name}</p>

<PositionGrid />

<Select
	options={Array.from({ length: 6 }, (_, i) => `Option #${i}`)}
	placeholder="Hello World"
/>

<Radio />

<Input format={formatAngle} bind:value />
