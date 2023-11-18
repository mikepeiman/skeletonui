<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { Card } from 'flowbite-svelte';
	import { page } from '$app/stores';
    import { user } from '$lib/firebase';
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


    const auth = getAuth();
    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
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
		}	];


</script>

<Stepper on:complete={onCompleteHandler} on:step={onStepHandler}>
	{#each steps as step}
		<Step>
			<svelte:fragment slot="header">{step.header}</svelte:fragment>
		</Step>
	{/each}
</Stepper>

{#if $user}
  <h2 class="card-title">Welcome, {$user.displayName}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button  type="button" class="btn variant-filled-primary" on:click={() => signOut(auth)}>Sign out</button>
{:else}
  <button  type="button" class="btn variant-filled-primary" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}
