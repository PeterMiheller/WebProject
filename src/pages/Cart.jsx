// import React, { useState } from "react";
import "./Cart.css";

function Cart({cartItems,setCartItems}) {
    // const [cartItems, setCartItems] = useState([
    //     { id: 1, name: "Laptop Gaming", price: 2999, quantity: 1 },
    //     { id: 2, name: "Smartphone", price: 1499, quantity: 2 },
    // ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        }
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Coșul de Cumpărături</h1>
            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Coșul tău este gol</p>
                    <button className="btn btn-primary">Continuă Cumpărăturile</button>
                </div>
            ) : (
                <div className="cart-box">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div>
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">{item.price} lei</p>
                            </div>
                            <div className="quantity-control">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="qty-btn"
                                    aria-label={`Scade cantitatea pentru ${item.name}`}
                                >
                                    -
                                </button>
                                <span className="qty-number">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="qty-btn"
                                    aria-label={`Crește cantitatea pentru ${item.name}`}
                                >
                                    +
                                </button>
                            </div>
                            <p className="item-total">{item.price * item.quantity} lei</p>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <span className="total-label">Total:</span>
                        <span className="total-amount">{total} lei</span>
                    </div>
                    <button className="btn btn-success">Finalizează Comanda</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
