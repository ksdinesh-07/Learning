import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import { visualizer } from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    command === "serve" && vueDevTools(),
    command === "build" && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "dist/stats.html",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))