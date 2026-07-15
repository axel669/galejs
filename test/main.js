import * as gale from "@axel669/galejs"

import { chars } from "./state/chars.js"

import * as ze from "./zephyr/main.js"

import { NewChar } from "./comp/new-char.js"

const App = () => {
    // const chars = useShared($chars)
    const list = gale.useShared(chars.list)
    console.log(
        JSON.stringify(
            gale.snapshot(list),
            null,
            2
        )
    )

    return (
        <ze.Screen paperWS="w: 100%; elevate; r: 0px;">
            {#slot header}
                <ze.Titlebar ws="@color: @primary; variant.fill;">
                    <ws-text title title-text>
                        D&D HP Tracker
                    </ws-text>

                    {#slot action}
                        <NewChar />
                    {#/}
                </ze.Titlebar>
            {#/}
            {list.map(
                (char) => <div>{char.name}</div>
            )}
        </ze.Screen>
    )
}

gale.renderApp(
    <App />,
    document.body
)
