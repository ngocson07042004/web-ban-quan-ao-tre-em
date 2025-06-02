import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const appContext = createContext()

export default function Provider({ children }) {
  const [isShowCart, setIsShowCart] = useState(false)
  const [carts, setCarts] = useState([])
  const [selectedCartIds, setSelectedCartIds] = useState([])
  const [checkLogin, setCheckLogin] = useState({ auth: "", status: false })
  const [filter, setFilter] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    if(!checkLogin.auth) return

    axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/get/api/cart-product`,
      { withCredentials: true }
    )
    .then(res => {
      const filtered = Array.isArray(res.data) ? res.data.filter(item => item.username === checkLogin.auth) : []
      setCarts(filtered)
    })
    .catch(err => console.log(err))
  }, [checkLogin.auth])
  
  return (
    <appContext.Provider
      value={{
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
      }}
    >
      {children}
    </appContext.Provider>
  )
}