// import React, { useState } from "react";
import "./Cart.css";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const currentUser = localStorage.getItem('email');
    useEffect(() => {
        
        const fetchCart = async () => {
            const response = await fetch(`http://localhost:8080/cart/cart-items/${currentUser}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            console.log(data);
            setCartItems(data);
        };

        fetchCart();
    }, [currentUser]);

    const handleClick = () => {
        navigate("/products");
    }

    const handleCheckout = () => {
        navigate("/payment");
    }

    const addQuantity = (productId,quantity) => {
        const productToCart = async () => {
            const response = await fetch('http://localhost:8080/cart/cart-items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: currentUser,
                    productId: productId,
                    quantity: quantity
                })
            });
            const data = await response.json();
            console.log(data.message);

            const refreshed = await fetch(`http://localhost:8080/cart/cart-items/${currentUser}`);
            const updatedItems = await refreshed.json();
            setCartItems(updatedItems);
        }
        productToCart();
    };
    const substractQuantity = (productId,quantity) => {
        const productToCart = async () => {
            const response = await fetch('http://localhost:8080/cart/cart-items', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: currentUser,
                    productId: productId,
                    quantity: quantity
                })
            });
            const data = await response.json();
            console.log(data.message);

            const refreshed = await fetch(`http://localhost:8080/cart/cart-items/${currentUser}`);
            const updatedItems = await refreshed.json();
            setCartItems(updatedItems);
        }
        productToCart();
    };

    const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Coșul de Cumpărături</h1>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Coșul tău este gol</p>
                    <button className="btn btn-primary" onClick={handleClick}>Continuă Cumpărăturile</button>
                </div>
            ) : (
                <div className="cart-box">
                    {cartItems.map(item => (
                        <div key={item.product.name} className="cart-item">
                            <div>
                                <h3 className="item-name">{item.product.name}</h3>
                                <p className="item-price">{item.product.price} lei</p>
                            </div>
                            <div className="quantity-control">
                                <button
                                    onClick={() => substractQuantity(item.product.id,item.quantity-1)}
                                    className="qty-btn"
                                    aria-label={`Scade cantitatea pentru ${item.name}`}
                                >
                                    -
                                </button>
                                <span className="qty-number">{item.quantity}</span>
                                <button
                                    onClick={() => addQuantity(item.product.id,item.quantity+1)}
                                    className="qty-btn"
                                    aria-label={`Crește cantitatea pentru ${item.product.name}`}
                                >
                                    +
                                </button>
                            </div>
                            <p className="item-total">{item.product.price * item.quantity} lei</p>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <span className="total-label">Total:</span>
                        <span className="total-amount">{total} lei</span>
                    </div>
                    <button className="btn btn-success" onClick={handleCheckout}>Finalizează Comanda</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
