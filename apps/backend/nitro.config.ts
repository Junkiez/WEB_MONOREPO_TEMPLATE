export default defineNitroConfig({
    // fuck U srcDir: "server",
    runtimeConfig: {
        production: false,
    },
    output: {
        //dir: '../../build',
    },
    serveStatic: true,
    compatibilityDate: '2024-11-03',
});
