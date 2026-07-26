import * as ze from "#core"

const optionList = (items) => items.map(
    item => {
        if (item.group !== undefined) {
            return (
                <ws-optgroup label={item.group}>
                    {optionList(item.items)}
                <//>
            )
        }
        return <ws-option value={item.value}>{item.label}<//>
    }
)

export const Select = (props) => {
    let {
        options,
        children,
        selected,
        ...rest
    } = props

    const items = ze.useMemo(
        () => {
            if (Array.isArray(options) === true) {
                return optionList(options)
            }
            return children
        },
        [children, options]
    )
    const selectedItem = ze.useMemo(
        () => {
            if (selected !== undefined) {
                const Selected = selected
                return (
                    <div slot="selected">
                        <Selected />
                    <//>
                )
            }
            return null
        },
        [selected]
    )

    return (
        <ws-select {...rest}>
            {selectedItem}
            {items}
        </ws-select>
    )
}
