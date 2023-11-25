import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.51f771f1.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/disclose-version.e3436084.js","_app/immutable/chunks/runtime.e09db590.js"];
export const stylesheets = [];
export const fonts = [];
