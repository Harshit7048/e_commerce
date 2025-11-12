import React from "react";
import './mens.css'
 
import Scard from "../../Components/Scard/Scard";

export default function Mens(){
    return <div className="mens">
      <div className="hero mens-hero">
        <div className="hero-text mens-hero-text">
                <div>
                    <h1>Explore Top Men's Fashion</h1>
                     
                </div>

            </div>
      </div>

      <div className="mens-section-1">
        <div className="m-s-1-box">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-2">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-3">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-4">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
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
                <Scard/>
                <Scard/>
                <Scard/>
                <Scard/>
            </div>
        </div>

        <div className="mens-section-3">
          <div className="mens-s-5-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
    </div>
}