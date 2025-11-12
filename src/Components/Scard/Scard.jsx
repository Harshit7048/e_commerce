import React from "react";
import './scard.css'
import Button from "../Button/Button";
export default function Scard(props) {
    return <div className="card">
        <div className="scard">
            <img src={props.img} alt="" />
            <div className="p-info">
                <p className="p-title">{props.productName}</p>
                <div className="ratings">
                    ⭐️ 4.5
                </div>
                <p className="p-price">{props.productPrice}</p>
                <button className="cart-button">Add To Cart</button>

            </div>




        </div>
    </div>
}