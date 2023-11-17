<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { Card } from 'flowbite-svelte';
	import { page } from '$app/stores';

	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}
	function onStepHandler(e: {
		detail: { state: { current: number; total: number }; step: number };
	}): void {
		console.log('event:step', e);
	}

	const steps = [
		{
			header: 'Step 1',
			content: 'content',
			href: '/login'
		},
		// fill in for remaining steps
		{
			header: 'Step 2',
			content: 'content',
			href: '/login/username'
		},
		{
			header: 'Step 3',
			content: 'content',
			href: '/login/photo'
		}
	];
</script>

<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
	{#each steps as step}
		<Step>
			<svelte:fragment slot="header">{step.header}</svelte:fragment>
		</Step>
	{/each}
</Stepper>

<slot />
