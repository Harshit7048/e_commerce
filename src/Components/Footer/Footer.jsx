import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const linkGroups = [
  {
    title: "Shop",
    links: ["Home", "Mens", "Womens", "Accessories"],
  },
  {
    title: "Support",
    links: ["Shipping", "Returns", "Gift cards", "FAQs"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Partners"],
  },
];

const contactDetails = [
  "+91 XXXXXXXXXXX",
  "shoppers@studio",

];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-logo">shoppers.</p>
          <p className="footer-copy">
            Elevated essentials curated weekly. Designed for wardrobes that move
            effortlessly from desk to dinner.
          </p>
          <div className="footer-social">
            <a aria-label="Instagram" href="https://www.linkedin.com/in/harshit-bh7048/" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a aria-label="Facebook" href="https://github.com/Harshit7048">
              <i className="fa-brands fa-github" />
            </a>
            <a aria-label="YouTube" href="https://www.youtube.com/@hbfitflex">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <p>Shop</p>
            <li>
              <NavLink to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/mens"}>
                Mens
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <p className="footer-heading">Stay in the know</p>
          <p className="footer-copy">
            Weekly drop alerts, and early access to capsule
            releases.
          </p>
          <div className="footer-input">
            <input type="email" placeholder="Email address" />

          </div>
          <ul className="footer-contact">
            {contactDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shoppers Studio. All rights reserved. | @Harshit Bhardwaj</p>
        <div className="footer-bottom-links">
          <NavLink to={"/privacy"}>
            Privacy Policy
          </NavLink>

        </div>
      </div>
    </footer>
  );
}