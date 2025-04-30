function Layout({ container, row, children }) {
    return (
        <div className={container}>
            <div className={row}>
                {children}
            </div>
        </div>
    )
}

export default Layout