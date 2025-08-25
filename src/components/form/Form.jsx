import React, { useState } from "react";
import "./form.css";
import formPhoto from "../../assets/images/welcome/feedback-photo.jpg";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Простая валидация
    if (!formData.name.trim()) {
      setStatus("Пожалуйста, введите имя");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("Пожалуйста, введите корректный email");
      return;
    }

    setStatus("Отправка...");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", message: "" });
      setStatus("Заявка успешно отправлена!");
    } catch (error) {
      console.error(error);
      setStatus("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <section className="form-section">
      <h2>Связаться со мной</h2>
      <div className="form-wrapper" style={{ backgroundImage: `url(${formPhoto})` }}>
        <form onSubmit={handleSubmit} className="form-box">
            <input
              type="text"
              name="name"
              placeholder="Ваше Имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Сообщение"
              value={formData.message}
              onChange={handleChange}
            />
          <button type="submit" className="button">
            Записаться на консультацию
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Form;