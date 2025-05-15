import { Route, Routes } from 'react-router-dom'
import { Home, Introduction, Product, Question, Recruitment, Contact } from '../pages-client'
import { Header, Footer, MenuBottom, Cart } from '../compontents'
import './scss/ClientPage.scss'

function ClientPage() {
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/introduction" element={<Introduction/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="/recruitment" element={<Recruitment/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

            <Footer/>
            <MenuBottom/>
            <Cart/>
            <div className="overlay" id="overlay"></div>
        </>
    )
}

export default ClientPage