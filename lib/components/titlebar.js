import { render } from "#core"

export const Titlebar = (props) => {
    const {
        ws,
        children,
        menu,
        action,
        ...rest
    } = props

    return (
        <ws-titlebar {ws} {...rest}>
            {#if menu !== undefined}
                <ze-menu ws="grid; p: 0px; area: menu;">
                    {render(menu)}
                </ze-menu>
            {#/}
            {children}
            {#if action !== undefined}
                <ze-action ws="grid; p: 0px; area: action;">
                    {render(action)}
                </ze-action>
            {#/}
        </ws-titlebar>
    )
}
