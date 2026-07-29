export const Link = (props) => {
    const { ws = "", ...rest } = props
    return <a {ws} {...rest} />
}
