import { Route, Routes } from 'react-router-dom'
import { AdminPage, ClientPage, OnlyPage } from './LayoutUI'
import Provider from './context'
import { Toast } from './compontents'

function App() {
  return(
    <Provider>
      <Routes>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<ClientPage/>}/>
        <Route path="/auth/*" element={<OnlyPage/>}/>
    </Routes>
    <Toast/>
    </Provider>
  )
}

export default App