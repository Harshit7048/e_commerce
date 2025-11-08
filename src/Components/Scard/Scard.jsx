import React from "react";
import './scard.css'
import Button from "../Button/Button";
export default function Scard(){
    return <div className="card">
        <div className="scard">
            <img src="https://i.pinimg.com/736x/99/f5/2b/99f52b2e71d22814df3eb91b29a1c4d2.jpg" alt="" />
            <div className="p-info">
    <p className="p-title">Mitsuri Kanroji figure</p>
             <div className="ratings">
            ⭐️ 4.5 
             </div>
            <p className="p-price">1000 Rs</p>
            <button className="cart-button">Add To Cart</button>
           
            </div>

         
             

        </div>
    </div>
}