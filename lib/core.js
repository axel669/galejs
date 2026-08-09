import { h, createContext, Fragment, render as renderApp, cloneElement } from "preact"
import { render as renderString } from "preact-render-to-string"
import { useState, useEffect, useMemo, useContext, } from "preact/hooks"
import { memo } from "preact/compat"
import { proxy, subscribe, snapshot, ref as vref, getVersion } from "valtio/vanilla"

import { Element } from "./element.js"

export { options } from "preact"

export {
    cloneElement,
    createContext,
    Element,
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

export const getInputValue = (element) => {
    const tag = element.tagName?.toLowerCase?.() ?? null
    if (tag === "details") {
        return element.open
    }
    if (tag !== "input") {
        return element.value
    }
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

export const __eachAlt = (list, alt) =>
    (list.length > 0) ? list : alt()

const SubSlot = (props) => props.children
export const Slot = (props) => {
    const { "*render": render, ...pass } = props
    if (typeof render === "string") {
        return render
    }
    return Element(
        SubSlot,
        { children: render(pass) }
    )
}
