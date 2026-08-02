import { h, toChildArray } from "preact"
import { memo } from "preact/compat"
import { getVersion } from "valtio/vanilla"

const eventNames = {
    "details.open": "toggle",
    "input.value": "input",
    "input.checked": "input",
    "select.value": "change",
    "select.selectedIndex": "change",
}
const boolProps = ["checked", "sticky-header"]
const propMods = [
    (comp, props) => {
        if (typeof comp !== "string") {
            return props
        }
        const filtered = {}
        Object.keys(props).forEach(
            key => {
                const value = props[key]
                if (key.startsWith("$$") === true) {
                    const prop = key.slice(2)
                    const target = `${comp.toLowerCase()}.${prop}`
                    const evtname = eventNames[target] ?? "input"
                    filtered[prop] = value.value
                    filtered[`on${evtname}`] = value.update
                    return
                }
                if (key.startsWith("$") === true) {
                    return
                }
                // if prop is a boolean then pass the bool value, even if false
                if (boolProps.includes(key) === true) {
                    filtered[key] = (value === true)
                    return
                }
                if (value === false || value === null) {
                    return
                }
                filtered[key] = (value === true) ? "" : value
            }
        )
        return filtered
    },
    // allow ws prop across entire codebase, convert at last minute
    (component, props) => {
        if (typeof component !== "string") {
            return props
        }
        if (props.ws === undefined) {
            return props
        }
        const { ws, ...rest } = props
        return { "data-ws": ws, ...rest }
    },
]
const modProps = (comp, props) => {
    let modifiedProps = props
    for (const mod of propMods) {
        modifiedProps = mod(comp, modifiedProps)
    }
    return modifiedProps
}

const diffChildren = (prev, next) => {
    const nxt = next.children
    const prv = prev.children
    if (nxt.length !== prv.length) {
        return true
    }
    const difIndex = nxt.findIndex(
        (item, index) => prv[index] !== item
    )
    return difIndex !== -1
}

const versionCache = new WeakMap()
const valtimemo = (prev, next) => {
    const prevVersion = versionCache.get(prev)
    const nextVersion = Math.max(
        ...Object.values(next).map(
            value => getVersion(value) ?? 0
        )
    )
    versionCache.set(next, nextVersion)
    if (prevVersion !== nextVersion) {
        return false
    }

    const keys = [...Object.keys(prev), ...Object.keys(next)]
    for (const key of keys) {
        if (key === "children" && diffChildren(prev, next) === true) {
            return false
        }
        if (prev[key] !== next[key]) {
            return false
        }
    }
    return true
}
const memoDebug = (comp, shouldUpdate) => memo(
    comp,
    (prev, next) => {
        const result = shouldUpdate(prev, next)
        console.log("memo", comp.name, result)
        return result
    }
)

const cache = new WeakMap()
const memod = (component) => {
    if (typeof component === "string") {
        return component
    }
    if (component.noMemo === true) {
        return component
    }
    if (cache.has(component) === true) {
        return cache.get(component)
    }
    cache.set(
        component,
        memo(component, valtimemo)
    )
    return cache.get(component)
}
const normalizeChildren = (props, children) => {
    const source = (children.length > 0) ? children : props.children
    const list =
        [source]
        .flat(Number.POSITIVE_INFINITY)
        .filter(
            item => (
                item !== null
                && item !== false
                && item !== undefined
            )
        )
    return {
        ...props,
        children: list,
    }
}
export const Element = (comp, props, ...children) => {
    if (comp === undefined || comp === null) {
        return null
    }

    return h(
        memod(comp),
        modProps(
            comp,
            normalizeChildren(props, children)
        )
    )
}
