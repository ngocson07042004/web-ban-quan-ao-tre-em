import './scss/InputSearch.scss'
function InputSearch({ placeholder }) {
    return (
        <div className="input-group input-group-search">
            <input 
                type="text"
                className="form-control"
                id="search"
                placeholder={placeholder}
            />
            <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>
        </div>
    )
}

export default InputSearch