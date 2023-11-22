

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1bbeb727.js","_app/immutable/chunks/scheduler.4e08fc29.js","_app/immutable/chunks/index.c26ee3ff.js","_app/immutable/chunks/stores.2683753c.js","_app/immutable/chunks/singletons.05477d30.js","_app/immutable/chunks/index.be47d3ca.js"];
export const stylesheets = [];
export const fonts = [];
