import { l as push, v as store_get, u as attr, y as escape, w as unsubscribe_stores, q as pop, A as stringify, t as create_anchor, B as head } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
const raf = {
  tick: (
    /** @param {any} _ */
    (_) => requestAnimationFrame(_)
  ),
  now: () => performance.now()
};
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now) {
  tasks.forEach((task) => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf.tick(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf.tick(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => (
        // @ts-ignore
        tick_spring(ctx, last_value[i], current_value[i], target_value[i])
      )
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = (
    /** @type {T} */
    value
  );
  let target_value = (
    /** @type {T | undefined} */
    value
  );
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = raf.now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = raf.now();
      cancel_task = false;
      task = loop((now) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now;
        last_value = /** @type {T} */
        value;
        store.set(value = /** @type {T} */
        next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(
      /** @type {T} */
      target_value,
      /** @type {T} */
      value
    ), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Counter_svelte_svelte_type_style_lang = "";
function Counter($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let offset;
  let count = 0;
  const displayed_count = spring();
  function modulo(n, m) {
    return (n % m + m) % m;
  }
  displayed_count.set(count);
  offset = modulo(store_get($$store_subs, "$displayed_count", displayed_count), 1);
  $$payload.out += `<div class="counter svelte-y96mxt"><button aria-label="Decrease the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg></button> <div class="counter-viewport svelte-y96mxt"><div class="counter-digits svelte-y96mxt"${attr("style", `transform: translate(0, ${stringify(100 * offset)}%)`, false)}><strong class="hidden svelte-y96mxt" aria-hidden="true">${escape(Math.floor(store_get($$store_subs, "$displayed_count", displayed_count) + 1))}</strong> <strong class="svelte-y96mxt">${escape(Math.floor(store_get($$store_subs, "$displayed_count", displayed_count)))}</strong></div></div> <button aria-label="Increase the counter by one" class="svelte-y96mxt"><svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg></button></div>`;
  unsubscribe_stores($$store_subs);
  pop();
}
const welcome = "/_app/immutable/assets/svelte-welcome.c18bcf5a.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome.6c300099.png";
const _page_svelte_svelte_type_style_lang = "";
function _page($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Home</title>`;
    $$payload2.out += `<meta name="description" content="Svelte demo app">`;
  });
  $$payload.out += `<section class="svelte-19xx0bt"><h1 class="svelte-19xx0bt"><span class="welcome svelte-19xx0bt"><picture><source${attr("srcset", welcome, false)} type="image/webp"> <img${attr("src", welcome_fallback, false)} alt="Welcome" class="svelte-19xx0bt"></picture></span> to your new<br>SvelteKit app</h1> <h2>try editing <strong>src/routes/+page.svelte</strong></h2> ${anchor}`;
  Counter($$payload);
  $$payload.out += `${anchor}</section>`;
  pop();
}
export {
  _page as default
};
