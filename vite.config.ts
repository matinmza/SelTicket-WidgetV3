import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import css from "rollup-plugin-css-only";
import path from "path";

export default defineConfig({
    plugins: [react(), css({ output: "assets/widget/widget.css" })],
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                widget: "./src/widget/widget-convertor.tsx",
            },
            output: {
                entryFileNames: (assetInfo) => {
                    return assetInfo.name !== "widget"
                        ? "[name].js"
                        : "assets/widget/[name].js";
                },
            },
        },
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
});
