<script lang="ts">
	import { setContext, type SvelteComponent } from 'svelte';
	import { writable } from 'svelte/store';
	import Message from '$ui/lib/components/Message.svelte';
	import Rail from '$ui/furniture/Rail.svelte';

	export const tabs: SvelteComponent[] = Object.values(
		import.meta.glob('./furniture/tabs/*.svelte', {
			eager: true,
		})
	);

	const tab = writable(tabs[0].name);

	setContext('App', {
		tabs,
		tab,
	});
</script>

<!-- example message. hook into the Message component to capture events + data -->
<Message
	on:init={(e) => {
		console.log('Plugin initialized!');
	}}
/>

<svelte:head>
	<title>Svelte + Vite + TypeScript</title>
</svelte:head>

<div class="w-full h-full flex flex-col flex-wrap">
	<div class="flex-1 flex">
		<Rail />
		<main id="main" class="flex-1 min-w-[320px] max-h-screen overflow-auto p-3">
			{#each tabs as component}
				<section class:hidden={$tab !== component.name}>
					<h2 class="sr-only">{component.name}</h2>
					<svelte:component this={component.default} />
				</section>
			{/each}
		</main>
	</div>
</div>

<style>
</style>
