<script lang="ts">
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<AnimatedRoute>
	<Card class="bg-blue-600">
		<slot />
	</Card>
</AnimatedRoute>
