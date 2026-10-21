export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  routeRules: {
    '/about': { prerender: true },
    '/admin': { ssr: false },
  },
})