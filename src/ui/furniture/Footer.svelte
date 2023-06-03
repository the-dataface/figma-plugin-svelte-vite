<script lang="ts">
	import {
		HelpCircleIcon,
		AlertCircleIcon,
		XIcon,
		InfoIcon,
		GitMergeIcon,
	} from 'svelte-feather-icons';
	import WindowResize from '$ui/lib/components/WindowResize.svelte';
	import pkg from '../../../package.json';
	import BrandLogo from '$ui/lib/components/BrandLogo.svelte';

	let isMenuOpen: boolean;
</script>

<div role="contentinfo" class="relative flex border-t border-foreground">
	<WindowResize />

	<details
		id="menu"
		class="mr-auto group flex h-full cursor-pointer select-none flex-nowrap items-center rounded-none bg-none text-2xs"
		title="Menu"
		bind:open={isMenuOpen}
	>
		<summary
			class="no-marker flex h-full w-full items-center justify-center border-x border-foreground p-2 hover:text-gray-600 active:text-gray-600"
		>
			<XIcon size="16" class="hidden group-open:block" />
			<InfoIcon size="16" class="block group-open:hidden" />
		</summary>
		<nav
			aria-label="About the project"
			class="menu-pane fixed left-2 bottom-10 flex flex-col rounded-lg border border-foreground p-0"
		>
			<ul class="divide-y divide-gray-400">
				{#each [{ href: pkg.homepage, icon: HelpCircleIcon, text: 'About' }, { href: pkg.bugs.url, icon: AlertCircleIcon, text: 'Report Issue' }, { href: `${pkg.homepage}/blob/main/CHANGELOG.md`, icon: GitMergeIcon, text: `v${pkg.version}` }] as { href, icon, text }}
					<li>
						<a
							class="flex items-center gap-2 py-2 px-3 text-sm hover:text-accent-dark active:text-accent-dark focus:text-accent-dark hover:underline"
							{href}
							target="_blank"
							rel="noreferrer"
							title={text}
						>
							<svelte:component this={icon} size="18" class="fill-gray-50" />
							<span>{text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</details>

	<BrandLogo class="ml-auto" />
</div>
