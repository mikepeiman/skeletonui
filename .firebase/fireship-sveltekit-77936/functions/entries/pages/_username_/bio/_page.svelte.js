import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<main class="max-w-lg prose text-center mx-auto my-6 text-white"><p>Current Bio: <span class="text-info">${escape(data.bio)}</span></p> <p>Status Code: ${escape($page.status)}</p> <p class="text-error">${escape($page.form?.problem ?? "")}</p> <form method="POST"><div class="form-control"><label for="bio" class="label"><span class="label-text" data-svelte-h="svelte-270kv4">Your bio</span></label> <textarea name="bio" class="textarea textarea-bordered textarea-accent">${escape(data.bio, false)}</textarea></div> <button class="btn btn-primary my-5 bg-lime-700" data-svelte-h="svelte-1juznze">Update Bio</button></form></main>`;
});
export {
  Page as default
};
