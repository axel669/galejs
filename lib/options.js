export const eventNames = {
    "details.open": "toggle",
    "input.value": "input",
    "input.checked": "input",
    "select.value": "change",
    "select.selectedIndex": "change",
}
export const boolProps = ["checked", "sticky-header"]

export const tagGetValue = {
    details: (element) => element.open,
    input: (element) => {
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
}
export const registerInputValue = (tag, getter) => {
    const name = tag.toLowerCase()
    if (tagGetValue[name] !== undefined) {
        return
    }
    tagGetValue[tag.toLowerCase()] = getter
}
