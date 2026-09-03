export const Titlebar = (props) => {
    const {
        ws,
        children,
        slot,
        ...rest
    } = props

    return (
        <ws-titlebar {ws} {...rest}>
            {#if slot.menu !== undefined}
                <ze-menu ws="flex; area: menu;">
                    <$:slot.menu />
                </ze-menu>
            {#/}
            {children}
            {#if slot.action !== undefined}
                <ze-action ws="flex; area: action;">
                    <$:slot.action />
                </ze-action>
            {#/}
        </ws-titlebar>
    )
}
