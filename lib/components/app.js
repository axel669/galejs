import { DialogStack } from "./dialog.js"

export const App = (props) => {
    const { theme, ws = "", children } = props

    document.body.dataset.ws = `#theme.${theme}; ${ws}`

    return <#frag>
        {children}
        <DialogStack />
    </>
}
