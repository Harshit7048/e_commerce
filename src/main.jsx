 
 
import React, { Children  } from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider , createBrowserRouter } from 'react-router-dom'
 import './index.css'

 

import App from './App.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Mens from './Components/Mens/Mens.jsx'
import Womens from './Components/Womens/Womens.jsx'
import Login from './Components/Login/Login.jsx'
import Cart from './Components/Cart/Cart.jsx'


const router =  createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      }
      ,
      {
        path:"mens",
        element:<Mens/>
      }
      ,
       {
        path:"womens",
        element:<Womens/>
      }
      ,
       {
        path:"login",
        element: <Login/>
      },
       {
        path:"cart",
        element: <Cart/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>

   <RouterProvider router={router} />

 </React.StrictMode>
  
)