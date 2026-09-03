import { h, createContext, Fragment, render as renderApp, cloneElement } from "preact"
import { render as renderString } from "preact-render-to-string"
import { useState, useEffect, useMemo, useContext, } from "preact/hooks"
import { memo } from "preact/compat"
import { proxy, subscribe, snapshot, ref as vref, getVersion } from "valtio/vanilla"

import { Element } from "./element.js"
import * as options from "./options.js"

export { options as preactOptions } from "preact"

export * from "./rand-name.js"

export {
    cloneElement,
    createContext,
    Element,
    Fragment,
    getVersion,
    memo,
    options,
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

export const getInputValue = (element) => {
    const tag = element.tagName?.toLowerCase?.() ?? null
    const getValue = options.tagGetValue[tag]
    return getValue?.(element) ?? element.value
}

export const __eachAlt = (list, alt) =>
    (list.length > 0) ? list : alt()

const SubSlot = (props) => props.children
export const Slot = (props) => {
    const { "*render": render, ...pass } = props
    if (render === null || render === undefined) {
        return null
    }
    if (typeof render === "string") {
        return render
    }
    return Element(
        SubSlot,
        { children: render(pass) }
    )
}
