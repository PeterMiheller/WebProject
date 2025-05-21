import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Login</Link> |
            <Link to="/products">Produse</Link> |
            <Link to="/cart">Coș</Link>
        </nav>
    )
}

export default Navbar
