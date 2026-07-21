import { useLocal, render, ref } from "#core"

export const Popover = (props) => {
    const {
        content,
        overlay,
        ws = "",
        ...rest
    } = props

    const local = useLocal({
        popover: null,
    })
    const setref = (node) => local.popover = ref(node)
    const show = () => local.popover.show()
    const hide = () => local.popover.hide()

    return (
        <ws-popover {ws} {...rest} ref={setref}>
            {render(content, show)}
            <ze-popover-overlay slot="popover">
                {render(overlay, hide)}
            </ze-popover-overlay>
        </ws-popover>
    )
}
