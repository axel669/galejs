import { h, createContext, Fragment, render as renderApp, cloneElement } from "preact"
import { render as renderString } from "preact-render-to-string"
import { useState, useEffect, useMemo, useContext, } from "preact/hooks"
import { memo } from "preact/compat"
import { proxy, subscribe, snapshot, ref as vref, getVersion } from "valtio/vanilla"

export {
    cloneElement,
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

export * from "./element.js"

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
