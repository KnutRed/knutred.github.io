import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://knut.roteelster.de',
  
  output: 'static',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
});
