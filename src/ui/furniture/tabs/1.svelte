<script lang="ts" context="module">
	export const name: TabName = 'Tab #1';
	export const icon: TabIcon = 'adjust';
</script>

<script lang="ts">
	import Select from '$ui/lib/components/inputs/Select.svelte';
</script>

<p>{name}</p>

<Select
	options={Array.from({ length: 6 }, (_, i) => `Option #${i}`)}
	placeholder="Hello World"
/>
