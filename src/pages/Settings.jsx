import { useState } from 'react';
import './Settings.css';  // CSS extern

function Settings() {
    const [settings, setSettings] = useState({
        notifications: true,
        newsletter: false,
        language: 'ro',
        theme: 'light'
    });

    const handleSettingChange = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

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
                        <span className="switch-label">Activat</span>
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
                        <span className="switch-label">Activat</span>
                        <input
                            type="checkbox"
                            checked={settings.newsletter}
                            onChange={(e) => handleSettingChange('newsletter', e.target.checked)}
                        />
                    </label>
                </div>

                <div className="settings-item">
                    <h3>Limba</h3>
                    <select
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                        className="settings-select"
                    >
                        <option value="ro">Română</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>

                <div className="settings-item">
                    <h3>Temă</h3>
                    <select
                        value={settings.theme}
                        onChange={(e) => handleSettingChange('theme', e.target.value)}
                        className="settings-select"
                    >
                        <option value="light">Luminos</option>
                        <option value="dark">Întunecat</option>
                        <option value="auto">Automat</option>
                    </select>
                </div>

                <div className="settings-buttons">
                    <button className="btn btn-primary">Salvează Setările</button>
                    <button className="btn btn-secondary">Resetează</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
