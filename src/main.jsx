import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import ShopContextProvider from './Components/Context/ShopContextProvider.jsx'
import CartContextProvider from './Components/Context/CartContextProvider.jsx'
import { HashRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <CartContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </CartContextProvider>
    </ShopContextProvider>
  </React.StrictMode>
)
