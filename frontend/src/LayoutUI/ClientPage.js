import { Route, Routes } from 'react-router-dom'
import { Home, Introduction, Product, Question, Recruitment, Contact, Detail, Search } from '../pages-client'
import { Header, Footer, Cart } from '../compontents'
import { useDataGlobal } from '../hooks'

function ClientPage() {
    const { isShowCart, isShowMenu } = useDataGlobal()
    
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/introduction" element={<Introduction/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/:detail" element={<Detail/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="/recruitment" element={<Recruitment/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/search" element={<Search/>}/>
            </Routes>

            <Footer/>
            <Cart/>
            <div 
                className="overlay" 
                id="overlay"
                style={{ display: isShowCart || isShowMenu ? "block" : "none" }}
            ></div>
        </>
    )
}

export default ClientPage