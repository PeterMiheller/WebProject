import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        phone: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        cardName: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validări de bază
        if (!paymentMethod) {
            alert("Te rog selectează o metodă de plată!");
            return;
        }

        const requiredFields = ['fullName', 'address', 'city', 'phone'];

        // Pentru plata cu cardul, adaugă și câmpurile cardului
        if (paymentMethod === 'card') {
            requiredFields.push('cardNumber', 'expiry', 'cvv', 'cardName');
        }

        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            alert("Te rog completează toate câmpurile obligatorii!");
            return;
        }

        // Simulează procesarea plății
        setIsSubmitted(true);
        setTimeout(() => {
            alert("Comanda a fost plasată cu succes!");
            navigate("/storeMainPage");
        }, 150);
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2 className="checkout-title">Finalizare Comandă</h2>
                <p className="checkout-subtitle">Completează informațiile pentru a plasa comanda</p>
            </div>

            <form className="checkout-form" onSubmit={handleSubmit}>
                {/* Informații de livrare */}
                <div className="section">
                    <h3 className="section-title">
                        <span className="section-icon">🚛</span>
                        Informații de Livrare
                    </h3>

                    <div className="form-group">
                        <label>Nume complet *</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Introduceți numele complet"
                        />
                    </div>

                    <div className="form-group">
                        <label>Număr de telefon *</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="0721 123 456"
                        />
                    </div>

                    <div className="form-group">
                        <label>Adresă completă *</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Strada, numărul, apartamentul"
                        />
                    </div>

                    <div className="form-group">
                        <label>Orașul *</label>
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Introduceți orașul"
                        />
                    </div>
                </div>

                {/* Metoda de plată */}
                <div className="section">
                    <h3 className="section-title">
                        <span className="section-icon">💳</span>
                        Metodă de Plată
                    </h3>

                    <div className="payment-options">
                        <label className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="payment-radio"
                            />
                            <div className="payment-content">
                                <div className="payment-icon">💵</div>
                                <div className="payment-info">
                                    <h4>Plată la Livrare (Cash)</h4>
                                    <p>Plătești când primești comanda</p>
                                </div>
                            </div>
                        </label>

                        <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="payment-radio"
                            />
                            <div className="payment-content">
                                <div className="payment-icon">💳</div>
                                <div className="payment-info">
                                    <h4>Card de Credit/Debit</h4>
                                    <p>Visa, MasterCard</p>
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Detalii card - se afișează doar dacă este selectată plata cu cardul */}
                    {paymentMethod === 'card' && (
                        <div className="card-details">
                            <h4 className="card-details-title">Detalii Card</h4>

                            <div className="form-group">
                                <label>Numărul cardului *</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    className="form-control"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    maxLength="19"
                                />
                            </div>

                            <div className="form-group">
                                <label>Numele de pe card *</label>
                                <input
                                    type="text"
                                    name="cardName"
                                    className="form-control"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    placeholder="Numele exact de pe card"
                                />
                            </div>

                            <div className="form-row d-flex justify-content-between">
                                <div className="form-group w-45">
                                    <label>Data expirării *</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        className="form-control"
                                        placeholder="MM/AA"
                                        value={formData.expiry}
                                        onChange={handleChange}
                                        maxLength="5"
                                    />
                                </div>
                                <div className="form-group w-45">
                                    <label>CVV *</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        className="form-control"
                                        placeholder="123"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        maxLength="4"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className={`btn btn-primary btn-block mt-4 ${isSubmitted ? 'processing' : ''}`}
                    disabled={isSubmitted}
                >
                    {isSubmitted ? (
                        <>
                            <span className="loading-spinner"></span>
                            Se procesează...
                        </>
                    ) : (
                        'Plasează Comanda'
                    )}
                </button>
            </form>
        </div>
    );
};

export default Payment;