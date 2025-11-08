import React from "react";
import './cartproduct.css'
import Button from "../Button/Button";

export default function CartProduct(props){

     const {sharedAmount , setSharedAmount , price } = props;

     const settingVal = ()=>{
        console.log(sharedAmount);
        setSharedAmount(sharedAmount + price)
        console.log(sharedAmount);
     }



    

    return <div className="c-product">
        <img src="https://i.pinimg.com/736x/99/f5/2b/99f52b2e71d22814df3eb91b29a1c4d2.jpg" alt="" />
        <div className="c-prod-text">
            <p>Mitsuri kanroji Figure</p>
            <button className="cart-button" onClick={settingVal}>Check amount</button>
        </div>
    </div>
}