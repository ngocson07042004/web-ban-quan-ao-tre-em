import { useMemo } from 'react'

function Column({ sm = 0, md = 0, lg = 0, xl = 0, xxl = 0, col = 0, className = "", id="", children }) {
    const classCol = useMemo(() => {
        const classes = []

        if (col > 0) classes.push(`col-${col}`)
        if (sm > 0) classes.push(`col-sm-${sm}`)
        if (md > 0) classes.push(`col-md-${md}`)
        if (lg > 0) classes.push(`col-lg-${lg}`)
        if (xl > 0) classes.push(`col-xl-${xl}`)
        if (xxl > 0) classes.push(`col-xxl-${xxl}`)

        if (classes.length === 0) classes.push("col")

        return `${classes.join(" ")} ${className}`.trim()
    }, [sm, md, lg, xl, xxl, col, className])

    return (
        <div className={classCol} id={id}>
            {children}
        </div>
    )
}

export default Column