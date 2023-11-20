<script lang="ts">
	import UserLink from '$lib/components/UserLink.svelte';
	import type { PageData } from './$types';

	import imgjpg from '$lib/assets/user.jpg';
	import { Card } from 'flowbite-svelte';
	export let data: PageData;
	console.log(`🚀 ~ file: +page.svelte:6 ~ data:`, data);
</script>

<svelte:head>
	<title>@{data.username} Links</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<main class="center justify-center text-center mx-auto mt-8 flex w-full">
<div class="flex flex-col w-screen">
        
            <h1 class="text-7xl text-purple-500">
                @{data.username}
            </h1>
            <img src={data.photoURL ?? imgjpg} alt="photoURL" width="256" class="mx-auto" />
            <p class="text-xl my-8">{data.bio ?? 'no bio yet...'}</p>
            <ul class="list-none flex flex-col justify-center">
                {#each data.links as item}
                    <li class="bg-slate-600 p-0 rounded-lg m-4">
                        <UserLink {...item} />
                    </li>
                {/each}
            </ul>
</div>
	<div class="flex flex-col w-[10vw]">
        <Card class="bg-indigo-800">
            <a href="/{data.username}/bio">
                <h4 class="text-2xl text-white">Bio</h4>
            </a>
        </Card>
        <Card class="bg-violet-800">
            <a href="/{data.username}/edit">
                <h4 class="text-2xl text-white">Edit</h4>
            </a>
        </Card>
    </div>
</main>
