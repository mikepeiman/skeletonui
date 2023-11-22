import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
import { u as user } from "../../../../chunks/firebase.js";
import "firebase/firestore";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-error.s-2uxiIfS5eu3_{@apply text-red-500;}.input-warning.s-2uxiIfS5eu3_{@apply text-yellow-500;}.input-success.s-2uxiIfS5eu3_{@apply text-green-500;}",
  map: null
};
const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let isTouched;
  let isTaken;
  let $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  let username = "";
  let loading = false;
  let isAvailable = false;
  $$result.css.add(css);
  isValid = username?.length > 2 && username.length < 16 && re.test(username);
  isTouched = username.length > 0;
  isTaken = isValid && !isAvailable && !loading;
  $$unsubscribe_user();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `<form class="w-2/5"><input type="text" placeholder="Username" class="${[
        "input w-full s-2uxiIfS5eu3_",
        (!isValid && isTouched ? "input-error" : "") + " " + (isTaken ? "input-warning" : "") + " "
      ].join(" ").trim()}"${add_attribute("value", username, 0)}> <div class="my-4 min-h-16 px-8 w-full">${``} ${!isValid && isTouched ? `<p class="text-error text-sm" data-svelte-h="svelte-1cznyih">must be 3-16 characters long, alphanumeric only</p>` : ``} ${isValid && !isAvailable && !loading ? `<p class="text-warning text-sm">@${escape(username)} is not available</p>` : ``} ${``}</div></form>`;
    }
  })}`;
});
export {
  Page as default
};
