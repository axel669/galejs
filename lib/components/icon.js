export const Icon = (props) => {
    const { name, ...rest } = props

    return <ws-icon data-icon={name} {...rest} />
}
