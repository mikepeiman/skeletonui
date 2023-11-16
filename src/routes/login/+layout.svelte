<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';

	import { Card } from 'flowbite-svelte';

	function onCompleteHandler(e: Event): void {
		console.log('event:complete', e);
	}
	function onStepHandler(e: {
		detail: { state: { current: number; total: number }; step: number };
	}): void {
		console.log('event:step', e);
	}
</script>

<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
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
	</Step>
	<!-- ... -->
</Stepper>

<Card>
	<slot>Slot Fallback in Login Layout</slot>
</Card>
