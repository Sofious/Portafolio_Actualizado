import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import HtmlCssPurgePlugin from "vite-plugin-purgecss";

export default defineConfig({
    /* En GitHub Pages la página vive en /nombre-del-repo/, por eso la ruta base.
       El workflow la recibe en DEPLOY_BASE_URL; si no existe se usan rutas relativas. */
    base: process.env.DEPLOY_BASE_URL || "./",
    build: {
        minify: true // minifica JS y CSS
    },
    plugins: [
        // deja en el CSS solo las reglas que se usan.
        // "oscuro" se agrega con JavaScript (modo oscuro), por eso se protege.
        HtmlCssPurgePlugin({ safelist: ["oscuro"] }),
        ViteMinifyPlugin()    // minifica el HTML
    ]
});
