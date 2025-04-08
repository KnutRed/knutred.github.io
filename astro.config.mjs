import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://knut.roteelster.de",

  output: "static",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
});
