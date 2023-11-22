import { d as derived } from "./index2.js";
import { a as userData } from "./firebase.js";
import { g as get_store_value } from "./utils.js";
console.log(`🚀 ~ file: userstore.ts:5 ~ userData:`, get_store_value(userData));
const storedUsername = derived(userData, ($userData) => $userData?.username);
export {
  storedUsername as s
};
