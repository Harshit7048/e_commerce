import React, { useContext } from "react";
import './home.css'
import Scard from "../Scard/Scard";
import Button from "../Button/Button";
 

export default function Home() {

    



    return <div className="home">
        <div className="hero">
            <div className="hero-text">
                <div>
                    <h1>Shoppers.</h1>
                    <h2>Where needs meets <br /> Quality</h2>
                </div>

            </div>
        </div>

        <div className="section-1">
            <h1>Trending Products</h1>

            <div className="products-1">
                <Scard/>
                <Scard/>
                <Scard/>
                <Scard/>
            </div>
        </div>

        <div className="section-2">
            <div className="s-2-box s-2-box-one">
                <div className="s-2-box-child s-2-box-1"></div>
                <div className="s-2-box-child s-2-box-2"></div>
            </div>
            <div className="s-2-box box-2">
                <div className="s-2-box-main">
                    <div className="s-2-box-text">
                        <h1>Top Sellers</h1>
                         <Button name="check out" css="bg-white"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="section-3">
            <h1>Top Men's Clothing</h1>

            <div className="products-2">
                <Scard/>
                <Scard/>
                <Scard/>
                <Scard/>
            </div>
        </div>
        <div className="section-3">
            <h1>Top Women's Clothing</h1>

            <div className="products-2">
                <Scard/>
                <Scard/>
                <Scard/>
                <Scard/>
            </div>
        </div>

        <div className="section-4">
            <h1>Our Satisfied Customers</h1>
            <div className="testimonials">
                <div className="t-box">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore fugiat aut eaque sequi! Atque rem, accusamus pariatur illo repellat magnam illum sequi, aut eius consequuntur quasi dolor culpa minima cupiditate porro dolore dolorem quisquam!</p>
                    <p>⭐️⭐️⭐️</p>
                    <p className="t-box-author">
                        -ABC
                    </p>
                </div>
                <div className="t-box">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore fugiat aut eaque sequi! Atque rem, accusamus pariatur illo repellat magnam illum sequi, aut eius consequuntur quasi dolor culpa minima cupiditate porro dolore dolorem quisquam!</p>
                    <p>⭐️⭐️⭐️</p>
                    <p className="t-box-author">
                        -ABC
                    </p>
                </div>
                <div className="t-box">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore fugiat aut eaque sequi! Atque rem, accusamus pariatur illo repellat magnam illum sequi, aut eius consequuntur quasi dolor culpa minima cupiditate porro dolore dolorem quisquam!</p>
                    <p>⭐️⭐️⭐️</p>
                    <p className="t-box-author">
                        -ABC
                    </p>
                </div>
                <div className="t-box">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore fugiat aut eaque sequi! Atque rem, accusamus pariatur illo repellat magnam illum sequi, aut eius consequuntur quasi dolor culpa minima cupiditate porro dolore dolorem quisquam!</p>
                    <p>⭐️⭐️⭐️</p>
                    <p className="t-box-author">
                        -ABC
                    </p>
                </div>
                 
            </div>
        </div>

    </div>
}