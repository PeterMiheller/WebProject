import React, { useState } from "react";
import "./Products.css";

function Products({cartItems, setCartItems}) {
    const [showNotification, setShowNotification] = useState(false);
    const products = [
        { id: 1, name: "Laptop Gaming", price: 2999, image: "/api/placeholder/300/200" },
        { id: 2, name: "Smartphone", price: 1499, image: "/api/placeholder/300/200" },
        { id: 3, name: "Headphones", price: 299, image: "/api/placeholder/300/200" },
        { id: 4, name: "Smartwatch", price: 799, image: "/api/placeholder/300/200" },
        { id: 5, name: "Tablet", price: 1.199, image: "/api/placeholder/300/200" },
        { id: 6, name: "Camera", price: 2.299, image: "/api/placeholder/300/200" },
    ];

    function addToCart(product){
        const { id, name, price } = product;
        console.log(product);
        let quantity;
        if((quantity = cartItems.find(item => item.id === id)?.quantity)){
            setCartItems( cartItems.map(item =>
                item.id === id ? { ...item, quantity: quantity+1 } : item
            ));
        }
        else {
            setCartItems([...cartItems, {id, name, price, quantity: 1}]);
        }

        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    }

    return (
        <div className="products-container">
            <h1>Produsele Noastre</h1>

            {showNotification && (
                <div className="notification">
                    Produs adăugat cu succes în coș!
                </div>
            )}

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price} lei</p>
                            <button onClick={()=>addToCart(product)} className="add-to-cart-btn">Adaugă în Coș</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Products;
