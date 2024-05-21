// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image'],

  devtools: { enabled: true },

  app: {
    head: {
      title: 'tanggu',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: false, // 全局禁用过渡效果
    layoutTransition: false, // 全局禁用过渡效果
  },

  alias: {
    '@/assets': fileURLToPath(new URL('./assets', import.meta.url)),
    '@/locales': fileURLToPath(new URL('./locales', import.meta.url)),
    '@/utils': fileURLToPath(new URL('./utils', import.meta.url)),
  },

  css: ['~/assets/css/main.css', 'animate.css'],

  // $production: {
  //   routeRules: {
  //     '/**': { isr: true }
  //   }
  // },

  // $development: {
  //   //
  // },

  // runtimeConfig: {
  //   // 只在服务器端可用的私有键
  //   apiSecret: '123',
  //   // public中的键也可以在客户端使用
  //   public: {
  //     apiBase: '/api'
  //   }
  // },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
