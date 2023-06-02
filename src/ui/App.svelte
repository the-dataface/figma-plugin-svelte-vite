<script lang="ts">
	import Message from '$ui/lib/components/Message.svelte';
	import BrandLogo from '$ui/lib/components/BrandLogo.svelte';

	let loaded: boolean = false;
</script>

<!-- example message. hook into the Message component to capture events + data -->
<Message
	on:load={(e) => {
		loaded = true;
		console.log('loaded!', e.detail);
	}}
/>

<svelte:head>
	<title>Svelte + Vite + TypeScript</title>
</svelte:head>

<main>
	<header>
		<BrandLogo class="w-24 h-24" />
		<h1>Svelte + Vite + TypeScript</h1>
	</header>

	<p>loaded: {loaded}</p>
</main>

<style>
</style>
