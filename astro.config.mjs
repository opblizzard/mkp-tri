import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  srcDir: "src",
  publicDir: "public",
  server: {
    port: 4321
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    }
  }
});