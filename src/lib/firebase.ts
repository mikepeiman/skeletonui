import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAge5hR1W0_B0i3NRIkuYM21JV7SuPkqFI",
    authDomain: "fireship-sveltekit-77936.firebaseapp.com",
    projectId: "fireship-sveltekit-77936",
    storageBucket: "fireship-sveltekit-77936.appspot.com",
    messagingSenderId: "914963031469",
    appId: "1:914963031469:web:a5eb894c5643fe71e46d24",
    measurementId: "G-YPZJ13NS5E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current firebase user
 */

import { writable, derived } from 'svelte/store';



function userStore() {
    let unsubscribe: () => void;

    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable<User | null>(null);
        return {
            subscribe,
        }
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
    };
}

export const user = userStore();

/**
 * @returns a store with the current user
 *
 */

// simple store for user
// export const userData = writable<any>(null);

// user.subscribe((user) => {

//     if (user) {
//         const docRef = doc(db, `users/${user.uid}`);
//         onSnapshot(docRef, (snapshot) => {
//             userData.set(snapshot.data());
//         });
//     }
// });

/**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(
    path: string,
  ) {
    let unsubscribe: () => void;
  
    const docRef = doc(db, path);
  
    const { subscribe } = writable<T | null>(null, (set) => {
      unsubscribe = onSnapshot(docRef, (snapshot) => {
        set((snapshot.data() as T) ?? null);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
      ref: docRef,
      id: docRef.id,
    };
  }

  interface UserData {
    username: string;
    bio: string;
    photoURL: string;
    links: any[];
  }
  
  export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
    if ($user) {
    
      return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    } else {
      set(null); 
    }
  });  