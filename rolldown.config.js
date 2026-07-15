import { defineConfig } from "rolldown"

import terser from "@rollup/plugin-terser"

import gale from "./compiler/rollup.js"

export default defineConfig({
    input: "./test/app.js",
    output: {
        file: "./artifacts/app.js",
        format: "esm",
    },
    plugins: [
        gale,
        terser(),
    ]
})
