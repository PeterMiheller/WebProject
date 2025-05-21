import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuthenticated, isAuthenticated }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        // aici poți adăuga validări reale
        console.log('Email:', email)
        console.log('Password:', password)
        setIsAuthenticated(true)
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products')
        }
    }, [isAuthenticated, navigate])

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Parolă: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Autentifică-te</button>
            </form>
        </div>
    )
}

export default Login
