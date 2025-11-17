import React, { useEffect, useState, useContext, useRef } from 'react'
import ShopContext from '../Components/Context/ShopContext'
import CartContext from '../Components/Context/CartContext'
import { useParams } from 'react-router-dom'
import './productmain.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const formatCurrency = (value) => {
  const parsed = Number(value)
  if (Number.isNaN(parsed)) {
    return null
  }

  return currencyFormatter.format(parsed)
}

export default function Product() {
  const { all_products } = useContext(ShopContext)
  const { productId } = useParams()
  const [product, setFinalProduct] = useState(null)
  const popUpRef = useRef(null)
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    if (all_products && productId) {
      setFinalProduct(all_products.find((item) => item.id === Number(productId)))
    }
  }, [productId, all_products])

  const showAnimation = () => {
    if (popUpRef.current) {
      popUpRef.current.classList.add('active-pop')
      setTimeout(() => {
        popUpRef.current.classList.remove('active-pop')
      }, 1200)
    }
  }

  if (!product) {
    return <div className="product-loading">Loading product details...</div>
  }

  const highlightList = [
    'Free 30-day returns',
    'Next-day dispatch',
    'Premium support team',
  ]

  const formattedNewPrice = formatCurrency(product.new_price) ?? '$0.00'
  const formattedOldPrice = formatCurrency(product.old_price)
  const savingsPercent =
    product.old_price && product.new_price
      ? Math.round(
          ((Number(product.old_price) - Number(product.new_price)) /
            Number(product.old_price)) *
            100
        )
      : null

  return (
    <div className="product-page">
      <div ref={popUpRef} className="pop-up" role="status">
        Added to cart
      </div>

      <div className="product-card">
        <section className="product-gallery" aria-label="Product gallery">
          <div className="status-pill">In stock</div>

          <div className="main-image-card">
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>

          {/* <div className="thumbnail-grid">
            {Array.from({ length: 4 }).map((_, index) => (
              <button
                key={index}
                className={`thumbnail ${index === 0 ? 'is-active' : ''}`}
                type="button"
                aria-label={`Preview ${index + 1}`}
              >
                <img src={product.image} alt={`${product.name} preview`} />
              </button>
            ))}
          </div> */}
        </section>

        <section className="product-details">
          <p className="product-breadcrumb">
            Home / {product.category ?? 'Collection'} / {product.name}
          </p>
          <h1 className="pr-heading">{product.name}</h1>

          <div className="product-rating">
            <div className="stars" aria-label="4.8 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className="star-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2l2.9 6.73 7.1.57-5.4 4.78 1.64 6.92L12 16.98l-6.24 4.02 1.64-6.92-5.4-4.78 7.1-.57z" />
                </svg>
              ))}
            </div>
            <span className="rating-copy">4.8 • 128 verified reviews</span>
          </div>

          <p className="product-description">
            {product.description ??
              'Crafted with premium materials for everyday comfort, this best-selling piece elevates your wardrobe with effortless style.'}
          </p>

          <div className="price-row">
            <span className="price-current">{formattedNewPrice}</span>
            {formattedOldPrice ? (
              <span className="price-old">{formattedOldPrice}</span>
            ) : null}
            {savingsPercent ? (
              <span className="price-badge">Save {savingsPercent}%</span>
            ) : null}
          </div>

          <div className="option-group">
            <p className="option-label">Choose size</p>
            <div className="chip-list">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <span key={size} className={`chip ${size === 'M' ? 'active' : ''}`}>
                  {size}
                </span>
              ))}
            </div>
          </div>

        

          <div className="action-row">
            <button
              onClick={() => {
                setCart([...cart, product])
                showAnimation()
              }}
              className="primary-btn add-to-cart-btn"
            >
              Add to cart
            </button>
            {/* <button type="button" className="secondary-btn">
              Buy now
            </button> */}
            {/* <button type="button" className="ghost-btn">
              Add to wishlist
            </button> */}
          </div>

          <div className="product-meta-grid">
            <div className="meta-card">
              <p className="meta-title">Shipping</p>
              <p className="meta-copy">Free over $100 · Express available</p>
            </div>
            <div className="meta-card">
              <p className="meta-title">Guarantee</p>
              <p className="meta-copy">100% secure checkout · 24/7 support</p>
            </div>
            <div className="meta-card">
              <p className="meta-title">SKU</p>
              <p className="meta-copy">SKU-{String(product.id).padStart(4, '0')}</p>
            </div>
          </div>

          <div className="product-highlights">
            <h2>Why shoppers love it</h2>
            <ul>
              {highlightList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}