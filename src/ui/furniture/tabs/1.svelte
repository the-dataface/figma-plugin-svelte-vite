<script lang="ts" context="module">
	import { BoxIcon } from 'svelte-feather-icons';

	export const name: TabName = 'Tab #1';
	export const icon: TabIcon = BoxIcon;
</script>

<script lang="ts">
	import Select from '$ui/lib/components/inputs/Select.svelte';
</script>

<p>{name}</p>

<Select
	options={Array.from({ length: 6 }, (_, i) => `Option #${i}`)}
	placeholder="Hello World"
/>
