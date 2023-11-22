import { c as create_ssr_component, e as escape, a as add_attribute, j as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
import { i as imgjpg } from "../../../chunks/user.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(`🚀 ~ file: +page.svelte:6 ~ data:`, data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-ia5kau_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-ia5kau_END -->`, ""} <main class="center justify-center text-center mx-auto mt-8 flex w-full"><div class="flex flex-col w-screen"><h1 class="text-7xl text-purple-500">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? imgjpg, 0)} alt="photoURL" width="256" class="mx-auto"> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none flex flex-col justify-center">${each(data.links, (item) => {
    return `<li class="bg-slate-600 p-0 rounded-lg m-4">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})} </li>`;
  })}</ul></div> <div class="flex flex-col w-[10vw]">${validate_component(Card, "Card").$$render($$result, { class: "bg-indigo-800" }, {}, {
    default: () => {
      return `<a href="${"/" + escape(data.username, true) + "/bio"}"><h4 class="text-2xl text-white" data-svelte-h="svelte-5lrvt8">Bio</h4></a>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { class: "bg-violet-800" }, {}, {
    default: () => {
      return `<a href="${"/" + escape(data.username, true) + "/edit"}"><h4 class="text-2xl text-white" data-svelte-h="svelte-mf1o9i">Edit</h4></a>`;
    }
  })}</div></main>`;
});
export {
  Page as default
};
