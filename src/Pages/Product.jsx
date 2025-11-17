import React, { useEffect, useState, useContext, useRef } from 'react'
import ShopContext from '../Components/Context/ShopContext'
import CartContext from '../Components/Context/CartContext'
import { useParams } from 'react-router-dom'
import './productmain.css'

 

export default function Product() {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const [product , setFinalPRoduct] = useState(null)
  const popUpRef = useRef(null)
  const { cart, setCart } = useContext(CartContext)


  useEffect(()=>{
      if (all_products && productId) {
        setFinalPRoduct(all_products.find(item=>item.id == Number(productId)))
      }
  },[productId, all_products])
  const showAnimation = () => {
    if (popUpRef.current) {
        popUpRef.current.classList.add('active-pop')
        setTimeout(() => {
            popUpRef.current.classList.remove('active-pop')
        }, 1000)
    }
}

  

  console.log(product);


  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className='product-page'>
      <div ref={popUpRef} className="pop-up">
                    Added
                </div>
      <div className="product-image"> <img src={product.image} alt="" /></div>
      <div className="product-details">
        <h1 className='pr-heading'>{product.name}</h1>
        <p>{product.description}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque earum quisquam, laboriosam laudantium non rerum vitae quasi, maiores harum recusandae mollitia saepe similique labore ratione, exercitationem aspernatur debitis molestias beatae? Perspiciatis, itaque ea ullam exercitationem dolor vero consequatur, rem illum facere animi consequuntur maiores fugit?</p>
        <p>{product.new_price}</p>
        <button
        onClick={() => {
          setCart([...cart, product])
          showAnimation()
      }}
        className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  )
}