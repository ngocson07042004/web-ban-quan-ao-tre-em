import { Routes, Route } from 'react-router-dom'
import { Login, Register, CheckOut, ChangePassword } from '../pages'

function OnlyPage() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/>
            <Route path="/check-out" element={<CheckOut/>}/>
        </Routes>
    )
}

export default OnlyPage