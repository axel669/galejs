import fs from "fs-jetpack"

import { transpile } from "./transpiler.js"

export default {
    name: "galejs",
    async load(filepath) {
        if (filepath.includes("node_modules") === true) {
            return null
        }
        const source = fs.read(filepath)
        const code = await transpile(source)
        return code
    }
}
