import { Paper } from "./paper.js"

export const Screen = (props) => {
    const {
        paperWS,
        layoutWS,
        children,
        header,
        content,
        footer,
        ...base
    } = props

    const paperProps = {
        ws: paperWS,
        children,
        layoutWS,
        header,
        content,
        footer,
    }
    return (
        <ws-screen {...base}>
            <Paper {...paperProps} />
        </ws-screen>
    )
}
