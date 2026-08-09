import * as ze from "#styled"
import { Modal } from "./modal.js"

const none = Symbol("dialog none")
export const Dialog = (props) => {
    const { persistent, dialog, onclose, dialogWS, ...rest } = props

    return (
        <Modal open managed {persistent} {onclose}>
            <ws-dialog ws={dialogWS}>
                <$:dialog {...rest} />
            <//>
        <//>
    )
}
Dialog.none = none

const state = ze.proxy({
    stack: [],
})
export const DialogStack = (props) => {
    const { stack } = ze.useShared(state)

    const dialogs = stack.map(
        item => <Dialog {...item} />
    )

    return (
        <ze.Transitions>
            {dialogs}
        <//>
    )
}

Dialog.show = (opts) => new Promise(
    (resolve) => {
        if (state.stack.length > 3) {
            return
        }
        const { dialog, ...options } = opts
        const key = `${Math.random()}:${Date.now()}`

        const close = (value) => {
            state.stack = state.stack.filter(
                dialog => dialog.key !== key
            )
            resolve(value)
        }

        state.stack.push(
            ze.ref({
                $animate: [ze.fade(100), ze.pop(100)],
                ...options,
                onclose: (e) => {
                    close(Dialog.none)
                    options.onclose?.(e)
                },
                close,
                dialog,
                key,
            })
        )
    }
)
