import * as core from "#core"

export const render = (item, props) => {
    if (typeof item === "function") {
        return core.Element(item, props)
    }
    return item
}
