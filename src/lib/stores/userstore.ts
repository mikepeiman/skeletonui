import { derived, get } from 'svelte/store';

// Assuming you have imported userData from where it's defined
import { userData } from "$lib/firebase";

// Create a derived store for username
export const username = derived(userData, $userData => $userData?.username);
console.log(`🚀 ~ file: userstore.ts:8 ~ username:`, get(username))
