import React, { useContext, useRef } from "react";
import ShopContext from "../Components/Context/ShopContext";
import './shopcategory.css'
import CartContext from "../Components/Context/CartContext";
import { Link } from "react-router-dom";

const heroContent = {
    men: {
        eyebrow: "Mens edit",
        title: "Layered tailoring & everyday utility",
        copy: "Sharp silhouettes, monochrome palettes, and easy layers built to move with you. Curated weekly for the modern uniform.",
        image: "https://infashionbusiness.com/admin_assets/images/products/infashion-1739774882.jpeg",
        tags: ["Premium cotton", "City commute", "New arrivals"],
        cardEyebrow: "Style memo",
        cardTitle: "Elevate the essentials",
        cardPoints: ["Wrinkle-free poplin", "Neutral knit sets", "Guaranteed 2-day delivery"]
    },
    
    women: {
        eyebrow: "Womens edit",
        title: "Soft tailoring for statement days",
        copy: "Minimal staples with sculpted drape, tonal textures, and subtle shine. Designed to transition desk to dinner.",
        image: "https://image.hm.com/content/dam/global_campaigns/season_01/women/startpage-assets/wk20/WS32A-startpage-women-wk20-16x9.jpg?imwidth=4800",
        tags: ["Capsule ready", "Day-to-night", "Limited drop"],
        cardEyebrow: "Featured capsule",
        cardTitle: "Monochrome layers",
        cardPoints: ["Pleated slips", "Bouclé jackets", "Express shipping"]
    }
};

export default function ShopCategory(props) {

    const { all_products } = useContext(ShopContext)
    const { cart, setCart } = useContext(CartContext)
    const popUpRef = useRef(null)

    const showAnimation = () => {
        if (popUpRef.current) {
            popUpRef.current.classList.add('active-pop')
            setTimeout(() => {
                popUpRef.current.classList.remove('active-pop')
            }, 1000)
        }
    }

    const hero = heroContent[props.category] ?? heroContent.women


    return (
        <div className="shop-category">
            <section className="category-hero" style={{
                backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.8), rgba(0,0,0,0.35)), url(${hero.image})`
            }}>
                <div className="category-hero-overlay">
                    <p className="category-hero-eyebrow">{hero.eyebrow}</p>
                    <h1>{hero.title}</h1>
                    <p>{hero.copy}</p>
                    <div className="hero-tags">
                        {hero.tags.map(tag => (
                            <span key={tag} className="hero-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="category-hero-card">
                    <p className="card-eyebrow">{hero.cardEyebrow}</p>
                    <h3>{hero.cardTitle}</h3>
                    <ul>
                        {hero.cardPoints.map(point => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <a href="#category-products" className="hero-cta">Shop the edit</a>
                </div>
            </section>
            <div className="banner">
                <img src={props.banner} alt="" />

                <h1>Top Products</h1>

            </div>
            <div className="products">
                <div ref={popUpRef} className="pop-up">
                    Added
                </div>

                {
                    all_products && all_products.map((ele, i) => props.category === ele.category ? <div key={i} className="card">
                        <div className="card-media">
                            <img src={ele.image} alt={ele.name} loading="lazy" />
                        </div>
                        <div className="card-desc">
                            <p className="card-name">{ele.name}</p>
                            <p className="card-price-row">
                                <span className="price-new">${ele.new_price}</span>
                                <span className="price-old">${ele.old_price}</span>
                            </p>
                            <div className="card-actions">
                                <button onClick={() => {
                                    setCart([...cart, ele])
                                    showAnimation()
                                }}
                                    className="prod-btn"
                                >Add to bag</button>
                                <Link to={`/product/${ele.id}`} className="view-product-btn">View details</Link>
                            </div>
                        </div>



                    </div> : "")
                }
            </div>
        </div>
    )
}