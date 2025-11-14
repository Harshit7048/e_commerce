import React, { useContext, useRef } from "react";
import './home.css'
import Scard from "../../Components/Scard/Scard";
import Button from "../../Components/Button/Button";
import data_product from "../../Components/Assets/data";
import CartContext from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";


export default function Home() {

    const popUpRef = useRef(null)
    const { cart, setCart } = useContext(CartContext)
    const showAnimation = () => {
        if (popUpRef.current) {
            popUpRef.current.classList.add('active-pop')
            setTimeout(() => {
                popUpRef.current.classList.remove('active-pop')
            }, 1000)
        }
    }



    return <div className="home">
        <div className="hero">
            <div className="hero-text">
                <div>
                    <h1>Shoppers.</h1>
                    <h2>Where needs meets <br /> Quality</h2>
                </div>

            </div>
        </div>
        <div className="trending-products">
            <h1>Top Trending Products</h1>
            <div ref={popUpRef} className="pop-up">
                    Added
                </div>
            <div className="t-products">
                {data_product.map((item) => (
                    <div className="t-product">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.new_price}</p>
                        <button onClick={() => {
                                setCart([...cart, item])
                                showAnimation()
                            }}
                                className="prod-btn"
                            >Add To Cart</button>
                            <Link to={`/product/${item.id}`} className="view-product-btn">View Product</Link>
                    </div>
                ))}
            </div>
        </div>



    </div>
}