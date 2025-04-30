import { Route, Routes } from 'react-router-dom'
import { Home } from './pages-client'
import { Header, Footer } from './compontents'

function App() {
  return(
    <>
      <Header/>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App
