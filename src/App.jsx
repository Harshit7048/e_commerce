import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import UserContextProvider from "./Components/Context/UserContextProvider"


import Login from './Pages/Login/Login.jsx'
 import Cart from './Pages/Cart.jsx'
 import Product from "./Pages/Product.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import banner_mens from "./Components/Assets/banner_mens.png"
import banner_women from './Components/Assets/banner_women.png'
import Contact from "./Pages/Contact.jsx"


function App() {


  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ShopCategory category="men" banner={banner_mens} />} />
          <Route path="/womens" element={<ShopCategory category="women" banner={banner_women} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />

          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
