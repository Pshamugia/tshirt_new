import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/sass/app.scss",
                "resources/js/app.js",
                "resources/css/app.css",
                "resources/js/product.js",
            ],
            refresh: true,
        }),
    ],
});
