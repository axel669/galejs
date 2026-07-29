import { Element } from "./main.js"
import * as wind from "@axel669/windstorm"

import { randName } from "./rand-name.js"

const empty = () => ({})
export const style = (Base, addProps = empty) =>
    (parts, ...values) => {
        const name = randName()
        wind.macro(name)(parts, ...values)
        return (props) => {
            const { ws, ...rest } = { ...props, ...addProps(props) }
            const newWS = `${name}; ${ws ?? ""}`.trim()
            return Element(
                Base,
                { ws: newWS, ...rest }
            )
        }
    }

export * from "./main.js"
export { wind }
