import { render } from "#core"

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
                    {render(label)}
                </ws-text>
            {#/}
            {children}

            {#if start}
                <ze-input-start ws="area: start; grid;">
                    {render(start)}
                </ze-input-start>
            {#/}
            {#if end}
                <ze-input-end ws="area: end; grid;">
                    {render(end)}
                </ze-input-end>
            {#/}
            {#if extra}
                <ze-input-extra ws="area: extra; grid;">
                    {render(extra)}
                </ze-input-extra>
            {#/}
        </label>
    )
}
