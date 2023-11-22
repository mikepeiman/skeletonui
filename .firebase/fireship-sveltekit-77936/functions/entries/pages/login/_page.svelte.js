import { i as identity, v as validate_store, s as subscribe, b as set_store_value, c as compute_slots } from "../../../chunks/utils.js";
import { c as create_ssr_component, i as createEventDispatcher, s as setContext, e as escape, j as each, g as getContext, o as onDestroy, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { p as prefersReducedMotionStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../../chunks/index2.js";
import { u as user, a as userData } from "../../../chunks/firebase.js";
import { getAuth } from "firebase/auth";
import { A as AuthCheck } from "../../../chunks/AuthCheck.js";
import "firebase/firestore";
import "firebase/storage";
import { i as imgjpg } from "../../../chunks/user.js";
import { s as storedUsername } from "../../../chunks/userstore.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const cBase$1 = "space-y-4";
const cHeader$1 = "flex items-center border-t mt-[15px]";
const cHeaderStep = "-mt-[15px] transition-all duration-300";
const cContent$1 = "";
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let classesBase;
  let classesHeader;
  let classesHeaderStep;
  let classesBadge;
  let classesContent;
  let $state, $$unsubscribe_state;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  validate_store(prefersReducedMotionStore, "prefersReducedMotionStore");
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const dispatch = createEventDispatcher();
  let { gap = "gap-4" } = $$props;
  let { stepTerm = "Step" } = $$props;
  let { badge = "variant-filled-surface" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { border = "border-surface-400-500-token" } = $$props;
  let { start = 0 } = $$props;
  let { justify = "justify-between" } = $$props;
  let { buttonBack = "variant-ghost" } = $$props;
  let { buttonBackType = "button" } = $$props;
  let { buttonBackLabel = "&larr; Back" } = $$props;
  let { buttonNext = "variant-filled" } = $$props;
  let { buttonNextType = "button" } = $$props;
  let { buttonNextLabel = "Next &rarr;" } = $$props;
  let { buttonComplete = "variant-filled-primary" } = $$props;
  let { buttonCompleteType = "button" } = $$props;
  let { buttonCompleteLabel = "Complete" } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fade } = $$props;
  let { transitionInParams = { duration: 100 } } = $$props;
  let { transitionOut = fade } = $$props;
  let { transitionOutParams = { duration: 100 } } = $$props;
  let state = writable({ current: start, total: 0 });
  validate_store(state, "state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  setContext("state", state);
  setContext("dispatchParent", dispatch);
  setContext("stepTerm", stepTerm);
  setContext("gap", gap);
  setContext("justify", justify);
  setContext("buttonBack", buttonBack);
  setContext("buttonBackType", buttonBackType);
  setContext("buttonBackLabel", buttonBackLabel);
  setContext("buttonNext", buttonNext);
  setContext("buttonNextType", buttonNextType);
  setContext("buttonNextLabel", buttonNextLabel);
  setContext("buttonComplete", buttonComplete);
  setContext("buttonCompleteType", buttonCompleteType);
  setContext("buttonCompleteLabel", buttonCompleteLabel);
  setContext("transitions", transitions);
  setContext("transitionIn", transitionIn);
  setContext("transitionInParams", transitionInParams);
  setContext("transitionOut", transitionOut);
  setContext("transitionOutParams", transitionOutParams);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.badge === void 0 && $$bindings.badge && badge !== void 0)
    $$bindings.badge(badge);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  isActive = (step) => step === $state.current;
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader$1} ${border} ${gap} ${regionHeader}`;
  classesHeaderStep = `${cHeaderStep}`;
  classesBadge = (step) => isActive(step) ? active : badge;
  classesContent = `${cContent$1} ${regionContent}`;
  $$unsubscribe_state();
  $$unsubscribe_prefersReducedMotionStore();
  return `<div class="${"stepper " + escape(classesBase, true)}" data-testid="stepper"> ${$state.total ? `<header class="${"stepper-header " + escape(classesHeader, true)}">${each(Array.from(Array($state.total).keys()), (step) => {
    return `<div class="${[
      "stepper-header-step " + escape(classesHeaderStep, true),
      isActive(step) ? "flex-1" : ""
    ].join(" ").trim()}"><span class="${"badge " + escape(classesBadge(step), true)}">${escape(isActive(step) ? `${stepTerm} ${step + 1}` : step + 1)}</span> </div>`;
  })}</header>` : ``}  <div class="${"stepper-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const cBase = "space-y-4";
const cHeader = "text-2xl font-bold";
const cContent = "space-y-4";
const cNavigation = "flex";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesContent;
  let classesNavigation;
  let $$slots = compute_slots(slots);
  let $state, $$unsubscribe_state;
  let { locked = false } = $$props;
  let { regionHeader = "" } = $$props;
  let { regionContent = "" } = $$props;
  let { regionNavigation = "" } = $$props;
  let { state = getContext("state") } = $$props;
  validate_store(state, "state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { dispatchParent = getContext("dispatchParent") } = $$props;
  let { stepTerm = getContext("stepTerm") } = $$props;
  let { gap = getContext("gap") } = $$props;
  let { justify = getContext("justify") } = $$props;
  let { buttonBack = getContext("buttonBack") } = $$props;
  let { buttonBackType = getContext("buttonBackType") } = $$props;
  let { buttonBackLabel = getContext("buttonBackLabel") } = $$props;
  let { buttonNext = getContext("buttonNext") } = $$props;
  let { buttonNextType = getContext("buttonNextType") } = $$props;
  let { buttonNextLabel = getContext("buttonNextLabel") } = $$props;
  let { buttonComplete = getContext("buttonComplete") } = $$props;
  let { buttonCompleteType = getContext("buttonCompleteType") } = $$props;
  let { buttonCompleteLabel = getContext("buttonCompleteLabel") } = $$props;
  let { transitions = getContext("transitions") } = $$props;
  let { transitionIn = getContext("transitionIn") } = $$props;
  let { transitionInParams = getContext("transitionInParams") } = $$props;
  let { transitionOut = getContext("transitionOut") } = $$props;
  let { transitionOutParams = getContext("transitionOutParams") } = $$props;
  const stepIndex = $state.total;
  set_store_value(state, $state.total++, $state);
  onDestroy(() => {
    set_store_value(state, $state.total--, $state);
  });
  if ($$props.locked === void 0 && $$bindings.locked && locked !== void 0)
    $$bindings.locked(locked);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionContent === void 0 && $$bindings.regionContent && regionContent !== void 0)
    $$bindings.regionContent(regionContent);
  if ($$props.regionNavigation === void 0 && $$bindings.regionNavigation && regionNavigation !== void 0)
    $$bindings.regionNavigation(regionNavigation);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.dispatchParent === void 0 && $$bindings.dispatchParent && dispatchParent !== void 0)
    $$bindings.dispatchParent(dispatchParent);
  if ($$props.stepTerm === void 0 && $$bindings.stepTerm && stepTerm !== void 0)
    $$bindings.stepTerm(stepTerm);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.buttonBack === void 0 && $$bindings.buttonBack && buttonBack !== void 0)
    $$bindings.buttonBack(buttonBack);
  if ($$props.buttonBackType === void 0 && $$bindings.buttonBackType && buttonBackType !== void 0)
    $$bindings.buttonBackType(buttonBackType);
  if ($$props.buttonBackLabel === void 0 && $$bindings.buttonBackLabel && buttonBackLabel !== void 0)
    $$bindings.buttonBackLabel(buttonBackLabel);
  if ($$props.buttonNext === void 0 && $$bindings.buttonNext && buttonNext !== void 0)
    $$bindings.buttonNext(buttonNext);
  if ($$props.buttonNextType === void 0 && $$bindings.buttonNextType && buttonNextType !== void 0)
    $$bindings.buttonNextType(buttonNextType);
  if ($$props.buttonNextLabel === void 0 && $$bindings.buttonNextLabel && buttonNextLabel !== void 0)
    $$bindings.buttonNextLabel(buttonNextLabel);
  if ($$props.buttonComplete === void 0 && $$bindings.buttonComplete && buttonComplete !== void 0)
    $$bindings.buttonComplete(buttonComplete);
  if ($$props.buttonCompleteType === void 0 && $$bindings.buttonCompleteType && buttonCompleteType !== void 0)
    $$bindings.buttonCompleteType(buttonCompleteType);
  if ($$props.buttonCompleteLabel === void 0 && $$bindings.buttonCompleteLabel && buttonCompleteLabel !== void 0)
    $$bindings.buttonCompleteLabel(buttonCompleteLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesHeader = `${cHeader} ${regionHeader}`;
  classesContent = `${cContent} ${regionContent}`;
  classesNavigation = `${cNavigation} ${justify} ${gap} ${regionNavigation}`;
  $$unsubscribe_state();
  return `  ${stepIndex === $state.current ? `<div class="${"step " + escape(classesBase, true)}" data-testid="step"> <header class="${"step-header " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : `${escape(stepTerm)} ${escape(stepIndex + 1)}`}</header>  <div class="${"step-content " + escape(classesContent, true)}">${slots.default ? slots.default({}) : `(${escape(stepTerm)} ${escape(stepIndex + 1)} Content)`}</div>  ${$state.total > 1 ? `<div class="${"step-navigation " + escape(classesNavigation, true)}">${stepIndex === 0 && $$slots.navigation ? ` <div class="step-navigation-slot">${slots.navigation ? slots.navigation({}) : ``}</div>` : ` <button${add_attribute("type", buttonBackType, 0)} class="${"btn " + escape(buttonBack, true)}" ${$state.current === 0 ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonBackLabel}<!-- HTML_TAG_END --></button>`} ${stepIndex < $state.total - 1 ? ` <button${add_attribute("type", buttonNextType, 0)} class="${"btn " + escape(buttonNext, true)}" ${locked ? "disabled" : ""}>${locked ? `<svg class="w-3 aspect-square fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>` : ``} <span><!-- HTML_TAG_START -->${buttonNextLabel}<!-- HTML_TAG_END --></span></button>` : ` <button${add_attribute("type", buttonCompleteType, 0)} class="${"btn " + escape(buttonComplete, true)}" ${locked ? "disabled" : ""}><!-- HTML_TAG_START -->${buttonCompleteLabel}<!-- HTML_TAG_END --></button>`}</div>` : ``}</div>` : ``}`;
});
const UsernameSelect_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-error.s-0J5-JvJahcl-{@apply text-red-500;}.input-warning.s-0J5-JvJahcl-{@apply text-yellow-500;}.input-success.s-0J5-JvJahcl-{@apply text-green-500;}",
  map: null
};
const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const UsernameSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        "input w-full s-0J5-JvJahcl-",
        (!isValid && isTouched ? "input-error" : "") + " " + (isTaken ? "input-warning" : "") + " "
      ].join(" ").trim()}"${add_attribute("value", username, 0)}> <div class="my-4 min-h-16 px-8 w-full">${``} ${!isValid && isTouched ? `<p class="text-error text-sm" data-svelte-h="svelte-1cznyih">must be 3-16 characters long, alphanumeric only</p>` : ``} ${isValid && !isAvailable && !loading ? `<p class="text-warning text-sm">@${escape(username)} is not available</p>` : ``} ${``}</div></form>`;
    }
  })}`;
});
const ProfilePhotoSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  href = `/${$userData?.username}/edit`;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="card-title" data-svelte-h="svelte-1whglfv">Upload a Profile Photo</h2> <form class="max-w-screen-md w-full"><div class="form-control w-full max-w-xs my-10 mx-auto text-center"><img${add_attribute("src", $userData?.photoURL ?? imgjpg, 0)} alt="photoURL" width="256" height="256" class="mx-auto"> <label for="photoURL" class="label"><span class="label-text" data-svelte-h="svelte-1xba4c3">Pick a file</span></label> <input name="photoURL" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/png, image/jpeg, image/gif, image/webp"> ${``}</div></form> <a${add_attribute("href", href, 0)} class="btn btn-primary">Finish</a>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $storedUsername, $$unsubscribe_storedUsername;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  validate_store(storedUsername, "storedUsername");
  $$unsubscribe_storedUsername = subscribe(storedUsername, (value) => $storedUsername = value);
  getAuth();
  $$unsubscribe_user();
  $$unsubscribe_storedUsername();
  return ` ${validate_component(Stepper, "Stepper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Step 1`;
        },
        default: () => {
          return `${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)} (${escape($storedUsername)})</h2> <p class="text-center text-success" data-svelte-h="svelte-1958qcl">You are logged in</p> <button type="button" class="btn variant-filled-primary" data-svelte-h="svelte-1xehprr">Sign out</button>` : `<button type="button" class="btn variant-filled-primary" data-svelte-h="svelte-dipjky">Sign in with Google</button>`}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Step 2`;
        },
        default: () => {
          return `${validate_component(UsernameSelect, "UsernameSelect").$$render($$result, {}, {}, {})}`;
        }
      })} ${validate_component(Step, "Step").$$render($$result, {}, {}, {
        header: () => {
          return `Step 3`;
        },
        default: () => {
          return `${validate_component(ProfilePhotoSelect, "ProfilePhotoSelect").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
