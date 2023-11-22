import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.463b24c7.js","_app/immutable/chunks/scheduler.4e08fc29.js","_app/immutable/chunks/index.c26ee3ff.js","_app/immutable/chunks/stores.2683753c.js","_app/immutable/chunks/singletons.05477d30.js","_app/immutable/chunks/index.be47d3ca.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
