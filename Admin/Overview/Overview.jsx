import React from "react";
import './over-view.css';

export default function Overview() {
    // Mock data for dashboard
    const stats = [
        {
            title: 'Total Revenue',
            value: '$45,231',
            change: '+12.5%',
            trend: 'up',
            icon: '💰'
        },
        {
            title: 'Total Orders',
            value: '1,234',
            change: '+8.2%',
            trend: 'up',
            icon: '📦'
        },
        {
            title: 'Active Products',
            value: '156',
            change: '+5.1%',
            trend: 'up',
            icon: '🛍️'
        },
        {
            title: 'Customers',
            value: '892',
            change: '+15.3%',
            trend: 'up',
            icon: '👥'
        }
    ];

    const recentOrders = [
        { id: '#ORD-001', customer: 'John Doe', product: 'Men\'s T-Shirt', amount: '$49.99', status: 'Completed', date: '2024-01-15' },
        { id: '#ORD-002', customer: 'Jane Smith', product: 'Women\'s Dress', amount: '$89.99', status: 'Processing', date: '2024-01-15' },
        { id: '#ORD-003', customer: 'Mike Johnson', product: 'Sneakers', amount: '$129.99', status: 'Shipped', date: '2024-01-14' },
        { id: '#ORD-004', customer: 'Sarah Williams', product: 'Handbag', amount: '$79.99', status: 'Completed', date: '2024-01-14' },
        { id: '#ORD-005', customer: 'David Brown', product: 'Watch', amount: '$199.99', status: 'Pending', date: '2024-01-13' }
    ];

    return (
        <div className="overview-container">
            {/* Stats Cards */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-header">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-change positive">
                                {stat.change}
                            </div>
                        </div>
                        <div className="stat-content">
                            <h3 className="stat-title">{stat.title}</h3>
                            <p className="stat-value">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="overview-section">
                <div className="section-header">
                    <h2>Recent Orders</h2>
                    <button className="view-all-btn">View All</button>
                </div>
                <div className="recent-orders-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index}>
                                    <td className="order-id">{order.id}</td>
                                    <td>{order.customer}</td>
                                    <td>{order.product}</td>
                                    <td className="amount">{order.amount}</td>
                                    <td>
                                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="overview-section">
                <div className="section-header">
                    <h2>Quick Actions</h2>
                </div>
                <div className="quick-actions">
                    <button className="action-btn">
                        <span className="action-icon">➕</span>
                        <span>Add New Product</span>
                    </button>
                    <button className="action-btn">
                        <span className="action-icon">📊</span>
                        <span>View Reports</span>
                    </button>
                    <button className="action-btn">
                        <span className="action-icon">⚙️</span>
                        <span>Settings</span>
                    </button>
                    <button className="action-btn">
                        <span className="action-icon">📧</span>
                        <span>Send Newsletter</span>
                    </button>
                </div>
            </div>
        </div>
    );
}