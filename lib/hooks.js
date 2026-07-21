import { useState, useEffect, useMemo, } from "preact/hooks"
import { proxy, snapshot, subscribe } from "valtio/vanilla"

// import { updateFuncs } from "./merge-tools.js"

export const useShared = (proxy) => {
    const [value, set] = useState(
        Date.now()
    )
    useEffect(
        () => subscribe(
            proxy,
            () => set(
                Date.now()
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
                    Date.now()
                )
            )
            return [state, cleanup]
        },
        []
    )
    const [value, set] = useState(
        Date.now()
    )
    useEffect(
        () => {
            return () => cleanup()
        },
        []
    )
    return localProxy
}

export const useStatic = (value) => {
    const [staticValue] = useState(value)
    return staticValue
}
