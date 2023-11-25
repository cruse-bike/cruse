import { l as push, t as create_anchor, C as ensure_array_like, B as head, u as attr, A as stringify, y as escape, w as unsubscribe_stores, o as bind_props, q as pop } from "../../../chunks/index3.js";
import "devalue";
import { r as readable } from "../../../chunks/index2.js";
const get_initial_motion_preference = () => {
  return false;
};
readable(get_initial_motion_preference(), (set) => {
});
const _page_svelte_svelte_type_style_lang = "";
function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let won, i, currentGuess, submittable;
  let data = $$props["data"];
  let form = $$props["form"];
  let classnames;
  let description;
  won = data.answers.at(-1) === "xxxxx";
  i = won ? -1 : data.answers.length;
  currentGuess = data.guesses[i] || "";
  submittable = currentGuess.length === 5;
  {
    classnames = {};
    description = {};
    data.answers.forEach((answer, i2) => {
      const guess = data.guesses[i2];
      for (let i3 = 0; i3 < 5; i3 += 1) {
        const letter = guess[i3];
        if (answer[i3] === "x") {
          classnames[letter] = "exact";
          description[letter] = "correct";
        } else if (!classnames[letter]) {
          classnames[letter] = answer[i3] === "c" ? "close" : "missing";
          description[letter] = answer[i3] === "c" ? "present" : "absent";
        }
      }
    });
  }
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(Array.from(Array(6).keys()));
  const anchor_7 = create_anchor($$payload);
  const anchor_13 = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Sverdle</title>`;
    $$payload2.out += `<meta name="description" content="A Wordle clone written in SvelteKit">`;
  });
  $$payload.out += `<h1 class="visually-hidden">Sverdle</h1> <form method="POST" action="?/enter" class="svelte-1pg2j5l"><a class="how-to-play svelte-1pg2j5l" href="/sverdle/how-to-play">How to play</a> <div${attr(
    "class",
    `grid svelte-1pg2j5l ${stringify([
      !won ? "playing" : "",
      form?.badGuess ? "bad-guess" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>${anchor}`;
  for (let $$index_1 = 0; $$index_1 < each_array.length; $$index_1++) {
    const row = each_array[$$index_1];
    const anchor_1 = create_anchor($$payload);
    const current = row === i;
    const anchor_2 = create_anchor($$payload);
    const each_array_1 = ensure_array_like(Array.from(Array(5).keys()));
    $$payload.out += `${anchor_1}<h2 class="visually-hidden">Row ${escape(row + 1)}</h2> <div${attr("class", `row svelte-1pg2j5l ${stringify([current ? "current" : ""].filter(Boolean).join(" "))}`, false)}>${anchor_2}`;
    for (let $$index = 0; $$index < each_array_1.length; $$index++) {
      const column = each_array_1[$$index];
      const anchor_3 = create_anchor($$payload);
      const guess = current ? currentGuess : data.guesses[row];
      const answer = data.answers[row]?.[column];
      const value = guess?.[column] ?? "";
      const selected = current && column === guess.length;
      const exact = answer === "x";
      const close = answer === "c";
      const missing = answer === "_";
      const anchor_4 = create_anchor($$payload);
      $$payload.out += `${anchor_3}<div${attr(
        "class",
        `letter svelte-1pg2j5l ${stringify([
          exact ? "exact" : "",
          close ? "close" : "",
          missing ? "missing" : "",
          selected ? "selected" : ""
        ].filter(Boolean).join(" "))}`,
        false
      )}>${escape(value)} <span class="visually-hidden">${anchor_4}`;
      if (exact) {
        $$payload.out += "<!--ssr:if:true-->";
        $$payload.out += `(correct)`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_5 = create_anchor($$payload);
        $$payload.out += `${anchor_5}`;
        if (close) {
          $$payload.out += "<!--ssr:if:true-->";
          $$payload.out += `(present)`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_6 = create_anchor($$payload);
          $$payload.out += `${anchor_6}`;
          if (missing) {
            $$payload.out += "<!--ssr:if:true-->";
            $$payload.out += `(absent)`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            $$payload.out += `empty`;
          }
          $$payload.out += `${anchor_6}`;
        }
        $$payload.out += `${anchor_5}`;
      }
      $$payload.out += `${anchor_4}</span> <input name="guess"${attr("disabled", !current, true)} type="hidden"${attr("value", value, false)}></div>${anchor_3}`;
    }
    $$payload.out += `${anchor_2}</div>${anchor_1}`;
  }
  $$payload.out += `${anchor}</div> <div class="controls svelte-1pg2j5l">${anchor_7}`;
  if (won || data.answers.length >= 6) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_8 = create_anchor($$payload);
    $$payload.out += `${anchor_8}`;
    if (!won && data.answer) {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `<p>the answer was "${escape(data.answer)}"</p>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_8} <button data-key="enter" class="restart selected svelte-1pg2j5l" formaction="?/restart">${escape(won ? "you won :)" : `game over :(`)} play again?</button>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_9 = create_anchor($$payload);
    const each_array_2 = ensure_array_like(["qwertyuiop", "asdfghjkl", "zxcvbnm"]);
    $$payload.out += `<div class="keyboard svelte-1pg2j5l"><button data-key="enter"${attr("disabled", !submittable, true)}${attr("class", `svelte-1pg2j5l ${stringify([submittable ? "selected" : ""].filter(Boolean).join(" "))}`, false)}>enter</button> <button data-key="backspace" formaction="?/update" name="key" value="backspace" class="svelte-1pg2j5l">back</button> ${anchor_9}`;
    for (let $$index_3 = 0; $$index_3 < each_array_2.length; $$index_3++) {
      const row = each_array_2[$$index_3];
      const anchor_10 = create_anchor($$payload);
      const anchor_11 = create_anchor($$payload);
      const each_array_3 = ensure_array_like(row);
      $$payload.out += `${anchor_10}<div class="row svelte-1pg2j5l">${anchor_11}`;
      for (let $$index_2 = 0; $$index_2 < each_array_3.length; $$index_2++) {
        const letter = each_array_3[$$index_2];
        const anchor_12 = create_anchor($$payload);
        $$payload.out += `${anchor_12}<button${attr("data-key", letter, false)}${attr("class", `${stringify(classnames[letter])} svelte-1pg2j5l`, false)}${attr("disabled", submittable, true)} formaction="?/update" name="key"${attr("value", letter, false)}${attr("aria-label", `${stringify(letter)} ${stringify(description[letter] || "")}`, false)}>${escape(letter)}</button>${anchor_12}`;
      }
      $$payload.out += `${anchor_11}</div>${anchor_10}`;
    }
    $$payload.out += `${anchor_9}</div>`;
  }
  $$payload.out += `${anchor_7}</div></form> ${anchor_13}`;
  if (won) {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<div style="position: absolute; left: 50%; top: 30%"></div>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_13}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
