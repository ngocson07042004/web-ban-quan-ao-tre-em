import { createContext, useState, useEffect } from 'react'
//import axios from 'axios'
import { setLogin } from '../pages/Login'
import { useAxios } from '../hooks'

export const appContext = createContext()

export default function Provider({ children }) {
  const [isShowCart, setIsShowCart] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { data } = useAxios(`${process.env.REACT_APP_URL_BACKEND}/get/api/cart-product`)
  const [carts, setCarts] = useState([])
  //const [auth, setAuth] = useState({})

  useEffect(() => {
    const fetchData = async() => {
      // const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-user`)
       
      try {
        // setAuth(res.data.find(item => [item.username, item.phone, item.email].includes(setLogin.auth)))
        
        setCarts(Array.isArray(data) ? data.filter(item => item.username === setLogin.auth) : [])
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [data])
  console.log(carts)
  return (
    <appContext.Provider
      value={{
        isShowCart,
        setIsShowCart,
        isShowMenu,
        setIsShowMenu,
        carts,
        setCarts
      }}
    >
      {children}
    </appContext.Provider>
  )
}