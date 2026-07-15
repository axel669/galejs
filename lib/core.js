import { h, createContext, Fragment, render as renderApp } from "preact"
import { render as renderString } from "preact-render-to-string"
import { useState, useEffect, useMemo, useContext, } from "preact/hooks"
import { memo } from "preact/compat"
import { proxy, subscribe, snapshot, ref as vref, getVersion } from "valtio/vanilla"

export {
    createContext,
    Fragment,
    getVersion,
    memo,
    proxy,
    renderApp,
    renderString,
    snapshot,
    subscribe,
    useContext,
    useEffect,
    useMemo,
    useState,
}

export const ref = (obj) => {
    if (obj === null || obj === undefined) {
        return null
    }
    return vref(obj)
}

const boolProps = ["checked"]
const propMods = [
    (comp, props) => {
        if (typeof comp !== "string") {
            return props
        }
        const filtered = {}
        Object.keys(props).forEach(
            key => {
                if (key.startsWith("$") === true) {
                    return
                }
                const value = props[key]
                if (value === false || value === null) {
                    return
                }
                if (boolProps.includes(key) === true) {
                    filtered[key] = value === true
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
        if (prev[key] !== next[key]) {
            return false
        }
    }
    return true
}

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
export const Element = (comp, props, ...children) => {
    if (comp === undefined || comp === null) {
        return null
    }

    return h(
        memod(comp),
        modProps(comp, props),
        ...children
    )
}
