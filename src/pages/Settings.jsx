import { useState } from 'react';
import './Settings.css';  // CSS extern


function Settings() {

    const [settings, setSettings] = useState({
        notifications: true,
        newsletter: true,
        modifyPersonalData: false,
        password: ''
    });

    const [savedMessage, setSavedMessage] = useState('');

    const handleSettingChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSaveSettings = () => {
        setSavedMessage('Setările au fost salvate cu succes!');
        setTimeout(() => setSavedMessage(''), 3000);
    };

    const handleLogout = () => {
        if (window.confirm('Ești sigur că vrei să te deconectezi?')) {
            window.location.href = 'http://localhost:5173/'; // redirecționează la pagina de login
        }
    };

    const passwordChange = async () => {
        const currentUserEmail = localStorage.getItem('email');
        console.log(currentUserEmail);
        console.log(settings.password);

        const response = await fetch('http://localhost:8080/api/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email:currentUserEmail,
                password: settings.password
            })
        });

        const data = await response.json();
        if (response.ok) {
            setSavedMessage('Parola a fost schimbată cu succes!');
        } else {
            setSavedMessage(data.message || 'Eroare la schimbarea parolei');
        }
    }

    return (
        <div className="settings-container">
            <h1 className="settings-title">Setări</h1>

            <div className="settings-box">

                <div className="settings-item">
                    <div className="settings-text">
                        <h3>Notificări</h3>
                        <p>Primește notificări despre comenzi și oferte</p>
                    </div>
                    <label className="settings-switch">
                        <input
                            type="checkbox"
                            checked={settings.notifications}
                            onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                        />
                    </label>
                </div>

                <div className="settings-item">
                    <div className="settings-text">
                        <h3>Newsletter</h3>
                        <p>Abonează-te la newsletter pentru ultimele noutăți</p>
                    </div>
                    <label className="settings-switch">
                        <input
                            type="checkbox"
                            checked={settings.newsletter}
                            onChange={(e) => handleSettingChange('newsletter', e.target.checked)}
                        />
                    </label>
                </div>

                <div className="settings-item">
                    <div className="settings-text">
                        <h3>Modifică date personale</h3>
                        <p>Bifează dacă dorești să modifici parola</p>
                    </div>
                    <label className="settings-switch">
                        <input
                            type="checkbox"
                            checked={settings.modifyPersonalData}
                            onChange={(e) => handleSettingChange('modifyPersonalData', e.target.checked)}
                        />
                    </label>
                </div>

                {settings.modifyPersonalData && (
                    <div className="settings-item">
                        <div className="settings-text">
                            <h3>Parolă nouă</h3>
                        </div>
                        <input
                            type="password"
                            placeholder="Introdu parola nouă"
                            value={settings.password}
                            onChange={(e) => handleSettingChange('password', e.target.value)}
                            className="settings-input"
                        />
                        <button className="btn btn-secondary" onClick={()=>passwordChange()}>Schimbă parola</button>
                    </div>
                )}

                <div className="settings-buttons">
                    <button className="btn btn-primary" onClick={handleSaveSettings}>Salvează Setările</button>
                    <button className="btn btn-secondary" onClick={() => setSettings({
                        notifications: true,
                        newsletter: true,
                        modifyPersonalData: false,
                        password: ''
                    })}>Resetează la setările inițiale</button>
                </div>

                <button className="btn btn-danger logout-btn" onClick={handleLogout}>Deconectează-te</button>

                {savedMessage && (
                    <div className="saved-message">
                        ✅ {savedMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Settings;
