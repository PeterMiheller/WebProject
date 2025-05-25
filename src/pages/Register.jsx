import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('masculin')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreeTerms, setAgreeTerms] = useState(false)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        if (!agreeTerms) {
            alert('Trebuie să fii de acord cu termenii și condițiile.')
            return
        }
        if (password !== confirmPassword) {
            alert('Parolele nu coincid.')
            return
        }

        console.log({
            firstName,
            lastName,
            email,
            age,
            gender,
            password
        })

        // În mod real, aici s-ar trimite datele către un backend
        navigate('/')
    }

    return (
        <div className="login-container">
            <h2>Creare cont</h2>
            <form onSubmit={handleRegister} className="login-form">
                <div className="form-group">
                    <label>Nume:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-input"
                        placeholder="Popescu"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Prenume:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input"
                        placeholder="Ion"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        placeholder="exemplu@email.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Vârstă:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-input"
                        placeholder="18"
                    />
                </div>
                <div className="form-group">
                    <label>Gen:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-input"
                    >
                        <option value="masculin">Masculin</option>
                        <option value="feminin">Feminin</option>
                        <option value="altul">Altul</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Parolă:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        placeholder="••••••••"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirmare parolă:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-input"
                        placeholder="••••••••"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                        />{' '}
                        Sunt de acord cu termenii și condițiile.
                    </label>
                </div>
                <button type="submit" className="login-button">
                    Salvează
                </button>
            </form>
            <p className="create-account">
                Ai deja cont? <a href="/">Autentifică-te</a>
            </p>
        </div>
    )
}

export default Register
