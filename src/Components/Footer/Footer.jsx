import React from "react";
import "./footer.css";

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
  "+1 (213) 555-0192",
  "hi@shoppers.studio",
  "New York · Los Angeles",
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
            <a aria-label="Instagram" href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a aria-label="Facebook" href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a aria-label="YouTube" href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          {linkGroups.map((group) => (
            <div key={group.title} className="footer-column">
              <p className="footer-heading">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-newsletter">
          <p className="footer-heading">Stay in the know</p>
          <p className="footer-copy">
            Weekly drop alerts, bespoke styling notes, and early access to capsule
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
        <p>© {new Date().getFullYear()} Shoppers Studio. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}