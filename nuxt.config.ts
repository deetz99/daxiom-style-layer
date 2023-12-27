// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [join(currentDir, "./assets/css/main.css")],
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  ui: {
    icons: ["mdi"],
  },
});
