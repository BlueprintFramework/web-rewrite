import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-marquee',
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Blueprint',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  vite: { plugins: [tailwindcss()] },
})