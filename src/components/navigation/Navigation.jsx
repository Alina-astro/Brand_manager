import "./navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <h1>ALINA POPOVA</h1>
            <div className="icons">
            <a href="mailto:someone@example.com" className="icon">
                <img src="#" alt="Email" />
            </a>
            <a href="https://wa.me/1234567890" className="icon">
                <img src="#" alt="WhatsApp" />
            </a>
            <a href="https://t.me/username" className="icon">
                <img src="telegram-icon.png" alt="Telegram" />
            </a>
            </div>
        </div>
    );
}

export default Navigation;