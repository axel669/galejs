export const ToggleLabel = (props) => {
    const {
        ws = "",
        children,
        ...rest
    } = props

    return (
        <label toggle {ws} {...rest}>
            {children}
        </label>
    )
}
