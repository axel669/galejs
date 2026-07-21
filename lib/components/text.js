export const Text = (props) => {
    const {
        size = null,
        notif,
        ...rest
    } = props
    const sizeProp = (size === null) ? {} : { [size]: "" }
    const processed = {
        ...rest,
        ...sizeProp,
        "notif-text": (notif === true) ? "" : undefined,
    }

    return (
        <ws-text {...processed} />
    )
}
