import { useState, useEffect, useMemo, } from "preact/hooks"
import { proxy, snapshot, subscribe } from "valtio/vanilla"

import { updateFuncs } from "./merge-tools.js"

export const useShared = (proxy) => {
    const [value, set] = useState(
        snapshot(proxy)
    )
    useEffect(
        () => subscribe(
            proxy,
            () => set(
                snapshot(proxy)
            )
        ),
        []
    )
    return value
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
            updateFuncs(state)
            const cleanup = subscribe(
                state,
                () => set(
                    snapshot(state)
                )
            )
            return [state, cleanup]
        },
        []
    )
    const [value, set] = useState(
        snapshot(localProxy)
    )
    useEffect(
        () => {
            return () => cleanup()
        },
        []
    )
    return value
}
