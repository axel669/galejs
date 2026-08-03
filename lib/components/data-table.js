import * as ze from "#styled"

const Wrapper = ze.style("ze-data-table")`
    pos.rel;
    grid;
    gr.cols: 1fr;
    gr.rows: 1fr min-content;
    p: 0px;
    h: 100%;
    w: 100%;
    h.max: 100%;
    w.max: 100%;

    ! & :where(thead, tbody) {
        w: "100%";
    }
    ! & thead > tr {
        h: @header;
        z: +5;
        pos.rel: true;
    }
    ! & tbody > tr {
        h: @row;
    }
`
const Scroller = ze.style("ze-data-scroller")`
    pos.rel;
    over: auto;
    ! &::before {
        *content: "";
        pos.abs;
        w: 1px;
        h: @h;
        z: -1;
    }
`
const FakeScroll = ze.style("ze-fake-scroll")`
    disp: block;
    w: 100%;
    h: @h;
    pos.stick;
    y: 0px;
    over: hidden;
`
const FooterArea = ze.style("ze-data-footer")`
    pos: rel;
    grid;
`

const itemRange = (info) => {
    const {
        scrollPos,
        scrollMax,
        rowSize,
        length,
        containerHeight,
    } = info
    if (scrollMax === null) {
        return [0, 0]
    }
    const displayed = Math.ceil(containerHeight / rowSize) - 1
    const itemPos = Math.floor(
        (scrollPos / scrollMax) * (length - displayed)
    )
    return [
        itemPos - 1,
        itemPos + displayed + 1,
        displayed + 2,
    ]
}
const emptyRow = Symbol("empty row")
const nullRow = Symbol("null row")

const sliceData = (data, range) => {
    const displayed = data.slice(
        Math.max(range[0], 0),
        range[1]
    )
    if (range[0] === -1) {
        return [emptyRow, ...displayed]
    }
    if (displayed.length < range[2]) {
        return [
            ...displayed,
            ...Array.from(
                { length: range[2] - displayed.length },
                () => nullRow
            )
        ]
    }
    return displayed
}

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

const Footer = (props) => {
    const { show } = props
    return (
        <div ws="flex; fl.cn; h.min: 32px; gap: 4px;">
            <div>
                {`Showing: ${show.start} - ${show.end} of ${show.total}`}
            </div>
        </div>
    )
}

export const DataTable = (props) => {
    const {
        rowSize = 30,
        headerSize = rowSize,
        header = Header,
        row = Row,
        ws,
        tableWS = "",
        data,
        footer = Footer,
    } = props

    const local = ze.useLocal({
        scrollPos: 0,
        scrollMax: null,
        containerHeight: null,
        container: null,
    })
    const scrollHandler = (evt) => {
        local.scrollPos = local.container.scrollTop
    }

    const keys = ze.calc(
        () => Object.keys(data?.[0] ?? {}),
        [data]
    )
    const itemsHeight = rowSize * data.length
    const tableHeight = itemsHeight + headerSize

    const scrollWS = (
        `@h: ${tableHeight}px; @header: ${headerSize}px; @row: ${rowSize}px;`
    )

    const range = ze.calc(
        () => itemRange({
            scrollPos: local.scrollPos,
            scrollMax: local.scrollMax,
            containerHeight: local.containerHeight,
            rowSize,
            length: data.length,
        }),
        [
            local.scrollPos,
            local.scrollMax,
            local.containerHeight,
            rowSize,
            data.length
        ]
    )

    #effect [] {
        console.log(local)
        local.containerHeight = local.container.clientHeight
        local.scrollMax = local.container.scrollHeight - local.containerHeight
        local.container.addEventListener(
            "scroll",
            scrollHandler,
            { passive: true }
        )
        const observer = new ResizeObserver(
            () => {
                local.containerHeight = local.container.clientHeight
                local.scrollMax = (
                    local.container.scrollHeight - local.containerHeight
                )
            }
        )
        observer.observe(local.container)
        return () => observer.unobserve(local.container)
    }

    console.log(range)

    const displayed = range[2]
    const displayedRows = ze.calc(
        () => sliceData(data, range),
        [data, range]
    )
    const show = ze.calc(
        () => ({
            start: Math.max(1, range[0] + 2),
            end: Math.min(data.length, range[1] - 1),
            total: data.length,
        }),
        [range, data.length]
    )
    const correction = (data.length - displayed) * rowSize

    const itemOffset = (range[0] * rowSize) - local.scrollPos

    return (
        <Wrapper {ws}>
            <Scroller ref={&local.container} ws={scrollWS}>
                <FakeScroll ws={`@h: ${local.containerHeight}px;`}>
                    <table ws={`w: 100%; ${tableWS}`}>
                        <thead>
                            {#if data?.length > 0}
                                <$:header {keys} />
                            {#else}
                                <tr>
                                    <td>N/A</td>
                                </tr>
                            {#/}
                        </thead>
                        <tbody ws={`tf: translateY(${itemOffset}px);`}>
                            {#each displayedRows -> item}
                                <$:row {item} {keys} />
                            {#else}
                                <tr>
                                    <td>No Items</td>
                                </tr>
                            {#/}
                        </tbody>
                    </table>
                <//>
            <//>

            <FooterArea>
                <$:footer {show} {displayedRows} />
            <//>
        <//>
    )
}
