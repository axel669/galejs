export * from "./core.js"
export * from "./hooks.js"
export * from "./render.js"
export * from "./transitions.js"

export const getInputValue = (element) => {
    const tag = element.tagName?.toLowerCase?.() ?? null
    if (tag === "details") {
        return element.open
    }
    if (tag !== "input") {
        return element.value
    }
    if (element.type === "checkbox") {
        return element.checked
    }
    if (element.type === "number") {
        if (isNaN(element.valueAsNumber) === true) {
            return null
        }
        return element.valueAsNumber
    }
    if (element.type === "date") {
        return element.valueAsDate
    }
    return element.value
}
