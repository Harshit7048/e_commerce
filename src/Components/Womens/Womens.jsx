import React from "react";
import './women.css'
 
import Scard from "../Scard/Scard";

export default function Womens(){
    return <div className="womens">
     <div className="hero w-hero">
            <div className="hero-text w-text">
                <div>
                    <h1>Explore trending Women Fashion</h1>
                     
                </div>

            </div>
        </div>


         <div className="mens-section-1">
        <div className="m-s-1-box w-box-1">
          <div className="m-s-box-text w-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-2 w-box-2">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-3 w-box-3">
          <div className="m-s-box-text">
            <h1>Fashion</h1>
          </div>
        </div>
        <div className="m-s-1-box m-box-4 w-box-4">
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

        <div className="mens-section-3 w-section-3">
          <div className="mens-s-5-text">
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
    </div>
}