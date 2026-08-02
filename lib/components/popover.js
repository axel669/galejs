import * as ze from "#styled"

export const Popover = (props) => {
    const {
        content,
        overlay,
        ws = "",
        ...rest
    } = props

    const local = ze.useLocal({
        popover: null,
    })
    const show = () => local.popover.show()
    const hide = () => local.popover.hide()

    return (
        <ws-popover {ws} {...rest} ref={&local.popover}>
            <$:content {show} />
            <ze-popover-overlay slot="popover">
                <$:overlay {hide} />
            </ze-popover-overlay>
        </ws-popover>
    )
}
