import { useState, useEffect, useMemo, useCallback } from "preact/hooks"
import { proxy, snapshot, subscribe } from "valtio/vanilla"

// import { updateFuncs } from "./merge-tools.js"

export const useShared = (proxy) => {
    const [value, set] = useState(
        Date.now() + Math.random()
    )
    useEffect(
        () => subscribe(
            proxy,
            () => set(
                Date.now() + Math.random()
            )
        ),
        []
    )
    return proxy
}

export const useLocal = (baseValue) => {
    const [localProxy, cleanup] = useMemo(
        () => {
            const state =
                (typeof baseValue === "function")
                    ? proxy(
                        baseValue()
                    )
                    : proxy(baseValue)
            // updateFuncs(state)
            const cleanup = subscribe(
                state,
                () => set(
                    Date.now() + Math.random()
                )
            )
            return [state, cleanup]
        },
        []
    )
    const [value, set] = useState(
        Date.now() + Math.random()
    )
    useEffect(
        () => {
            return () => cleanup()
        },
        []
    )
    return localProxy
}

export const lock = (value) => {
    if (typeof value === "function") {
        return useCallback(value, [])
    }
    const [lockedValue] = useState(value)
    return lockedValue
}

export const calc = (f, changes = []) =>
    useMemo(f, changes)
