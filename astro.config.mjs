// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://eqvh.github.io",
  base: "/immobum",
  vite: {
    plugins: [tailwindcss()],
  },
});
