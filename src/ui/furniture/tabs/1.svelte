<script lang="ts" context="module">
	export const name: TabName = 'Tab #1';
	export const icon: TabIcon = 'adjust';
</script>

<script lang="ts">
	import Checkbox from '$ui/lib/components/inputs/Checkbox.svelte';
	import Input from '$ui/lib/components/inputs/Input.svelte';
	import Label from '$ui/lib/components/inputs/Label.svelte';
	import Radio from '$ui/lib/components/inputs/Radio.svelte';
	import Select from '$ui/lib/components/inputs/_Select.svelte';
	import Combobox from '$ui/lib/components/inputs/Select.svelte';
</script>

<p>{name}</p>

<Label>
	<span>Label</span>
	<Select
		options={Array.from({ length: 6 }, (_, i) => `Option #${i}`)}
		placeholder="Hello World"
	/>
</Label>

<Combobox
	items={Array.from({ length: 5 }, (_, i) => ({
		value: i,
		label: 'label #i',
	}))}
/>

<Radio />

<Input />
