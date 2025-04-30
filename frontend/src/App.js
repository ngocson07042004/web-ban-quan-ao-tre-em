import { Route, Routes } from 'react-router-dom'
import { Home, Introduction, Product, Question, Recruitment } from './pages-client'
import { Header, Footer } from './compontents'

function App() {
  return(
    <>
      <Header/>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/question" element={<Question/>}/>
          <Route path="/recruitment" element={<Recruitment/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>

      <Footer/>
    </>
  )
}

export default App