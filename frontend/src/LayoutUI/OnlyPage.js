import { Routes, Route } from 'react-router-dom'
import { Login, Register } from '../pages'

function OnlyPage() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}

export default OnlyPage