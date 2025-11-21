import React, { useState } from "react";
import './orders.css';

export default function Orders() {
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock orders data
    const orders = [
        {
            id: '#ORD-001',
            customer: 'John Doe',
            email: 'john.doe@example.com',
            products: [
                { name: 'Men\'s T-Shirt', quantity: 2, price: 49.99 },
                { name: 'Jeans', quantity: 1, price: 79.99 }
            ],
            total: 179.97,
            status: 'Completed',
            date: '2024-01-15',
            shipping: '123 Main St, City, State 12345'
        },
        {
            id: '#ORD-002',
            customer: 'Jane Smith',
            email: 'jane.smith@example.com',
            products: [
                { name: 'Women\'s Dress', quantity: 1, price: 89.99 }
            ],
            total: 89.99,
            status: 'Processing',
            date: '2024-01-15',
            shipping: '456 Oak Ave, City, State 12345'
        },
        {
            id: '#ORD-003',
            customer: 'Mike Johnson',
            email: 'mike.j@example.com',
            products: [
                { name: 'Sneakers', quantity: 1, price: 129.99 }
            ],
            total: 129.99,
            status: 'Shipped',
            date: '2024-01-14',
            shipping: '789 Pine Rd, City, State 12345'
        },
        {
            id: '#ORD-004',
            customer: 'Sarah Williams',
            email: 'sarah.w@example.com',
            products: [
                { name: 'Handbag', quantity: 1, price: 79.99 },
                { name: 'Wallet', quantity: 1, price: 29.99 }
            ],
            total: 109.98,
            status: 'Completed',
            date: '2024-01-14',
            shipping: '321 Elm St, City, State 12345'
        },
        {
            id: '#ORD-005',
            customer: 'David Brown',
            email: 'david.b@example.com',
            products: [
                { name: 'Watch', quantity: 1, price: 199.99 }
            ],
            total: 199.99,
            status: 'Pending',
            date: '2024-01-13',
            shipping: '654 Maple Dr, City, State 12345'
        },
        {
            id: '#ORD-006',
            customer: 'Emily Davis',
            email: 'emily.d@example.com',
            products: [
                { name: 'Sunglasses', quantity: 2, price: 59.99 },
                { name: 'Hat', quantity: 1, price: 24.99 }
            ],
            total: 144.97,
            status: 'Shipped',
            date: '2024-01-13',
            shipping: '987 Cedar Ln, City, State 12345'
        },
        {
            id: '#ORD-007',
            customer: 'Robert Wilson',
            email: 'robert.w@example.com',
            products: [
                { name: 'Jacket', quantity: 1, price: 149.99 }
            ],
            total: 149.99,
            status: 'Processing',
            date: '2024-01-12',
            shipping: '147 Birch Way, City, State 12345'
        },
        {
            id: '#ORD-008',
            customer: 'Lisa Anderson',
            email: 'lisa.a@example.com',
            products: [
                { name: 'Shoes', quantity: 1, price: 99.99 },
                { name: 'Socks', quantity: 3, price: 9.99 }
            ],
            total: 129.96,
            status: 'Completed',
            date: '2024-01-12',
            shipping: '258 Spruce Ct, City, State 12345'
        }
    ];

    const filteredOrders = orders.filter(order => {
        const matchesStatus = filterStatus === 'all' || order.status.toLowerCase() === filterStatus.toLowerCase();
        const matchesSearch = searchQuery === '' || 
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusCount = (status) => {
        return orders.filter(order => order.status.toLowerCase() === status.toLowerCase()).length;
    };

    return (
        <div className="orders-container">
            {/* Stats Summary */}
            <div className="orders-stats">
                <div className="order-stat-card">
                    <div className="order-stat-icon">📦</div>
                    <div className="order-stat-content">
                        <p className="order-stat-label">Total Orders</p>
                        <p className="order-stat-value">{orders.length}</p>
                    </div>
                </div>
                <div className="order-stat-card">
                    <div className="order-stat-icon">✅</div>
                    <div className="order-stat-content">
                        <p className="order-stat-label">Completed</p>
                        <p className="order-stat-value">{getStatusCount('Completed')}</p>
                    </div>
                </div>
                <div className="order-stat-card">
                    <div className="order-stat-icon">⏳</div>
                    <div className="order-stat-content">
                        <p className="order-stat-label">Processing</p>
                        <p className="order-stat-value">{getStatusCount('Processing')}</p>
                    </div>
                </div>
                <div className="order-stat-card">
                    <div className="order-stat-icon">🚚</div>
                    <div className="order-stat-content">
                        <p className="order-stat-label">Shipped</p>
                        <p className="order-stat-value">{getStatusCount('Shipped')}</p>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="orders-controls">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search orders by ID, customer, or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                        onClick={() => setFilterStatus('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
                        onClick={() => setFilterStatus('pending')}
                    >
                        Pending
                    </button>
                    <button
                        className={`filter-btn ${filterStatus === 'processing' ? 'active' : ''}`}
                        onClick={() => setFilterStatus('processing')}
                    >
                        Processing
                    </button>
                    <button
                        className={`filter-btn ${filterStatus === 'shipped' ? 'active' : ''}`}
                        onClick={() => setFilterStatus('shipped')}
                    >
                        Shipped
                    </button>
                    <button
                        className={`filter-btn ${filterStatus === 'completed' ? 'active' : ''}`}
                        onClick={() => setFilterStatus('completed')}
                    >
                        Completed
                    </button>
                </div>
            </div>

            {/* Orders Table */}
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order, index) => (
                                <tr key={index}>
                                    <td className="order-id-cell">{order.id}</td>
                                    <td>
                                        <div className="customer-info">
                                            <p className="customer-name">{order.customer}</p>
                                            <p className="customer-email">{order.email}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="products-list">
                                            {order.products.map((product, pIndex) => (
                                                <div key={pIndex} className="product-item">
                                                    <span className="product-name">{product.name}</span>
                                                    <span className="product-details">Qty: {product.quantity} × ${product.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="total-cell">${order.total.toFixed(2)}</td>
                                    <td>
                                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>{order.date}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="action-btn-view" title="View Details">👁️</button>
                                            <button className="action-btn-edit" title="Edit Order">✏️</button>
                                            <button className="action-btn-delete" title="Delete Order">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="no-orders">
                                    No orders found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}