import React from "react";
import offerings from "./offerings.json";
import "./Offerings.css";

function Offerings() {
  return (
    <main className="offerings-container">
      <h1 className="offerings-title">Ваш путь к совершенству</h1>
      <div className="offerings-grid">
        {offerings.map((item, index) => (
          <section key={index} className={`offering-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="offering-image"><img src={item.image} alt={item.title} /></div>
            <div className="offering-content">
              <h2 className="offering-heading">{item.title}</h2>
              <div className="offering-section">
                <h3>Для кого эта услуга?</h3>
                <ul>
                  {item.audience.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
              <div className="offering-section">
                <h3>Что вы получите?</h3>
                <ul>
                  {item.benefits.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
              <div className="offering-section">
              <h3>Как проходит консультация?</h3>
                <ul>
                    {item.format.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Offerings;