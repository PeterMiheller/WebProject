import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/StoreMainPage'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import './App.css'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <>
            {/* Navbar se afișează doar dacă utilizatorul e autentificat */}
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
                    path="/products"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Products />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Cart />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default App