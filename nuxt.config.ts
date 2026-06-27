// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "node:process"
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true
  },

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },

  runtimeConfig: {
    public: {
      web3FormsAccessKey:
        process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})