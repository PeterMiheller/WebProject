function ProductCard({ name, price }) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p>{price} RON</p>
            <button>Adaugă în coș</button>
        </div>
    )
}

export default ProductCard
