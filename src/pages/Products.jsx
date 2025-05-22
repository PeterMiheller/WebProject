function Products() {
    const products = [
        { id: 1, name: "Laptop Gaming", price: "2.999 lei" },
        { id: 2, name: "Smartphone", price: "1.499 lei" },
        { id: 3, name: "Headphones", price: "299 lei" },
        { id: 4, name: "Smartwatch", price: "799 lei" },
        { id: 5, name: "Tablet", price: "1.199 lei" },
        { id: 6, name: "Camera", price: "2.299 lei" },
    ];

    return (
        <div className="products-container">
            <h2>Produsele Noastre</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button className="add-to-cart-btn">Adaugă în Coș</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
