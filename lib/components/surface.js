import * as ze from "#styled"

import { Flex } from "./flex.js"
import { Grid } from "./grid.js"

const base = "disp: grid; gr.areas: 'content'; layout.base;"
export const Surface = (props) => {
    const {
        children,
        slot,
        layout = null,
        ws = "",
        ...rest
    } = props
    const layoutWS = (layout === null) ? base : `layout.${layout};`

    return <ws-surface {...rest} ws={`${layoutWS} ${ws}`}>
        {children}

        {#each Object.entries(slot) -> slotItem}
        <ze-surface-slot ws={`grid; area: ${slotItem[0]};`}>
            <$:slotItem[1] />
        <//>
        {#/}
    <//>
}
export const Card = (props) => <Surface ze-card {...props} layout="3row-controls" />
// const cache = new Map()
// export const Surface = (ContentLayout) => {
//     if (cache.has(ContentLayout) === true) {
//         return cache.get(ContentLayout)
//     }
//     const Component = (props) => {
//         const {
//             slot,
//             ...baseProps
//         } = props
//         const split = Object.entries(baseProps).reduce(
//             (split, pair) => {
//                 const [k, v] = pair
//                 if (k.startsWith("s:") === true) {
//                     split.surface[k.slice(2)] = v
//                     return split
//                 }
//                 split.layout[k] = v
//                 return split
//             },
//             { surface: {}, layout: {} }
//         )

//         return (
//             <ws-surface {...split.surface} ws={`${base} ${split.surface.ws ?? ""}`}>
//                 <ContentLayout {...split.layout} />
//                 {#each Object.entries(slot) -> slotItem}
//                     <ze-surface-item ws={`area: ${slotItem[0]};`}>
//                         <$:slotItem[1] />
//                     <//>
//                 {#/}
//             </ws-surface>
//         )
//     }
//     Component.wsPass = "s:ws"
//     cache.set(ContentLayout, Component)
//     return Component
// }
// Surface.Flex = Surface(Flex)
// Surface.Grid = Surface(Grid)
// export const CardBase = (Content) => {
//     const Card = (props) => {
//         const {
//             "c:type": type = "row",
//             ...base
//         } = props

//         return (
//             <Surface(Content)
//                 {...base}
//                 s:ws={`${props["s:ws"] ?? ""} layout.3${type}-controls;`}
//             />
//         )
//     }
//     Card.wsPass = "s:ws"
//     return Card
// }
// export const Card = CardBase(Surface.Flex)
// Card.Grid = CardBase(Surface.Grid)
