import peggy from "peggy"
import fs from "fs-jetpack"

const grammar = fs.read("jsx.peggy")
const parser = peggy.generate(
    grammar,
    {
        output: "source",
        format: "es",
    }
)

fs.write("compiler/parser.js", parser)
