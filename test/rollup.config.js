import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import terser from "@rollup/plugin-terser"
import html from "@axel669/rollup-html-input"

import gale from "../compiler/rollup.js"

export default {
    input: "./test/index.html",
    output: {
        file: "./test/artifacts/app.js",
        format: "esm",
    },
    plugins: [
        html(),
        gale,
        resolve(),
        commonjs(),
        // terser(),
    ]
}
