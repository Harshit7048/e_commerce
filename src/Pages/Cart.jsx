import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../Components/Context/CartContext";
import './cart.css'

export default function Cart() {
    const { cart } = useContext(CartContext);
    const [finalCost, setFinalCost] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        console.log("cart updated");
        console.log(cart);
        const total = cart.reduce((acc, item) => acc + Number(item.new_price), 0);
        setTotal(total);
        let finalCost = total + (total * 0.02) - (total * 0.1);
        setFinalCost(finalCost.toFixed(2));
        console.log("Total:", total);
    }, [cart])
    return (

        <div>
            <div className="cart-products">

                {

                    cart.length == 0 ? <h1>Add Something In Cart</h1> : <h1>Your Items</h1>

                }
                <div className="cart-prod-list">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-final-prod">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.new_price}</p>
                        </div>
                    ))}
                </div>

            </div>


            <div className="price-boxes">
                <div className="price-box">
                    <h1>checkout

                    </h1>
                    <p>
                        <span>Products Value</span>
                        <span>{total}</span>
                    </p>
                    <p>
                        <span>Shipping Cost</span>
                        <span>{finalCost == 0 ? 0 : 2}%</span>

                    </p>
                    <p style={{ marginBottom: "10px" }}>
                        <span>Discount</span>
                        <span>{finalCost == 0 ? 0 : 10}%</span>
                    </p>
                    <hr />
                    <p>
                        <span>Final Amount</span>
                        <span>${finalCost}</span>
                    </p>

                    <button className="check-out-btn">CheckOut</button>
                </div>
                <div className="policy-box">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dolor consectetur quam iusto temporibus dolorem in, dicta, ducimus molestiae at voluptates cupiditate? Expedita modi, nam non odit quas perferendis facilis maiores assumenda reiciendis! Distinctio dolorem consequuntur, sunt sapiente cumque animi expedita quaerat ex labore aspernatur accusantium nobis perspiciatis enim! Asperiores fuga veniam magni id, voluptas quia eaque. Iste perspiciatis magni sit, esse quos consequuntur excepturi dolor delectus voluptatum, eos distinctio, facere quae neque dolorem inventore. Consectetur rerum amet ab quam ducimus consequuntur ex eum, similique delectus veniam modi dolorem optio earum nisi mollitia tempore pariatur dignissimos et vel. Non, sapiente?</p>
                </div>
            </div>
        </div>

    )
}