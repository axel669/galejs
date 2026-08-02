import * as ze from "#styled"

const Header = (props) => {
    const { keys } = props
    return (
        <tr>
            {#each keys -> key}
                <th>{key}</th>
            {#/}
        </tr>
    )
}
const Row = (props) => {
    const { item, keys } = props
    return (
        <tr>
            {#each keys -> key}
                <td>{item[key]}</td>
            {#/}
        </tr>
    )
}

export const Table = (props) => {
    const {
        data,
        header = Header,
        row = Row,
        sticky,
        ws = "",
        ...rest
    } = props

    const keys = ze.calc(
        () => Object.keys(data?.[0] ?? {}),
        [data]
    )

    return (
        <table {ws} stick-header={sticky === true} {...rest}>
            <thead>
                {#if data?.length > 0}
                    <$:header {keys} />
                {#else}
                    <tr>
                        <th>N/A</th>
                    </tr>
                {#/}
            <//>
            <tbody>
                {#each data -> item, rowNum}
                    <$:row {item} {keys} {rowNum} />
                {#else}
                    <tr>
                        <td>No Items</td>
                    </tr>
                {#/}
            <//>
        <//>
    )
}
