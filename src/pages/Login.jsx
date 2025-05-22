import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login({ setIsAuthenticated, isAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        // Aici poți adăuga validări reale
        console.log('Email:', email)
        console.log('Password:', password)
        setIsAuthenticated(true)
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/storeMainPage')
        }
    }, [isAuthenticated, navigate])

    return (
        <div className="login-container">
            <h2>Autentificare</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        placeholder="exemplu@email.com"
                    />
                </div>
                <div className="form-group">
                    <label>Parolă:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className="login-button">
                    Autentifică-te
                </button>
            </form>
            <p className="create-account">
                Nu ai cont? <a href="/register">Creează unul</a>
            </p>
        </div>
    )
}

export default Login
