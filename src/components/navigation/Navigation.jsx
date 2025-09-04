import "./navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <div className="nav-menu"></div>
            <h1>ALINA POPOVA</h1>
            <div className="nav-icons">
            <a href="mailto:someone@example.com" className="icon">
                <img src="/icons/nav-email-base.png" alt="Email" />
            </a>
            <a href="https://wa.me/1234567890" className="icon">
                <img src="/icons/nav-whatsapp-base.png" alt="WhatsApp" />
            </a>
            <a href="https://t.me/username" className="icon">
                <img src="/icons/nav-telegram-base.png" alt="Telegram" />
            </a>
            </div>
        </div>
    );
}

export default Navigation;