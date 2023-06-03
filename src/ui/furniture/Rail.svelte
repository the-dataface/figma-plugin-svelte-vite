<script lang="ts">
	import { getContext } from 'svelte';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import Footer from '$ui/furniture/Footer.svelte';

	const { tabs, tab } = getContext('App') as App;

	let isFlyoutMenuOpen: boolean | null = false;

	let width: number = 500;
	const toggleLayoutWidth: number = 500;

	$: isSmallScreen = width < toggleLayoutWidth;

	$: if (isSmallScreen) isFlyoutMenuOpen = null;
</script>

<svelte:window bind:innerWidth={width} />

<div
	id="rail"
	class="flex flex-col border-foreground max-h-screen transition-all"
	class:border-r={!isSmallScreen}
	class:w-full={isSmallScreen}
	class:absolute={isSmallScreen}
	class:inset-y-0={isSmallScreen}
	class:-left-full={isSmallScreen && !isFlyoutMenuOpen}
>
	{#if isSmallScreen}
		<button
			title="{isFlyoutMenuOpen ? 'Close' : 'open'} Menu"
			class="fixed z-50 right-0 top-0 p-2 text-foreground active:text-accent-light hover:text-accent-light focus:text-accent-light"
			on:click={() => {
				isFlyoutMenuOpen = !isFlyoutMenuOpen;
			}}
		>
			{#if isFlyoutMenuOpen}
				<XIcon size="16" />
			{:else}
				<MenuIcon size="16" />
			{/if}
		</button>
	{/if}
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
			{#each tabs as component, i}
				<li class="w-full" aria-current="true">
					<input
						class="sr-only peer"
						type="radio"
						name="tabs"
						id="tab-{i}"
						checked={i === 0}
						value={component.name}
						bind:group={$tab}
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
