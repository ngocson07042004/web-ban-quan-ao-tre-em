import { useMemo } from 'react'

function Column({ sm, md, lg, xl, xxl, col, className, children }) {
    const classCol = useMemo(() => {
        if(col || sm || md || lg || xl || xxl) {
            return `col-${col} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} xol-xxl-${xxl} ${className}`
        }
        return `col ${className}`
    }, [sm, md, lg, xl, xxl, col, className])
    return (
        <div className={classCol}>
            {children}
        </div>
    )
}

export default Column