<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { userData } from '$lib/firebase';
	import { username } from '$lib/stores/userstore';

	export let data: PageData;
	console.log(`🚀 ~ file: +layout.svelte:8 ~ data:`, data);
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let currentTile: number = 0;
	let icon;

	let railItems = [
		{
			value: 0,
			href: '/',
			title: 'Home',
			slot: 'lead'
		},
		{
			value: 0,
			href: '/login',
			title: 'Login',
			slot: 'lead'
		},
		{
			value: 0,
			href: '/login/username',
			title: 'Username',
			slot: 'lead'
		},
		{
			value: 0,
			href: '/login/photo',
			title: 'Photo',
			slot: 'lead'
		},
		{
			value: 0,
			href: `/${$username}`,
			title: 'Account',
			slot: 'lead'
		}
	];
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Metabrain</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
		<!-- Page Route Content -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			{#each railItems as item}
				<AppRailAnchor href={item.href} selected={$page.url.pathname === item.href}
					><svelte:fragment slot="lead">{item.title}</svelte:fragment></AppRailAnchor
				>
			{/each}

			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment></AppRail
		>
	</svelte:fragment>
	<slot />
</AppShell>
