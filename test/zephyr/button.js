export const Button = (props) => {
    const { ws = "", ...rest } = props
    return <button {ws} {...rest} />
}
