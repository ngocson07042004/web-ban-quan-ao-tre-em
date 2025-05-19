import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages'

function OnlyPage() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default OnlyPage