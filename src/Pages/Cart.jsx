import React, { useEffect, useState, useMemo } from "react";
import { useContext } from "react";
import CartContext from "../Components/Context/CartContext";
import "./cart.css";
import { NavLink } from "react-router-dom";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (value) => currencyFormatter.format(Number(value) || 0);

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [finalCost, setFinalCost] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalValue = cart.reduce(
      (acc, item) => acc + Number(item.new_price),
      0
    );
    setTotal(totalValue);
    const computedFinal = totalValue + totalValue * 0.02 - totalValue * 0.1;
    setFinalCost(computedFinal.toFixed(2));
  }, [cart]);

  const summaryRows = useMemo(
    () => [
      { label: "Products value", value: formatCurrency(total) },
      { label: "Shipping", value: total === 0 ? "$0.00" : "2%" },
      { label: "Discount", value: total === 0 ? "$0.00" : "10%" },
    ],
    [total]
  );

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <div>
          <p className="cart-eyebrow">Your shopping bag</p>
          <h1>Review & checkout</h1>
        </div>
        <div className="cart-hero-pill">
          <span>{cart.length} items</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="cart-grid">
        <section className="cart-list-panel">
          <div className="cart-list-header">
            <div>
              <h2>Bag summary</h2>
              <p>{cart.length === 0 ? "No items yet" : "Ready for checkout"}</p>
            </div>
            <span className="cart-total-pill">{formatCurrency(total)}</span>
          </div>

          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <p>Your bag feels empty.</p>
              <span>Add products to see them here.</span>
            </div>
          ) : (
            <ul className="cart-item-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item-card">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-content">
                    <p className="cart-item-name">{item.name}</p>
                    <span className="cart-item-meta">
                      SKU-{String(item.id).padStart(4, "0")}
                    </span>
                  </div>
                  <div className="cart-item-price">
                    {formatCurrency(item.new_price)}
                    <small>Qty 1</small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="cart-summary-panel">
          <div className="summary-card">
            <p className="cart-eyebrow">Order summary</p>
            <h3>Checkout</h3>

            <div className="summary-rows">
              {summaryRows.map((row) => (
                <p key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </p>
              ))}
            </div>

            <hr />

            <p className="summary-total">
              <span>Final amount</span>
              <span>{total === 0 ? "$0.00" : `$${finalCost}`}</span>
            </p>

            <button className="check-out-btn">
              <NavLink to={'/checkout'}>
                Proceed to payment
              </NavLink>
            </button>

            <div className="summary-perks">
              <p>✔ Secure payments with SSL encryption</p>
              <p>✔ Free returns within 30 days</p>
              <p>✔ 24/7 chat support</p>
            </div>
          </div>

          <div className="policy-card">
            <h4>Shipping & returns</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur dolor consectetur quam iusto temporibus dolorem in,
              dicta, ducimus molestiae at voluptates cupiditate? Expedita modi,
              nam non odit quas perferendis facilis maiores assumenda reiciendis.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}