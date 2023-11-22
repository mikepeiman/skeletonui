import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
import "iconify-icon";
const UserLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "default" } = $$props;
  let { url = "foo" } = $$props;
  let { title = "some cool title" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", url, 0)} class="stack w-full text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"> <iconify-icon${add_attribute("icon", icon, 0)} style="color: #ba3329; font-size: 48px"></iconify-icon> <span class="text-lg text-white font-bold">${escape(title)}</span></a>`;
});
export {
  UserLink as U
};
