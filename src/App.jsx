import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
    const cartItems = useSelector((state) => state.cart.items);
    // Calculate total items
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <Link to="/" className="nav-brand">
                        <h2>🌿 Paradise Nursery</h2>
                    </Link>
                    <div className="nav-links">
                        <Link to="/products">Plants</Link>
                        <Link to="/cart" className="cart-icon-container">
                            <svg
                                className="cart-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                            {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
                        </Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/cart" element={<CartItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
