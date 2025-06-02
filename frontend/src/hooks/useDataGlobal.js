import { useContext } from 'react'
import { appContext } from '../context'

function useDataGlobal() {
    const { isShowCart, 
            setIsShowCart,
            carts,
            setCarts,
            checkLogin, 
            setCheckLogin,
            selectedCartIds, 
            setSelectedCartIds,
            query, 
            setQuery,
            filter, 
            setFilter
    } = useContext(appContext)

    return {
        isShowCart, 
        setIsShowCart,
        carts,
        setCarts,
        checkLogin, 
        setCheckLogin,
        selectedCartIds, 
        setSelectedCartIds,
        query, 
        setQuery,
        filter, 
        setFilter
    }
}

export default useDataGlobal