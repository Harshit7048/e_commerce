import React from "react";
import { useContext } from "react";
import CartContext from "../Components/Context/CartContext";


export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    return (

        <div>
            {

                cart.length == 0 ? "Enter something in cart" : "Here are your cart items"

            }
            {cart.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>

    )
}