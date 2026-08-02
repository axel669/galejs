export const Details = (props) => {
    const {
        summaryWS,
        children,
        label,
        ws = "",
        ...rest
    } = props

    return <details {ws} {...rest}>
        <summary ws={summaryWS}>
            <$:label />
        <//>
        {children}
    <//>
}
