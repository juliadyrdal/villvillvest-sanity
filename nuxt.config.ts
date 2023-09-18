// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/sanity',
    'nuxt-swiper',
  ],
  sanity: {
    projectId: "lu3b40jd",
		apiVersion: '2023-07-30'
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    // styleLang: 'css',
    modules: ["navigation", "pagination", "a11y", "virtual", "thumbs", "autoplay"], // all modules are imported by default
  },
})
