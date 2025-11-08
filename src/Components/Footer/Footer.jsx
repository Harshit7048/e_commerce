import React from "react";
import './footer.css'

export default function Footer(){

    return(
    <>
    <div className="footer">
         
         <div className="f-logo">
            <h1>shoppers</h1>
         </div>
         <div className="f-side">
            <div className="f-nav">
                <ul>
                    <li>Home</li>
                    <li>Mens</li>
                    <li>Womens</li>
                    
                </ul>
                <ul>
                    <li>Jeans</li>
                    <li>Shirts</li>
                    <li>Joggers</li>

                </ul>
                <ul>
                    <li>Electronics</li>
                    <li>Veggies</li>
                    <li>Snacks</li>

                </ul>
            </div>
            <div className="social-links">
                <p>Privacy Policy | </p>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a href=""><i className="fa-brands fa-youtube"></i></a>
            </div>
         </div>
    </div>
    <div className="footer-second-line">
        <p>@copyright 2025 | Harshit Bhardwaj</p>
    </div>
    </>
    )
     
}