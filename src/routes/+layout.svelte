<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	let currentTile: number = 0;
	let icon;

	let railItems = [
		{
			value: 0,
			href: '/login',
			title: 'item-1',
			slot: 'lead',
		},
		{
			value: 0,
			href: '/login/username',
			title: 'item-2',
			slot: 'lead',
		},
		{
			value: 0,
			href: '/login/photo',
			title: 'item-3',
			slot: 'lead',
		},
	]
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
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/">Home</AppRailAnchor>
			</svelte:fragment>
			<!-- --- -->
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<AppRailAnchor href="/login">
					<svelte:fragment slot="lead">Login</svelte:fragment></AppRailAnchor
				>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<AppRailAnchor href="/login">
					<svelte:fragment slot="lead">Login</svelte:fragment></AppRailAnchor
				>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
				<AppRailAnchor href="/login">
					<svelte:fragment slot="lead">Login</svelte:fragment></AppRailAnchor
				>
			</AppRailTile>

			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
			</svelte:fragment></AppRail
		>
	</svelte:fragment>
	<slot />
</AppShell>
