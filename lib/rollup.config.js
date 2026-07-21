import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import terser from "@rollup/plugin-terser"

import gale from "../compiler/rollup.js"

const regular = [gale({ sourceImport: "#core" }), resolve(), commonjs()]
const minified = [...regular, terser()]
export default [
    {
        input: "./lib/styled.js",
        output: {
            file: "./dist/gale.js",
            format: "esm",
        },
        plugins: regular,
    },
    {
        input: "./lib/styled.js",
        output: {
            file: "./dist/gale.min.js",
            format: "esm",
        },
        plugins: minified,
    },
    {
        input: "./lib/main.js",
        output: {
            file: "./dist/gale-unstyled.js",
            format: "esm",
        },
        plugins: regular,
    },
    {
        input: "./lib/main.js",
        output: {
            file: "./dist/gale-unstyled.min.js",
            format: "esm",
        },
        plugins: minified,
    },
]
