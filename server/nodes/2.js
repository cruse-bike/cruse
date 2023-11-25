import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.98ff1cc3.js","_app/immutable/chunks/disclose-version.e3436084.js","_app/immutable/chunks/runtime.e09db590.js","_app/immutable/chunks/index.56af5967.js"];
export const stylesheets = ["_app/immutable/assets/2.57239003.css"];
export const fonts = [];
