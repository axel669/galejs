export const Details = (props) => {
    const {
        summaryWS,
        children,
        slot,
        ws = "",
        ...rest
    } = props

    return <details {ws} {...rest}>
        <summary ws={summaryWS}>
            <$:slot.label />
        <//>
        {children}
    <//>
}
