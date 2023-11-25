import { l as push, y as escape, v as store_get, w as unsubscribe_stores, q as pop } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
function Error($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<h1>${escape(store_get($$store_subs, "$page", page).status)}</h1> <p>${escape(store_get($$store_subs, "$page", page).error?.message)}</p>`;
  unsubscribe_stores($$store_subs);
  pop();
}
export {
  Error as default
};
