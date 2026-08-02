import * as ze from "#styled"

export const Paper = (props) => {
    const {
        children,
        layoutWS,
        content,
        header,
        footer,
        ...base
    } = props
    const layoutProps = {
        ws: layoutWS,
    }

    return (
        <ws-paper {...base}>
            {#if header !== undefined}
                <div ws="area: header;">
                    <$:header />
                </div>
            {#/}
            {#if content !== undefined}
                <$:content />
            {#else}
                <ws-flex ws={layoutWS}>
                    {children}
                </ws-flex>
            {#/}
            {#if footer !== undefined}
                <div ws="area: footer;">
                    <$:footer />
                </div>
            {#/}
        </ws-paper>
    )
}
