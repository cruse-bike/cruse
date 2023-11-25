import { l as push, u as attr, v as store_get, w as unsubscribe_stores, q as pop, t as create_anchor, x as slot } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/svelte-logo.87df40b8.svg";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header_svelte_svelte_type_style_lang = "";
function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<header class="svelte-1u9z1tp"><div class="corner svelte-1u9z1tp"><a href="https://kit.svelte.dev" class="svelte-1u9z1tp"><img${attr("src", logo, false)} alt="SvelteKit" class="svelte-1u9z1tp"></a></div> <nav class="svelte-1u9z1tp"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1u9z1tp"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1u9z1tp"></path></svg> <ul class="svelte-1u9z1tp"><li${attr("aria-current", store_get($$store_subs, "$page", page).url.pathname === "/" ? "page" : void 0, false)} class="svelte-1u9z1tp"><a href="/" class="svelte-1u9z1tp">Home</a></li> <li${attr("aria-current", store_get($$store_subs, "$page", page).url.pathname === "/about" ? "page" : void 0, false)} class="svelte-1u9z1tp"><a href="/about" class="svelte-1u9z1tp">About</a></li> <li${attr("aria-current", store_get($$store_subs, "$page", page).url.pathname.startsWith("/sverdle") ? "page" : void 0, false)} class="svelte-1u9z1tp"><a href="/sverdle" class="svelte-1u9z1tp">Sverdle</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1u9z1tp"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1u9z1tp"></path></svg></nav> <div class="corner svelte-1u9z1tp"><a href="https://github.com/sveltejs/kit" class="svelte-1u9z1tp"><img${attr("src", github, false)} alt="GitHub" class="svelte-1u9z1tp"></a></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
function _layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app svelte-8o1gnw">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-8o1gnw">${anchor_1}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_1}</main> <footer class="svelte-8o1gnw"><p>visit <a href="https://kit.svelte.dev" class="svelte-8o1gnw">kit.svelte.dev</a> to learn SvelteKit</p></footer></div>`;
  pop();
}
export {
  _layout as default
};
