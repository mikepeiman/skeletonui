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
			href: '/login',
		},
		// fill in for remaining steps
		{
			header: 'Step 2',
			content: 'content',
			href: '/login/username',
		},
		{
			header: 'Step 3',
			content: 'content',
			href: '/login/photo',
		},
		{
			header: 'Step 4',
			content: 'content',
		},
		{
			header: 'Step 5',
			content: 'content',
		}
	]
</script>

<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
	{#each steps as step}
		<Step>
			<svelte:fragment slot="header">{step.header}</svelte:fragment>
			<a href="{step.href}">{step.content}</a>	
			{$page.route.id}

		</Step>
	{/each}
	<!-- 
	<Step class="p-4 rounded-lg bg-cyan-400">
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step>
	<Step>
		<svelte:fragment slot="header">(header)</svelte:fragment>
		(content)
	</Step> -->
	<!-- ... -->
</Stepper>

<Card>
	<slot>Slot Fallback in Login Layout</slot>
</Card>
