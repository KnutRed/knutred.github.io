import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://knut.roteelster.de",
  output: "static",
  integrations: [],

  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});