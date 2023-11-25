// import adapter from "svelte-adapter-bun";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/cruse" : "",
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
