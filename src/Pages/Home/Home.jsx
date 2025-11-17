import React, { useContext, useMemo, useRef } from "react";
import "./home.css";
import data_product from "../../Components/Assets/data";
import CartContext from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";

const highlights = [
  { title: "New arrivals", copy: "Updated every Monday" },
  { title: "Trusted quality", copy: "Handpicked premium fabrics" },
  { title: "Fast delivery", copy: "2-day express nationwide" },
];

export default function Home() {
  const popUpRef = useRef(null);
  const { cart, setCart } = useContext(CartContext);

  const curatedProducts = useMemo(() => data_product.slice(0, 4), []);

  const showAnimation = () => {
    if (popUpRef.current) {
      popUpRef.current.classList.add("active-pop");
      setTimeout(() => {
        popUpRef.current.classList.remove("active-pop");
      }, 1000);
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Welcome to Shoppers</p>
          <h1>Effortless staples for every day</h1>
          <p className="hero-copy">
            Thoughtful essentials curated for comfort, confidence, and a lighter
            wardrobe. Discover silhouettes that feel as good as they look.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="primary-cta">
              Browse collection
            </Link>
            <Link to="/product/1" className="ghost-cta">
              View featured
            </Link>
          </div>
        </div>
        
      </section>

      <section className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="trending-products">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Curated for you</p>
            <h2>Editor’s daily picks</h2>
          </div>
          <Link to="/womens" className="section-link">
            View all
          </Link>
        </div>

        <div ref={popUpRef} className="pop-up">
          Added
        </div>

        <div className="t-products">
          {curatedProducts.map((item) => (
            <article key={item.id} className="t-product">
              <div className="t-product-image">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div>
                <p className="t-product-name">{item.name}</p>
                <p className="t-product-price">${item.new_price}</p>
              </div>
              <div className="t-product-actions">
                <button
                  onClick={() => {
                    setCart([...cart, item]);
                    showAnimation();
                  }}
                  className="prod-btn"
                >
                  Add to bag
                </button>
                <Link to={`/product/${item.id}`} className="view-product-btn">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}