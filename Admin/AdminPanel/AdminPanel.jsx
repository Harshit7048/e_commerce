import React from "react";
import './admin-panel.css'
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

export default function AdminPanel() {
    const location = useLocation();
    
    const getPageTitle = () => {
        if (location.pathname.includes('/orders')) return 'Orders Management';
        if (location.pathname.includes('/overview')) return 'Dashboard Overview';
        return 'Admin Panel';
    };

    const getPageDescription = () => {
        if (location.pathname.includes('/orders')) return 'View and manage all customer orders';
        if (location.pathname.includes('/overview')) return 'Monitor your store performance and statistics';
        return 'Manage your e-commerce store';
    };

    return (
        <div className="admin-panel">
            <div className="side-panel">
                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '700' }}>Admin Panel</h2>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>E-commerce Store</p>
                </div>
                <ul>
                    <li>
                        <NavLink to={'/admin/overview'}>
                            <span style={{ marginRight: '0.5rem' }}>📊</span>
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/admin/orders'}>
                            <span style={{ marginRight: '0.5rem' }}>📦</span>
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="main-panel">
                <div className="main-panel-header">
                    <h1>{getPageTitle()}</h1>
                    <p>{getPageDescription()}</p>
                </div>
                <Outlet />
            </div>
        </div>
    );
}