export const App = (props) => {
    const { theme, ws = "", children } = props

    document.body.dataset.ws = `#theme.${theme}; ${ws}`

    return children
}
