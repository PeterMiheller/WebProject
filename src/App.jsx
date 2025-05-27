import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products'
import StoreMainPage from "./pages/StoreMainPage.jsx";
import Cart from './pages/Cart'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './pages/Register'
import Payment from "./pages/Payment.jsx";
import { useState } from 'react'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [cartItems, setCartItems] = useState([])
    return (
        <div className="App">
            {/* Navbar doar dacă ești logat */}
            {isAuthenticated && <Navbar />}

            <Routes>
                <Route
                    path="/"
                    element={
                        <Login
                            setIsAuthenticated={setIsAuthenticated}
                            isAuthenticated={isAuthenticated}
                        />
                    }
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/storeMainPage"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <StoreMainPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Products cartItems={cartItems} setCartItems={setCartItems}/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Cart/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/payment" element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Payment />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Settings />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
