import { cloneElement } from "./core.js"
import { useStatic, useLocal } from "./hooks.js"
import { randName } from "./rand-name.js"

const style = document.createElement("style")
style.setAttribute("data-name", "zephyr-animations")
document.head.append(style)

export const animation = (config) => {
    const keyframes = []
    for (const [frame, styles] of Object.entries(config)) {
        const entries = Object.entries(styles).map(
            (entry) => `${entry[0]}: ${entry[1]};`
        )
        keyframes.push(`${frame} { ${entries.join("")} }`)
    }
    const name = `keyframes-${randName()}`
    style.sheet.insertRule(`@keyframes ${name} { ${keyframes.join(" ")} }`)
    return (duration, ease = "linear") => {
        return `${name} ${duration}ms ${ease}`
    }
}
export const fade = animation({
    "0%": {
        opacity: 0
    },
    "100%": {
        opacity: 1
    },
})
export const drop = animation({
    "0%": {
        scale: 1.4
    },
    "100%": {
        scale: 1
    },
})
export const pop = animation({
    "0%": {
        scale: 0.6
    },
    "100%": {
        scale: 1
    },
})
export const slideTop = animation({
    "0%": {
        translate: "0 -50px"
    },
    "100%": {
        translate: "0 0px"
    },
})
export const slideBottom = animation({
    "0%": {
        translate: "0 50px"
    },
    "100%": {
        translate: "0 0px"
    },
})
export const visible = animation({
    "0%": {
        visibility: "hidden",
    },
    "100%": {
        visibility: "visible",
    },
})

const register = (keyed, child, pos, anims, local) => {
    if (keyed.has(child.key) === true) {
        const item = keyed.get(child.key)
        item.child = child
        item.active = (item.phase === "none") ? child : item.active
        return item
    }
    const item = {
        pos,
        child,
        phase: "enter",
        clone(style, events) {
            const baseStyle = child.props?.style ?? ""
            return cloneElement(
                child,
                {
                    ...child.props,
                    style: `${baseStyle};animation: ${style};`,
                    ...events,
                }
            )
        },
    }
    let count = 0
    item.active = item.clone(
        anims.enter.map(anim => `${anim} normal`).join(", "),
        {
            "onanimationend": () => {
                count += 1
                if (count < anims.enter.length) {
                    return
                }
                item.phase = "none"
                item.active = item.child
                local.update = Date.now()
            }
        }
    )
    keyed.set(child.key, item)
    return item
}
export const Transitions = (props) => {
    const { children, enter, exit = enter, anim } = props
    const keyed = useStatic(new Map())
    const local = useLocal({
        update: null
    })
    const anims = {
        enter: Array.isArray(enter) === true ? enter : [enter],
        exit: Array.isArray(exit) === true ? exit : [exit],
    }

    const display = []
    const current = children.map(
        (child, pos) => {
            const item = register(keyed, child, pos, anims, local)
            display.push(
                item.active
            )
            return child.key
        }
    )
    keyed.keys().forEach(
        key => {
            if (current.includes(key) === true) {
                return
            }
            const item = keyed.get(key)
            if (item.phase === "exit") {
                display.splice(item.pos, 0, item.active)
                return
            }
            let count = 0
            item.phase = "exit"
            item.active = item.clone(
                anims.exit.map(anim => `${anim} reverse`).join(", "),
                {
                    "onanimationend": () => {
                        count += 1
                        if (count < anims.exit.length) {
                            return
                        }
                        keyed.delete(key)
                        local.update = Date.now()
                    }
                }
            )
            display.splice(item.pos, 0, item.active)
        }
    )

    return display
}
