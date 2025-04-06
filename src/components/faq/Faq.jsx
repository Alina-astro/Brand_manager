import { useState } from 'react';
import "./faq.css";
import arrowDown from "../../assets/icons/arrow-down.png";
import arrowUp from "../../assets/icons/arrow-up.png";

const faqData = [
    { question: 'Как проходит консультация?', answer: 'Как проходит консультация?' },
    { question: 'Вы работаете только с клиентами из бизнеса или и с частными лицами?', answer: 'Вы работаете только с клиентами из бизнеса или и с частными лицами?' },
    { question: 'Могу ли я получить презентацию с рекомендациями после консультации?', answer: 'Могу ли я получить презентацию с рекомендациями после консультации?' },
    { question: 'Предлагаете ли вы помощь в создании имиджа для команды компании?', answer: 'Предлагаете ли вы помощь в создании имиджа для команды компании?' },
    { question: 'Какие документы или информация понадобятся перед началом работы?', answer: 'Какие документы или информация понадобятся перед началом работы?' },
  ];

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <section className="faq">
            <h2>Популярные вопросы</h2>
            <div className="faq-box">
            {faqData.map((item, index) => (
                    <div
                    key={index}
                    className={`faq-item ${openIndex === index ? 'open' : ''}`}
                    onClick={() => toggle(index)}
                    >
                    <div className="faq-question">
                        <span className="block-desc">{item.question}</span>
                        <span className="arrow">
                            <img src={openIndex === index ? arrowUp : arrowDown} alt="arrow" />
                        </span>
                    </div>
                    <div className="faq-answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;