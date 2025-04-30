function Container({ container, children }) {
    return (
        <div className={container}>
            {children}
        </div>
    )
}

export default Container