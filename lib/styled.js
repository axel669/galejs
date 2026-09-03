import { forwardRef } from "preact/compat"
import { Element, randName } from "./main.js"
import * as wind from "@axel669/windstorm"

const empty = () => ({})
export const style = (Base, addProps = empty) =>
    (parts, ...values) => {
        const wsProp = Base.wsPass ?? "ws"
        const name = randName()
        wind.macro(name)(parts, ...values)
        const wrapper = forwardRef(
            (props, ref) => {
                const addedProps = addProps?.(props) ?? {}
                const { [wsProp]: ws, ...rest } = { ...props, ...addedProps }
                const newWS = `${name}; ${ws ?? ""}`.trim()
                return Element(
                    Base,
                    { [wsProp]: newWS, ref, ...rest }
                )
            }
        )
        Object.defineProperty(
            wrapper,
            "name",
            { value: `Wrapped(${Base.name ?? Base})` }
        )
        return wrapper
    }

export * from "./main.js"
export { wind }
