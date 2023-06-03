<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// multi-use components
	import Message from '$ui/lib/components/Message.svelte';
	import WindowResize from '$ui/lib/components/WindowResize.svelte';

	// singletons
	import Footer from '$ui/furniture/Footer.svelte';
	const tabComponents: SvelteComponent[] = Object.values(
		import.meta.glob('./furniture/tabs/*.svelte', {
			eager: true,
		})
	);

	// the current active tab
	let tab: TabName = tabComponents[0].name;
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

<div class="w-full h-full flex flex-col">
	<div class="flex-1 flex">
		<div class="flex flex-col border-r border-foreground max-h-screen">
			<header
				class="text-center pl-3 py-3 pr-6 sticky top-0 inset-x-0 bg-background"
			>
				<h1 class="font-bold">Svelte + Vite + TypeScript</h1>
				<!-- Navigation or Tab content. Useful for creating "panes" or "tabs" -->
				<!-- <nav>		
				</nav> -->
			</header>

			<nav
				aria-label="Settings and navigation panes"
				class="flex-1 overflow-y-auto"
			>
				<ul class="flex flex-col">
					{#each tabComponents as component, i}
						<li class="w-full" aria-current="true">
							<input
								class="sr-only peer"
								type="radio"
								name="tabs"
								id="tab-{i}"
								checked={i === 0}
								value={component.name}
								bind:group={tab}
							/>
							<label
								class="block w-full p-3 cursor-pointer peer-focus:bg-gray-100 peer-hover:bg-gray-100 peer-checked:!bg-gray-200"
								for="tab-{i}"
							>
								{component.name}
							</label>
						</li>
					{/each}
				</ul>
			</nav>

			<Footer />
		</div>

		<main class="flex-1 max-h-screen overflow-auto p-3">
			{#each tabComponents as component}
				<div class:hidden={tab !== component.name}>
					<svelte:component this={component.default} />
				</div>
			{/each}
		</main>
	</div>
</div>

<style>
</style>
