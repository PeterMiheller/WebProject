import ProductCard from '../components/ProductCard'

function Products() {
    const produse = [
        { id: 1, name: 'Laptop ASUS', price: 3200 },
        { id: 2, name: 'Telefon Samsung', price: 2700 }
    ]

    return (
        <div>
            <h2>Produsele noastre</h2>
            {produse.map(prod => (
                <ProductCard key={prod.id} name={prod.name} price={prod.price} />
            ))}
        </div>
    )
}

export default Products
