import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { p as page } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render($$result, { class: "bg-blue-600" }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout as default
};
