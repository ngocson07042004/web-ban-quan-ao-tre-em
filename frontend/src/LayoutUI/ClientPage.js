import { Route, Routes } from 'react-router-dom'
import { Home, Introduction, Product, Question, Recruitment, Contact, Detail } from '../pages-client'
import { Header, Footer, MenuBottom, Cart, MenuSlider } from '../compontents'
import { useDataGlobal } from '../hooks'
import './scss/ClientPage.scss'

function ClientPage() {
    const { isShowCart, isShowMenu, isShowFavorite } = useDataGlobal()
    
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
            </Routes>

            <Footer/>
            <MenuBottom/>
            <Cart/>
            <MenuSlider/>
            <div 
                className="overlay" 
                id="overlay"
                style={{ display: isShowCart || isShowFavorite || isShowMenu ? "block" : "none" }}
            ></div>
        </>
    )
}

export default ClientPage