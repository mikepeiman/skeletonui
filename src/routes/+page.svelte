<script lang="ts">
	import type { PageData } from './$types';
	import {storedUsername} from '$lib/stores/userstore';
	import Icon from '@iconify/svelte';
	export let data: PageData;
	console.log(`🚀 ~ file: +page.svelte:5 ~ data:`, data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to Metabrain, @{$storedUsername}.</h2>
		<!-- Animated Logo -->
		<figure class="w-full h-full">
			<section class="img-bg" />
			<Icon icon="fluent:brain-circuit-24-filled" class="w-full h-full" />
		</figure>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
