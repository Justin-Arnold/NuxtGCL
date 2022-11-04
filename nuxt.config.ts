// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    tailwindcss: {
        configPath: '~/configs/tailwind.ts'
    },
    modules: ['@nuxtjs/tailwindcss']
})
