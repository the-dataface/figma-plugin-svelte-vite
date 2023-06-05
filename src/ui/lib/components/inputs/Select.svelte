<script lang="ts">
	/** @description attributes of the element */
	export let attributes: Record<string, string> = {};

	/** @description value of the element */
	export let value: string = '';

	/** @description array of strings as the options */
	export let options: string[] = [];

	/** @description placeholder text */
	export let placeholder: string = '';
</script>

<select {...attributes} bind:value on:change>
	{#if placeholder}
		<option value="" disabled selected hidden>{placeholder}</option>
	{/if}
	{#each options as option (option)}
		<option value={option} selected={option === value}>{option}</option>
	{/each}
</select>

<style lang="postcss">
	select {
	}
</style>
