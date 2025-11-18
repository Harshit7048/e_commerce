import React from "react"
import { Link } from "react-router-dom"
import './contact.css'

export default function Contact(){
    return <div className="contact-page">
        <div className="contact-container">
            <div className="contact-hero">
                <p className="contact-eyebrow">Get in touch</p>
                <h1>We'd love to hear from you</h1>
                <p className="contact-subtitle">Have a question or feedback? Send us a message and we'll respond as soon as possible.</p>
            </div>
            
            <div className="contact-content">
                <div className="react-out">
                    <h2>Reach Out</h2>
                    <form action="" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="your.email@example.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="query">Your Message</label>
                            <textarea id="query" name="query" rows="5" placeholder="Tell us how we can help..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
                
                <div className="about-us">
                    <h2>About Us</h2>
                    <ul className="about-list">
                        <li>
                            <span className="about-icon">✓</span>
                            <div>
                                <h3>Quality First</h3>
                                <p>We curate only the finest products, ensuring every item meets our high standards for quality and craftsmanship.</p>
                            </div>
                        </li>
                        <li>
                            <span className="about-icon">✓</span>
                            <div>
                                <h3>Customer Focused</h3>
                                <p>Your satisfaction is our priority. We're committed to providing exceptional service and support at every step.</p>
                            </div>
                        </li>
                        <li>
                            <span className="about-icon">✓</span>
                            <div>
                                <h3>Fast Delivery</h3>
                                <p>We understand you want your items quickly. That's why we offer express shipping options to get your order to you fast.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <section className="page-banner">
                <div className="page-banner-content">
                    <p className="banner-eyebrow">Continue shopping</p>
                    <h2>Explore our collections</h2>
                    <p className="banner-copy">Discover premium essentials and curated pieces designed for everyday comfort and style.</p>
                    <div className="banner-actions">
                        <Link to="/womens" className="banner-primary-btn">Shop women's</Link>
                        <Link to="/mens" className="banner-secondary-btn">Shop men's</Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
}