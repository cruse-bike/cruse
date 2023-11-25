import { l as push, B as head, q as pop } from "../../../chunks/index3.js";
function _page($$payload, $$props) {
  push(false);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `About</title>`;
    $$payload2.out += `<meta name="description" content="About this app">`;
  });
  $$payload.out += `<div class="text-column"><h1>About this app</h1> <p>This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the following into your command line and following the prompts:</p> <pre>npm create svelte@latest</pre> <p>The page you're looking at is purely static HTML, with no client-side interactivity needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening the devtools network panel and reloading.</p> <p>The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try using it with JavaScript disabled!</p></div>`;
  pop();
}
export {
  _page as default
};
