import React, { useContext, useState, useEffect, useMemo } from "react";
import CartContext from "../Components/Context/CartContext";
import './final-checkout.css';

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (value) => currencyFormatter.format(Number(value) || 0);

export default function FinalCheckOut() {
    const { cart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'cod'
    });
    const [total, setTotal] = useState(0);
    const [finalCost, setFinalCost] = useState(0);

    useEffect(() => {
        const totalValue = cart.reduce(
            (acc, item) => acc + Number(item.new_price),
            0
        );
        setTotal(totalValue);
        const computedFinal = totalValue + totalValue * 0.02 - totalValue * 0.1;
        setFinalCost(computedFinal.toFixed(2));
    }, [cart]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Order placed successfully!');
    };

    const summaryRows = useMemo(
        () => [
            { label: "Products value", value: formatCurrency(total) },
            { label: "Shipping", value: total === 0 ? "$0.00" : "2%" },
            { label: "Discount", value: total === 0 ? "$0.00" : "10%" },
        ],
        [total]
    );

    if (cart.length === 0) {
        return (
            <div className="checkout-page">
                <div className="checkout-empty">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to proceed with checkout</p>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-hero">
                <div>
                    <p className="checkout-eyebrow">Complete your purchase</p>
                    <h1>Checkout</h1>
                </div>
                <div className="checkout-hero-pill">
                    <span>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
                    <span>{formatCurrency(total)}</span>
                </div>
            </div>

            <div className="checkout-grid">
                <section className="checkout-form-panel">
                    <div className="checkout-form-card">
                        <h2>Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="checkout-form">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address *</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    placeholder="Enter your complete address"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter city"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter state"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pincode">Pincode *</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter pincode"
                                    pattern="[0-9]{6}"
                                    maxLength="6"
                                />
                            </div>

                            <div className="payment-section">
                                <h3>Payment Method *</h3>
                                <div className="payment-options">
                                    <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={formData.paymentMethod === 'cod'}
                                            onChange={handleInputChange}
                                        />
                                        <div className="payment-option-content">
                                            <span className="payment-icon">💵</span>
                                            <div>
                                                <span className="payment-name">Cash on Delivery (COD)</span>
                                                <span className="payment-desc">Pay when you receive</span>
                                            </div>
                                        </div>
                                    </label>

                                    <label className={`payment-option ${formData.paymentMethod === 'netbanking' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="netbanking"
                                            checked={formData.paymentMethod === 'netbanking'}
                                            onChange={handleInputChange}
                                        />
                                        <div className="payment-option-content">
                                            <span className="payment-icon">🏦</span>
                                            <div>
                                                <span className="payment-name">Net Banking</span>
                                                <span className="payment-desc">Pay online securely</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="place-order-btn">
                                Place Order
                            </button>
                        </form>
                    </div>
                </section>

                <aside className="checkout-summary-panel">
                    <div className="summary-card">
                        <p className="checkout-eyebrow">Order summary</p>
                        <h3>Your Order</h3>

                        <div className="order-items-preview">
                            <div className="order-items-header">
                                <span>Items ({cart.length})</span>
                            </div>
                            <div className="order-items-list">
                                {cart.map((item) => (
                                    <div key={item.id} className="order-item-preview">
                                        <div className="order-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="order-item-details">
                                            <p className="order-item-name">{item.name}</p>
                                            <span className="order-item-price">{formatCurrency(item.new_price)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="summary-divider" />

                        <div className="summary-rows">
                            {summaryRows.map((row) => (
                                <p key={row.label}>
                                    <span>{row.label}</span>
                                    <span>{row.value}</span>
                                </p>
                            ))}
                        </div>

                        <hr className="summary-divider" />

                        <p className="summary-total">
                            <span>Total Amount</span>
                            <span>{total === 0 ? "$0.00" : `$${finalCost}`}</span>
                        </p>

                        <div className="summary-perks">
                            <p>✔ Secure payments with SSL encryption</p>
                            <p>✔ Free returns within 30 days</p>
                            <p>✔ 24/7 customer support</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}