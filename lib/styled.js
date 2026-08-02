import { Element } from "./main.js"
import * as wind from "@axel669/windstorm"

import { randName } from "./rand-name.js"

const empty = () => ({})
export const style = (Base, addProps = empty) =>
    (parts, ...values) => {
        const name = randName()
        wind.macro(name)(parts, ...values)
        const wrapper = (props) => {
            const { ws, ...rest } = { ...props, ...addProps(props) }
            const newWS = `${name}; ${ws ?? ""}`.trim()
            return Element(
                Base,
                { ws: newWS, ...rest }
            )
        }
        Object.defineProperty(
            wrapper,
            "name",
            { value: `Wrapped(${Base.name ?? Base})` }
        )
        return wrapper
    }

export * from "./main.js"
export { wind }
