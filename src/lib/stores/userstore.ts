import { derived, get } from 'svelte/store';

// Assuming you have imported userData from where it's defined
import { userData } from "$lib/firebase";
console.log(`🚀 ~ file: userstore.ts:5 ~ userData:`, get(userData))

// Create a derived store for username
export const storedUsername = derived(userData, $userData => $userData?.username);
