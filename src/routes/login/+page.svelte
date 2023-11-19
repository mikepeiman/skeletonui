<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { Card } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { user } from '$lib/firebase';
	import {
		getAuth,
		createUserWithEmailAndPassword,
		GoogleAuthProvider,
		signInWithPopup,
		signOut
	} from 'firebase/auth';
	import UsernameSelect from '$lib/components/UsernameSelect.svelte';
	import ProfilePhotoSelect from '$lib/components/ProfilePhotoSelect.svelte';

	const auth = getAuth();

	async function signInWithGoogle() {
		console.log(`🚀 ~ file: +page.svelte:19 ~ signInWithGoogle ~ signInWithGoogle:`)
		const provider = new GoogleAuthProvider();
		const credential = await signInWithPopup(auth, provider);

		const idToken = await credential.user.getIdToken();

		const res = await fetch('/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
			},
			body: JSON.stringify({ idToken })
		});
	}

	async function signOutSSR() {
		const res = await fetch('/api/signin', { method: 'DELETE' });
		await signOut(auth);
	}

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

<!-- 
<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
	{#each steps as step}
		<Step>
			<svelte:fragment slot="header">{step.header}</svelte:fragment>
			<svelte:fragment slot="content"><UsernameSelect /></svelte:fragment>
		</Step>
	{/each}
</Stepper> 
-->

<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
	<Step>
		<svelte:fragment slot="header">Step 1</svelte:fragment>
		{#if $user}
			<h2 class="card-title">Welcome, {$user.displayName}</h2>
			<p class="text-center text-success">You are logged in</p>
			<button type="button" class="btn variant-filled-primary" on:click={() => signOutSSR()}
				>Sign out</button
			>
		{:else}
			<button type="button" class="btn variant-filled-primary" on:click={signInWithGoogle}
				>Sign in with Google</button
			>
		{/if}
	</Step>
	<Step>
		<svelte:fragment slot="header">Step 2</svelte:fragment>
		<UsernameSelect />
	</Step>
	<Step>
		<svelte:fragment slot="header">Step 3</svelte:fragment>
		<ProfilePhotoSelect />
	</Step>
</Stepper>
