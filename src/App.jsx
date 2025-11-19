import React from "react"
import { Route, Routes } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "../scrolltotop.jsx";

import Home from "./Pages/Home/Home.jsx"
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import UserContextProvider from "./Components/Context/UserContextProvider.jsx"

import Login from './Pages/Login/Login.jsx'
import Cart from './Pages/Cart.jsx'
import Product from "./Pages/Product.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import banner_mens from "./Components/Assets/banner_mens.png"
import banner_women from './Components/Assets/banner_women.png'
import Contact from "./Pages/Contact.jsx"
import Privacy from "./Pages/Privacy.jsx";

function App() {
  return (
    <UserContextProvider>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<ShopCategory category="men" banner={banner_mens} />} />
        <Route path="/womens" element={<ShopCategory category="women" banner={banner_women} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>

      <Footer />
    </UserContextProvider>
  )
}

export default App
