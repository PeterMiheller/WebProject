import React from "react";
import "./StoreMainPage.css";

function StoreMainPage() {
    return (
        <div className="store-container">
            <div className="store-header">
                <h1>Bine ai venit la Magazinul Nostru!</h1>
                <p>Descoperă cele mai bune produse la prețuri excelente</p>
            </div>

            <div className="store-features">
                <div className="feature-card">
                    <div className="icon icon-blue">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                        </svg>
                    </div>
                    <h3>Produse de Calitate</h3>
                    <p>Oferim doar produse de cea mai înaltă calitate</p>
                </div>

                <div className="feature-card">
                    <div className="icon icon-green">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    </div>
                    <h3>Prețuri Competitive</h3>
                    <p>Cele mai bune prețuri de pe piață</p>
                </div>

                <div className="feature-card">
                    <div className="icon icon-purple">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3>Livrare Rapidă</h3>
                    <p>Livrăm rapid în toată țara</p>
                </div>
            </div>

            <div className="special-offers">
                <h2>Oferte Speciale</h2>
                <p>Nu rata ofertele noastre exclusive!</p>
                <button>Vezi Ofertele</button>
            </div>
        </div>
    );
}

export default StoreMainPage;
