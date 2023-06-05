<script lang="ts" context="module">
	import Select from '$ui/lib/components/inputs/Select.svelte';

	export const name: TabName = 'Tab #1';
</script>

<p>{name}</p>

<Select
	options={Array.from({ length: 6 }, (_, i) => `Option #${i}`)}
	placeholder="Hello World"
/>
