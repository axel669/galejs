const uniq = (...args) => {
    const uniq = []
    args.forEach(
        item => {
            if (uniq.includes(item) === true) {
                return
            }
            uniq.push(item)
        }
    )
    return uniq
}
const isObject = (value) => (
    value !== null
    && typeof value === "object"
    && Array.isArray(value) === false
)
export const merge = (a, b) => {
    const target = {}
    const keys = uniq(
        ...Object.keys(a),
        ...Object.keys(b)
    )
    keys.forEach(
        key => {
            const $a = a[key]
            const $b = b[key]
            const value = a[key] ?? b[key]
            if (isObject(value) === false) {
                target[key] = value
                return
            }
            target[key] = merge($a, $b)
        }
    )
    return target
}

export const updateFuncs = (proxy) => {
    Object.keys(proxy).forEach(
        key => {
            const f = proxy[key]
            if (isObject(f) === true) {
                updateFuncs(f)
                return
            }
            if (typeof f !== "function") {
                return
            }
            proxy[key] = (...args) => f(proxy, ...args)
        }
    )
}
