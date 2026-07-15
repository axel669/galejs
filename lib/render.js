export const render = (item, ...args) => {
    if (typeof item === "function") {
        return item(...args)
    }
    return item
}
