export const ControlLabel = (props) => {
    const {
        ws = "",
        labelWS,
        slot,
        children,
        ...rest
    } = props

    return (
        <label control {ws} {...rest}>
            {#if slot.label}
                <ws-text label-text ws={labelWS}>
                    <$:slot.label />
                <//>
            {#/}

            {children}

            {#if slot.start}
                <ze-input-start ws="area: start; grid;">
                    <$:slot.start />
                <//>
            {#/}
            {#if slot.end}
                <ze-input-end ws="area: end; grid;">
                    <$:slot.end />
                <//>
            {#/}
            {#if slot.extra}
                <ze-input-extra ws="area: extra; grid;">
                    <$:slot.extra />
                <//>
            {#/}
        </label>
    )
}
