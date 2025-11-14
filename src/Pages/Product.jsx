import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import all_product from '../Components/Assets/all_product'

export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  console.log(productId);
  useEffect(() => {
    const product = all_product.find(item => item.id === productId)
    setProduct(product)
    console.log(product);
  }, [productId])


  return (
    <div className='product-page'>
      <div className="product-image"> <img src={product.image} alt="" /></div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>


  )
}