<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { userData } from '$lib/firebase';
	import { storedUsername } from '$lib/stores/userstore';
	// import onmount and check storedusername
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let username = $storedUsername;
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
			href: `/${username}`,
			title: `${username}`,
			slot: 'lead'
		}
	];
	storedUsername.subscribe((value) => {
		console.log(`🚀 ~ file: +layout.svelte:43 ~ username.subscribe ~ value:`, value);
		username = value;
	});
	onMount(() => {
		console.log(`🚀 ~ file: +layout.svelte:45 ~ onMount ~ username:`, username);
		console.log(`🚀 ~ file: +layout.svelte:8 ~ storedUsername:`, $storedUsername);
	});
	export let data: PageData;
	console.log(`🚀 ~ file: +layout.svelte:8 ~ data:`, data);
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let currentTile: number = 0;
	let icon;
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
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}
				><svelte:fragment slot="lead">Home</svelte:fragment></AppRailAnchor
			>

			<AppRailAnchor href="/login" selected={$page.url.pathname === '/login'}
				><svelte:fragment slot="lead">Login</svelte:fragment></AppRailAnchor
			>

			<AppRailAnchor href="/login/username" selected={$page.url.pathname === '/login/username'}
				><svelte:fragment slot="lead">Username</svelte:fragment></AppRailAnchor
			>

			<AppRailAnchor href="/login/photo" selected={$page.url.pathname === '/login/photo'}
				><svelte:fragment slot="lead">Photo</svelte:fragment></AppRailAnchor
			>
			{#if username !== undefined}
				<AppRailAnchor href={`/${username}`} selected={$page.url.pathname === `/${username}`}
					><svelte:fragment slot="lead">{username}</svelte:fragment></AppRailAnchor
				>
			{/if}

			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">
					<Icon icon="fluent:brain-circuit-24-filled" class="icon w-full h-full" /></AppRailAnchor
				>
			</svelte:fragment></AppRail
		>
	</svelte:fragment>
	<slot />
</AppShell>
