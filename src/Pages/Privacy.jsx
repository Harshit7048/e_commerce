import React from "react";
import "./privacy.css"; // <-- import external CSS

const Privacy = () => {
    return (
        <div className="policy-container">
            <h1 className="policy-title">Privacy Policy — Shoppers</h1>
            <p className="policy-updated">Last updated: January 2025</p>

            <p className="policy-text">
                Welcome to <strong>Shoppers</strong>. Your privacy is important to us. This Privacy Policy
                explains how we collect, use, and protect your information when you visit our website or
                make a purchase.
            </p>

            <h2 className="policy-section-title">1. Information We Collect</h2>

            <h3 className="policy-subtitle">1.1 Personal Information</h3>
            <p className="policy-text">We may collect the following details when you create an account or place an order:</p>
            <ul className="policy-list">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Shipping & Billing Address</li>
                <li>Payment Information (securely processed by third-party gateways)</li>
            </ul>

            <h3 className="policy-subtitle">1.2 Automatically Collected Data</h3>
            <p className="policy-text">When you browse our site, we automatically collect:</p>
            <ul className="policy-list">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited & time spent</li>
                <li>Cookies & tracking data</li>
            </ul>

            <h2 className="policy-section-title">2. How We Use Your Information</h2>
            <ul className="policy-list">
                <li>Processing and delivering your orders</li>
                <li>Improving website functionality</li>
                <li>Sending promotional offers</li>
                <li>Preventing fraud</li>
                <li>Customer support</li>
                <li>Personalizing product recommendations</li>
            </ul>

            <h2 className="policy-section-title">3. How We Share Your Information</h2>
            <p className="policy-text">
                We do <strong>not</strong> sell your data but may share limited information with:
            </p>
            <ul className="policy-list">
                <li>Payment processors</li>
                <li>Shipping partners</li>
                <li>Analytics providers</li>
                <li>Email/notification services</li>
            </ul>

            <h2 className="policy-section-title">4. Cookies & Tracking</h2>
            <p className="policy-text">
                Cookies help improve your shopping experience by remembering cart items and tracking analytics.
            </p>

            <h2 className="policy-section-title">5. Data Security</h2>
            <p className="policy-text">
                We use SSL encryption, secure payment gateways, and restricted access to protect your data.
            </p>

            <h2 className="policy-section-title">6. Your Rights</h2>
            <p className="policy-text">You may:</p>
            <ul className="policy-list">
                <li>Request access or deletion of your data</li>
                <li>Disable cookies</li>
                <li>Opt out of marketing emails</li>
                <li>Request a copy of your stored data</li>
            </ul>

            <h2 className="policy-section-title">7. Children’s Privacy</h2>
            <p className="policy-text">
                We do not knowingly collect information from children under 13.
            </p>

            <h2 className="policy-section-title">8. Third-Party Links</h2>
            <p className="policy-text">
                We are not responsible for the privacy practices of external websites.
            </p>

            <h2 className="policy-section-title">9. Changes to This Policy</h2>
            <p className="policy-text">
                Updates may occur periodically. The updated policy will always be posted here.
            </p>

            <h2 className="policy-section-title">10. Contact Us</h2>
            <p className="policy-text">
                For any questions:
                <br />📧 <strong>support@shoppers.com</strong>
                <br />📍 New Delhi, India
            </p>
        </div>
    );
};

export default Privacy;
