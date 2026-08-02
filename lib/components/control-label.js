export const ControlLabel = (props) => {
    const {
        ws = "",
        labelWS,
        label,
        children,
        start,
        end,
        extra,
        ...rest
    } = props

    return (
        <label control {ws} {...rest}>
            {#if label}
                <ws-text label-text ws={labelWS}>
                    <$:label />
                </ws-text>
            {#/}
            {children}

            {#if start}
                <ze-input-start ws="area: start; grid;">
                    <$:start />
                </ze-input-start>
            {#/}
            {#if end}
                <ze-input-end ws="area: end; grid;">
                    <$:end />
                </ze-input-end>
            {#/}
            {#if extra}
                <ze-input-extra ws="area: extra; grid;">
                    <$:extra />
                </ze-input-extra>
            {#/}
        </label>
    )
}
