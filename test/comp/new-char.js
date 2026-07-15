import * as gale from "@axel669/galejs"
import * as ze from "../zephyr/main.js"

import { chars } from "../state/chars.js"

const Surface = gale.styled(ze.Paper)`
    #animate;
    variant.outline;
    pos.abs;
    y: calc(@y + 24px);
    inset.x: 24px;
    t.c: @page-text-color;
    elevate;
`

export const NewChar = (props) => {
    const list = gale.useShared(chars.list)

    const local = gale.useLocal({
        name: "",
    })
    const boundName = {
        value: local.name,
        update: (e) => local.name = e.target.value,
    }
    const add = (hide) =>
        () => {
            chars.list.push({
                id: Date.now().toString(32),
                name: local.name,
                max: 0,
                current: 0,
                success: 0,
                fail: 0,
            })
            close(hide)()
        }
    const close = (hide) =>
        () => {
            local.name = ""
            hide()
        }
    // const ws = gale.wind.x({
    //     "#animate": true,
    //     "variant.outline": true,
    //     "pos.abs": true,
    //     y: "calc(@y + 24px)",
    //     "inset.x": "24px",
    //     "t.c": "@page-text-color",
    //     "elevate": true,
    // })

    return (
        <ze.Popover ws="grid;" persistent>
            {#slot content:show}
                <ze.Button onClick={show}>
                    New
                <//>
            {#/}

            {#slot overlay:hide}
                <Surface>
                    <ze.ControlLabel label="Charcter Name">
                        <input type="text" $$value={boundName} />
                    <//>
                    <ze.Grid ws="gr.cols: 1fr 1fr;">
                        <ze.Button onClick={close(hide)} ws="variant.fill; @color: @error;">
                            Cancel
                        <//>
                        <ze.Button onClick={add(hide)} ws="variant.fill; @color: @success;">
                            Test
                        <//>
                    <//>
                <//>
            {#/}
        <//>
    )
}
