import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, i as createEventDispatcher, j as each, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { u as user, a as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index2.js";
const SortableList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".over.s-bF1CfGpt5Wxa{@apply border-gray-400 scale-105;}",
  map: null
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full s-bF1CfGpt5Wxa",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1jmwi8z">No items</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $formData, $$unsubscribe_formData;
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  validate_store(formData, "formData");
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  $$unsubscribe_user();
  $$unsubscribe_formData();
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-zzls1r">Edit your Profile</h1> ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item, index }) => {
      return `<div class="group relative">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} <button class="btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10" data-svelte-h="svelte-1n5cbwc">Delete</button></div>`;
    }
  })} ${`<button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-1l5hg7j">Add a Link</button>`}` : ``}</main>`;
});
export {
  Page as default
};
