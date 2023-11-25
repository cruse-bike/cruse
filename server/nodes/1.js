

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e8d86119.js","_app/immutable/chunks/disclose-version.e3436084.js","_app/immutable/chunks/runtime.e09db590.js","_app/immutable/chunks/stores.cd34f819.js","_app/immutable/chunks/singletons.10644159.js","_app/immutable/chunks/index.56af5967.js"];
export const stylesheets = [];
export const fonts = [];
