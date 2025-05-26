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
            setSelectedCartIds
    } = useContext(appContext)

    return {
        isShowCart, 
        setIsShowCart,
        carts,
        setCarts,
        checkLogin, 
        setCheckLogin,
        selectedCartIds, 
        setSelectedCartIds
    }
}

export default useDataGlobal