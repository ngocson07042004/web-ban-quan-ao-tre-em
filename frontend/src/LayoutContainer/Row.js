function Row({ row, children }) {
    return (
        <div className={row}>
            {children}
        </div>
    )
}

export default Row