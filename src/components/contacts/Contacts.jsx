import "./contacts.css";
import iconWhatsapp from "../../assets/icons/footer-whatsapp.png";
import iconInstagram from "../../assets/icons/footer-instagram.png";
import iconLinkedin from "../../assets/icons/footer-linkedin.png";
import iconTelegram from "../../assets/icons/footer-telegram.png";
import iconEmail from "../../assets/icons/footer-email.png";
import iconLocation from "../../assets/icons/footer-location.png";

export default function Contacts() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">Я на связи</p>
          <div className="footer-icons">
            <a href="https://wa.me/your_number" target="_blank" rel="noreferrer">
              <img src={iconWhatsapp} alt="Whatsapp" />
            </a>
            <a href="https://instagram.com/your_profile" target="_blank" rel="noreferrer">
              <img src={iconInstagram} alt="Instagram" />
            </a>
            <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noreferrer">
              <img src={iconLinkedin} alt="LinkedIn" />
            </a>
            <a href="https://t.me/your_username" target="_blank" rel="noreferrer">
              <img src={iconTelegram} alt="Telegram" />
            </a>
            <a href="mailto:your@email.com">
              <img src={iconEmail} alt="Email" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-title">Личный прием по записи:</p>
          <div className="footer-location">
            <img src={iconLocation} alt="Location" />
            <a
              href="https://maps.app.goo.gl/cXhug7yDGjcP8drA7"
              target="_blank"
              rel="noreferrer"
              className="footer-address"
            >
              Dubai, UAE, лобби Mandarin<br />Oriental Jumeira
            </a>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.595032490076!2d55.24870407543615!3d25.21687597769834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4246e0648775%3A0xc37cde75328351b4!2sMandarin%20Oriental%20Jumeira%2C%20Dubai!5e0!3m2!1sru!2snl!4v1756102498686!5m2!1sru!2snl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Dubai Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      <p className="footer-note">
        © 2025, Alina Popova&nbsp;&nbsp;
        <a href="https://t.me/Alina_IT_developer" target="_blank" rel="noreferrer">Site by Alina Nadtochiy</a>
      </p>
    </footer>
  );
}