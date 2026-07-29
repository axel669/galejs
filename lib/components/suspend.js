import * as ze from "#styled"

const diff = (a = null, b = null) => {
    if (a === null || b === null) {
        return true
    }
    const akeys = Object.keys(a)
    const bkeys = Object.keys(b)

    const missingKeys = (
        akeys.find(k => bkeys.includes(k) === false)
        || bkeys.find(k => akeys.includes(k) === false)
    )
    if (missingKeys !== undefined) {
        return true
    }
    for (const k of akeys) {
        if (b[k] !== a[k]) {
            return true
        }
    }
    for (const k of bkeys) {
        if (b[k] !== a[k]) {
            return true
        }
    }
    return false
}

const pdiff = (local, props) => {
    const current = Object.keys(props).reduce(
        (c, key) => {
            const isPromise = props[key] instanceof Promise
            if (isPromise === false) {
                return c
            }
            c[key] = props[key]
            return c
        },
        {}
    )
    if (diff(local.prev, current) === false) {
        return
    }
    const keys = Object.keys(current)
    const next = Promise.all(
        keys.map(
            async (key) => [key, await current[key]]
        )
    )
    next.keep = true
    next.then(
        (pairs) => {
            if (next.keep === false) {
                return
            }
            local.resolved = ze.ref(
                Object.fromEntries(pairs)
            )
        }
    )
    local.promise.keep = false
    local.promise = ze.ref(next)
    local.resolved = null
    local.prev = current
}

const cache = new Map()
const testing = new Set()
export const suspend = (Target) => {
    if (cache.has(Target) === true) {
        return cache.get(Target)
    }
    const suspended = (props) => {
        const local = ze.useLocal({
            promise: {},
            prev: {},
            resolved: null,
        })

        pdiff(local, props)

        if (local.resolved !== null) {
            return <Target {...props} {...local.resolved} />
        }

        const Loading = local.loading ?? null
        if (Loading === null) {
            return <div>Loading</div>
        }
        return <Loading />
    }
    cache.set(Target, suspended)
    return suspended
}
