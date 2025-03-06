import "./navigation.css";
import emailIconBase from '../../assets/icons/nav-email-base.png';
import whatsappIconBase from '../../assets/icons/nav-whatsapp-base.png';
import telegramIconBase from '../../assets/icons/nav-telegram-base.png';

function Navigation() {
    return (
        <div className="navigation">
            <div className="nav-menu"></div>
            <h1>ALINA POPOVA</h1>
            <div className="nav-icons">
            <a href="mailto:someone@example.com" className="icon emailIcon">
                <img src={emailIconBase} alt="Email" />
            </a>
            <a href="https://wa.me/1234567890" className="icon whatsappIcon">
                <img src={whatsappIconBase} alt="WhatsApp" />
            </a>
            <a href="https://t.me/username" className="icon telegramIcon">
                <img src={telegramIconBase} alt="Telegram" />
            </a>
            </div>
        </div>
    );
}

export default Navigation;