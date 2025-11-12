import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import UserContextProvider from "./Components/Context/UserContextProvider"

import Mens from './Pages/Mens/Mens.jsx'
import Womens from './Pages/Womens/Womens.jsx'
import Login from './Pages/Login/Login.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Product from "./Pages/Product/Product.jsx"


function App() {


  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
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
