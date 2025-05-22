import React from "react";
import "./Products.css";

function Products() {
    const products = [
        { id: 1, name: "Laptop Gaming", price: "2.999 lei", image: "/api/placeholder/300/200" },
        { id: 2, name: "Smartphone", price: "1.499 lei", image: "/api/placeholder/300/200" },
        { id: 3, name: "Headphones", price: "299 lei", image: "/api/placeholder/300/200" },
        { id: 4, name: "Smartwatch", price: "799 lei", image: "/api/placeholder/300/200" },
        { id: 5, name: "Tablet", price: "1.199 lei", image: "/api/placeholder/300/200" },
        { id: 6, name: "Camera", price: "2.299 lei", image: "/api/placeholder/300/200" },
    ];

    return (
        <div className="products-container">
            <h1>Produsele Noastre</h1>

            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                            <button className="add-to-cart-btn">Adaugă în Coș</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
