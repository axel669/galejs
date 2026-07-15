import { proxy } from "valtio/vanilla"

import { updateFuncs, merge } from "./merge-tools.js"

const loadSymbol = Symbol("load state")
export const sharedState = (def) => {
    const {
        [loadSymbol]: $source = null,
        ...decl
    } = def
    const source = ($source === null) ? def : merge($source, def)
    const state = proxy(source)
    updateFuncs(state)
    return state
}
sharedState.load = loadSymbol
