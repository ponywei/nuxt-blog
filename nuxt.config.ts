// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
})
