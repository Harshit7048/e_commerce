import React, { useEffect, useState } from "react";
import './cart.css'
import CartProduct from "../CartProduct/CartProduct";

export default function Cart() {

    const [finalAmount, setFinalAmount] = useState(0)
    const [discount, setDiscount] = useState(0)

    const [finalTotal, setFinalTotoal] = useState(0)

    ////// Setting discount with useeffect
    useEffect(() => {
        setDiscount(((10 / 100) * finalAmount).toFixed(2));
    }, [finalAmount, setFinalAmount])


    /////////setting final total amount
    useEffect(() => {
        if (finalAmount > 20) setFinalTotoal((finalAmount + 5 - discount).toFixed(2))
    }, [finalAmount, setFinalAmount, discount, setDiscount])



    return <div className="cart">
        <h1>Your Cart</h1>
        <div className="cart-box">
            <div className="c-items">
                <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet quos quasi repellendus? Voluptatibus tenetur libero saepe, minus voluptas animi dolorum. Distinctio tempora minus tempore modi, provident cum nihil laudantium. Harum deserunt temporibus quaerat!</p>

                <div className="cart-product">
                    {/* <h2>Products</h2> */}
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={45} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={25} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={85} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={15} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={39} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={36} />
                    <CartProduct sharedAmount={finalAmount} setSharedAmount={setFinalAmount} price={56} />
                </div>
            </div>
            <div className="c-checkout">
                <h1>Summary</h1>

                <div className="cart-amount">
                    <hr />
                    <div className="amt-s-lines">
                        <span>Items</span>
                        <span>{finalAmount}</span>
                    </div>
                    <div className="amt-s-lines">
                        <span>Shipping Cost</span>
                        <span>+{5}</span>
                    </div>
                    <div className="amt-s-lines">
                        <span>Discounts(10%)</span>
                        <span>-{discount}</span>
                    </div>

                    <hr />
                    <div className="final-line-amt">
                        <span>Total</span>
                        <span>{finalTotal}</span>
                    </div>

                    <button className="checkout-btn">Check Out</button>

                </div>
            </div>
        </div>
    </div>
}