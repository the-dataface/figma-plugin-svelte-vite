<script lang="ts">
	/** @description attributes of the element */
	export let attributes: Record<string, string> = {};

	/** @description checked value of the element */
	export let checked: boolean | undefined = undefined;

	/** @description placeholder text */
	export let label: string = '';
</script>

<label class="">
	<input type="checkbox" {...attributes} bind:checked on:change />
	<span>{label}</span>
</label>

<style lang="postcss">
	label {
	}
	input {
	}
	span {
	}
</style>
