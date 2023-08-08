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
	import outclick from '$ui/lib/actions/outclick';
</script>

<div
	role="contentinfo"
	class="relative flex border-t border-figma-color-border bg-figma-color-bg"
>
	<div class="fixed bottom-0 right-0">
		<WindowResize />
	</div>

	<details
		id="footer-menu"
		class="mr-auto group flex h-full cursor-pointer select-none flex-nowrap items-center rounded-none bg-none text-2xs"
		title="Menu"
		use:outclick={() =>
			document.getElementById('footer-menu')?.removeAttribute('open')}
	>
		<summary
			class="no-marker flex h-full w-full items-center justify-center border-r border-figma-color-border p-2 hover:text-figma-color-text-hover active:text-figma-color-text-hover"
		>
			<XIcon size="16" class="hidden group-open:block" />
			<InfoIcon size="16" class="block group-open:hidden" />
		</summary>
		<nav
			aria-label="About the project"
			class="menu-pane fixed z-50 left-2 bottom-10 flex flex-col rounded-lg rounded-bl-none border border-figma-color-border overflow-hidden p-0 bg-figma-color-bg"
		>
			<ul class="divide-y divide-figma-color-border">
				{#each [{ href: pkg.homepage, icon: HelpCircleIcon, text: 'About' }, { href: pkg.bugs.url, icon: AlertCircleIcon, text: 'Report Issue' }, { href: `${pkg.homepage}/blob/main/CHANGELOG.md`, icon: GitMergeIcon, text: `v${pkg.version}` }] as { href, icon, text }}
					<li>
						<a
							class="flex items-center gap-2 py-2 px-3 text-sm hover:bg-figma-color-bg-hover focus:bg-figma-color-bg-hover hover:text-figma-color-text-hover active:text-figma-color-text-component-pressed focus:text-figma-color-text-hover hover:underline"
							{href}
							target="_blank"
							rel="noreferrer"
							title={text}
						>
							<svelte:component
								this={icon}
								size="18"
								class="fill-figma-color-bg text-figma-color-text"
							/>
							<span>{text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</details>

	<BrandLogo class="ml-auto" />
</div>
