import { useContext } from 'react'
import { appContext } from '../context'

function useDataGlobal() {
    const { isShowCart, 
            setIsShowCart,
            isShowMenu,
            setIsShowMenu,
            carts,
            setCarts
    } = useContext(appContext)

    return {
        isShowCart, 
        setIsShowCart, 
        isShowMenu,
        setIsShowMenu,
        carts,
        setCarts
    }
}

export default useDataGlobal