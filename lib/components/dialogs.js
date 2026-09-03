import * as ze from "#styled"
import { Button } from "./button.js"
import { ControlLabel } from "./control-label.js"
import { Dialog } from "./dialog.js"
import { Flex } from "./flex.js"
import { Grid } from "./grid.js"
import { Surface } from "./surface.js"
import { Text } from "./text.js"
import { Titlebar } from "./titlebar.js"

const ws = "raised; var.outln; @color: @info; layout.3row-controls;"

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
        <Surface layout="3row-controls" {ws} {style} {onanimationend}>
            {#slot header}
            <Titlebar ws="@color: @info;">
                <Text title>{title}<//>
            <//>
            {#/}

            <Flex>
                <$:message />
            <//>

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
        <Surface layout="3row-controls" {ws} {style} {onanimationend}>
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

export const Prompt = (props) => {
    const {
        close,
        message,
        placeholder = "",
        title = "Prompt",
        ok = "Ok",
        cancel = "Cancel",
        style,
        onanimationend,
    } = props

    const local = ze.localState({
        text: "",
        input: null,
    })

    const done = () => close(local.text)
    const canc = () => close(false)
    const onsubmit = (e) => {
        e.preventDefault()
        done(local.text)
    }

    #effect [] {
        local.input.focus()
    }

    return (
        <Surface layout="3row-controls" {ws} {style} {onanimationend}>
            {#slot header}
            <Titlebar ws="@color: @info;">
                <Text title>{title}<//>
            <//>
            {#/}

            {#slot content}
            <form {onsubmit}>
                <Flex>
                    <ControlLabel label={message} ws="var.lined; r: 0px;">
                        <input
                            type="text"
                            {placeholder}
                            $$value={#local.text}
                            ref={&local.input}
                        />
                    <//>
                <//>
            <//>
            {#/}

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
