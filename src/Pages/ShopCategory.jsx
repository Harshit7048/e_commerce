import React, { useContext } from "react";
import ShopContext from "../Components/Context/ShopContext";
import './shopcategory.css'
import CartContext from "../Components/Context/CartContext";

export default function ShopCategory(props) {

    const { all_products } = useContext(ShopContext)
    const { cart, setCart } = useContext(CartContext)
    return (
        <div className="shop-category">
            <div className="banner">
                <img src={props.banner} alt="" />

                <h1>Top Products</h1>

            </div>
            <div className="products">

                {
                    all_products && all_products.map((ele, i) => props.category === ele.category ? <div key={i} className="card">
                        <img src={ele.image} alt="" />
                        <div className="card-desc">
                            <p>{ele.name}</p>
                            <p style={{ textDecoration: "line-through" }}>{ele.old_price}</p>
                            <p>{ele.new_price}</p>
                            <button onClick={() => setCart([...cart, ele])}>Add To Cart</button>
                        </div>



                    </div> : "")
                }
            </div>
        </div>
    )
}