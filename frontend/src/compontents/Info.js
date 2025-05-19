import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Row, Column } from '../LayoutContainer'
import { setLogin } from '../pages/Login'

function Info() {
  const navLogin = useNavigate()
  
  const [auth, setAuth] = useState({})
  
  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/get/api/all-user`)

      try {
        setAuth(
          res.data === "Error" ? {} : res.data.find(item => [item.username, item.email, item.phone].includes(setLogin.auth))
        )
      }
      catch(err) {
        console.log(err)
       }
    }
    fetchData()
  }, [])

  return (
    <Row row={"row info"}>
      <Column>
        <Row row={"row"}>
          <Column col={3} className={"p-2 fs-5"}>
            <i className="fa-solid fa-phone"></i>
          </Column>

          <Column col={9} className={"info-title"}>
            <span>Liên hệ</span><br />
            <span className="text-danger fw-bold" style={{ cursor: "pointer"}}>0987654321</span>
          </Column>
        </Row>
      </Column>

      <Column>
        <Row row={"row"}>
          <Column col={3} className={"p-2 fs-5"}>
            <i className={setLogin.status ? "fa-solid fa-right-from-bracket" : "fa-solid fa-user"}></i>
          </Column>

          <Column col={9} className={"info-title"}>
            <span>Xin chào!</span><br />
            <span 
              className="text-danger fw-bold" 
              onClick={() => {
                if(!setLogin.status) {
                  navLogin("/auth/login")
                }
              }} style={{ cursor: !setLogin.status ? "pointer" : "default" }}
            >
              {setLogin.status ? auth.username : "Đăng nhập"}
            </span>
          </Column>
        </Row>
      </Column>
    </Row>
  )
}

export default Info