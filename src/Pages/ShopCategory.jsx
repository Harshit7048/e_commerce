import React, { useContext, useRef } from "react";
import ShopContext from "../Components/Context/ShopContext";
import './shopcategory.css'
import CartContext from "../Components/Context/CartContext";
import { Link } from "react-router-dom";

export default function ShopCategory(props) {

    const { all_products } = useContext(ShopContext)
    const { cart, setCart } = useContext(CartContext)
    const popUpRef = useRef(null)

    const showAnimation = () => {
        if (popUpRef.current) {
            popUpRef.current.classList.add('active-pop')
            setTimeout(() => {
                popUpRef.current.classList.remove('active-pop')
            }, 1000)
        }
    }


    return (
        <div className="shop-category">
            <div className="banner">
                <img src={props.banner} alt="" />

                <h1>Top Products</h1>

            </div>
            <div className="products">
                <div ref={popUpRef} className="pop-up">
                    Added
                </div>

                {
                    all_products && all_products.map((ele, i) => props.category === ele.category ? <div key={i} className="card">
                        <img src={ele.image} alt="" />
                        <div className="card-desc">
                            <p>{ele.name}</p>
                            <p style={{ textDecoration: "line-through" }}>{ele.old_price}</p>
                            <p>{ele.new_price}</p>
                            <button onClick={() => {
                                setCart([...cart, ele])
                                showAnimation()
                            }}
                                className="prod-btn"
                            >Add To Cart</button>
                            <Link to={`/product/${ele.id}`} className="view-product-btn">View Product</Link>
                        </div>



                    </div> : "")
                }
            </div>
        </div>
    )
}