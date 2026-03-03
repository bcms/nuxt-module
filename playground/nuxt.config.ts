export default defineNuxtConfig({
    modules: ['../src/module'],
    devtools: { enabled: true },
    bcms: {
        apiOrigin: process.env.BCMS_ORIGIN,
        privateClientOptions: {
            apiKey: process.env.BCMS_API_KEY,
            injectSvg: true,
        },
        publicClientOptions: {
            apiKey: process.env.NUXT_PUBLIC_BCMS_API_KEY,
            injectSvg: true,
        },
    },
});
