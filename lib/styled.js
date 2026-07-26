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

export * from "./components/app.js"
export * from "./components/button.js"
export * from "./components/circle-spinner.js"
export * from "./components/control-label.js"
export * from "./components/details.js"
export * from "./components/flex.js"
export * from "./components/grid.js"
export * from "./components/icon.js"
export * from "./components/hex-spinner.js"
export * from "./components/paper.js"
export * from "./components/popover.js"
export * from "./components/progress.js"
export * from "./components/screen.js"
export * from "./components/suspend.js"
export * from "./components/text.js"
export * from "./components/titlebar.js"
