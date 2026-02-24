import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';

const CartItem = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Show the total cart amount of the plants.
    const totalCost = cartItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(updateQuantity({ name: item.name, quantity: 0 }));
        }
    };

    const handleDelete = (name) => {
        dispatch(removeItem(name));
    };

    const handleCheckout = () => {
        alert("Checkout feature coming soon!");
    };

    const handleContinueShopping = () => {
        navigate('/products');
    };

    return (
        <div className="cart-page">
            <h1 className="cart-title">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem" }}>
                    <h2>Your cart is empty. Continue shopping!</h2>
                    <button className="continue-btn" style={{ marginTop: "1rem" }} onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item-card">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>Unit Price: ${item.cost.toFixed(2)}</p>
                                </div>

                                <div className="cart-item-controls">
                                    <button className="qty-btn" onClick={() => handleDecrement(item)}>-</button>
                                    <span style={{ fontSize: "1.2rem", fontWeight: "bold", padding: '0 10px' }}>{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
                                </div>

                                <div style={{ flex: 1, textAlign: "right", marginRight: "1rem" }}>
                                    <p className="item-subtotal">Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
                                </div>

                                <button className="delete-btn" onClick={() => handleDelete(item.name)}>Delete</button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
                        <div className="cart-actions">
                            <button className="continue-btn" onClick={handleContinueShopping}>Continue Shopping</button>
                            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;
