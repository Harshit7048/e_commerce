import React, { useContext } from "react";
import './header.css'
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import cart_icon from '../Assets/cart_icon.png'
import UserContext from "../Context/UserContext";




export default function Header() {


    // fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()).then(data => JSON.parse(JSON.stringify(data)))
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //   .then(res => res.json())
    //   .then(data => {
    //     const deepCopy = JSON.parse(JSON.stringify(data)); // ✅ Deep copy
    //     console.log(deepCopy); // or use it however you want
    //     // You can set this to state or use it further
    //   })
    //   .catch(err => console.error('Fetch error:', err));


    const { user } = useContext(UserContext)





    return <div className="navbar">
        <div className="logo">
            MyLogo
        </div>

        <div className="nav-mid">
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        `${isActive ? 'border-b' : ""}`
                    }>
                        Home
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/mens' className={({ isActive }) =>
                        `${isActive ? 'border-b' : ""}`
                    }>
                        Mens
                    </NavLink>
                </li>
                <li> <NavLink to='/womens'
                    className={({ isActive }) =>
                        `${isActive ? 'border-b' : ""}`
                    }>
                    Womens
                </NavLink></li>
                <li>Contact</li>
            </ul>

        </div>
        <div className="login">
            {user ? `${user.username}` : <Button name="Login" css='text-white bg-black cursor-pointer border hover:border-black hover:border hover:bg-transparent hover:text-black' whereTo="/login" />}
            <li>
                <NavLink to="/cart">
                    <img src={cart_icon} alt="" />
                </NavLink>
            </li>

        </div>
    </div>
}