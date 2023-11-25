import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.cc88c9bb.js","_app/immutable/chunks/disclose-version.e3436084.js","_app/immutable/chunks/runtime.e09db590.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.10644159.js","_app/immutable/chunks/index.56af5967.js"];
export const stylesheets = ["_app/immutable/assets/4.8d9b445d.css"];
export const fonts = [];
