import { Route, Routes } from 'react-router-dom'
import { AdminPage, ClientPage } from './LayoutUI'

function App() {
  return(
    <Routes>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<ClientPage/>}/>
    </Routes>
  )
}

export default App