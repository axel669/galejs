import { Button } from "./button.js"
import { Dialog } from "./dialog.js"
import { Grid } from "./grid.js"
import { Paper } from "./paper.js"
import { Text } from "./text.js"
import { Titlebar } from "./titlebar.js"

export const Alert = (props) => {
    const {
        close,
        message,
        title = "Alert",
        ok = "Ok",
        style,
        onanimationend,
    } = props

    const done = () => close(true)

    return (
        <Paper ws="elevate; variant.outline; @color: @info;" {style} {onanimationend}>
            {#slot header}
            <Titlebar ws="@color: @info;">
                <Text title>{title}<//>
            <//>
            {#/}

            <#frag>{message}</>

            {#slot footer}
            <Grid ws="p: 4px;">
                <Button onclick={done} ws="@color: @success;">
                    {ok}
                <//>
            <//>
            {#/}
        <//>
    )
}

export const Confirm = (props) => {
    const {
        close,
        message,
        title = "Confirm",
        ok = "Ok",
        cancel = "Cancel",
        style,
        onanimationend,
    } = props

    const done = () => close(true)
    const canc = () => close(false)

    return (
        <Paper ws="elevate; variant.outline; @color: @info;" {style} {onanimationend}>
            {#slot header}
            <Titlebar ws="@color: @info;">
                <Text title>{title}<//>
            <//>
            {#/}

            <#frag>{message}</>

            {#slot footer}
            <Grid ws="p: 4px; gr.cols: 1fr 1fr;">
                <Button onclick={canc} ws="@color: @error;">
                    {cancel}
                <//>
                <Button onclick={done} ws="@color: @success;">
                    {ok}
                <//>
            <//>
            {#/}
        <//>
    )
}
