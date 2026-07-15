import { Element } from "./main.js"
import * as wind from "@axel669/windstorm"

const nameRand = () =>
    Math.floor(Math.random() * 1679615).toString(36)
export const styled = (Base) =>
    (parts, ...values) => {
        const name = `${Date.now().toString(36)}${nameRand()}`
        wind.macro(name)(parts, ...values)
        return (props) => {
            const { ws, ...rest } = props
            const newWS = `${name}; ${ws ?? ""}`.trim()
            return Element(
                Base,
                { ws: newWS, ...rest }
            )
            // return <Base ws={newWS} {...rest} />
        }
    }

export * from "./main.js"
export { wind }
