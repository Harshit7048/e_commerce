import React, { useContext, useState } from "react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
        {isMenuOpen && (
            <div className="menu-overlay" onClick={closeMenu}></div>
        )}
        <div className="navbar">
            <div className="logo">
                Shoppers
            </div>

           

            <div className={`nav-mid ${isMenuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) =>
                            `${isActive ? 'border-b' : ""}`
                        } onClick={closeMenu}>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/mens' className={({ isActive }) =>
                            `${isActive ? 'border-b' : ""}`
                        } onClick={closeMenu}>
                            Mens
                        </NavLink>
                    </li>
                    <li> <NavLink to='/womens'
                        className={({ isActive }) =>
                            `${isActive ? 'border-b' : ""}`
                        } onClick={closeMenu}>
                        Womens
                    </NavLink></li>
                    <li>
                    <NavLink to='/contact'
                        className={({ isActive }) =>
                            `${isActive ? 'border-b' : ""}`
                        } onClick={closeMenu}>
                        Contact
                    </NavLink>
                    </li>
                </ul>

                <div className="login-mobile">
                    <div className="login-item">
                        {user ? (
                            <span className="user-name">{user.username}</span>
                        ) : (
                            <Button 
                                name="Login" 
                                css='text-white bg-black cursor-pointer border hover:border-black hover:border hover:bg-transparent hover:text-black' 
                                whereTo="/login" 
                            />
                        )}
                    </div>
                    <div className="login-item">
                        <NavLink to="/cart" onClick={closeMenu} className="cart-link-mobile">
                            <img src={cart_icon} alt="Cart" />
                            <span>Cart</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            
            <div className="login-desktop">
                {user ? `${user.username}` : <Button name="Login" css='text-white bg-black cursor-pointer border hover:border-black hover:border hover:bg-transparent hover:text-black' whereTo="/login" />}
                <li>
                    <NavLink to="/cart">
                        <img src={cart_icon} alt="Cart" />
                    </NavLink>
                </li>
            </div>
        <button 
                className="hamburger "
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
    </div>
    </>
    )
}