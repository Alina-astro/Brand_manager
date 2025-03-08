import "./products.css";
import productBranding from "../../assets/images/products/product-1.jpg";
import productEtiquette from "../../assets/images/products/product-2.jpg";
import productBusinessEvent from "../../assets/images/products/product-3.jpg";
import productElegance from "../../assets/images/products/product-4.jpg";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Персональный брендинг и позиционирование",
    image: productBranding,
    description: "Как создать сильный и запоминающийся личный бренд? Мы исследуем ваши ценности, уникальные черты и цели, чтобы разработать стратегию позиционирования, подчеркивающую вашу индивидуальность и профессиональные сильные стороны.",
  },
  {
    id: 2,
    title: "Деловой этикет и культурные особенности",
    image: productEtiquette,
    description: "В этих сессиях вы освоите основы делового этикета и понимание культурных различий в профессиональной коммуникации. Я помогу вам научиться правильно подавать себя, чтобы оставлять положительное впечатление и строить эффективные связи в международной среде.",
  },
  {
    id: 3,
    title: "Подготовка к международным бизнес-мероприятиям",
    image: productBusinessEvent,
    description: "Собираетесь на важную международную конференцию? Я помогу вам продумать ваш образ и подготовить все детали, чтобы вы уверенно представляли себя и свою компанию.",
  },
  {
    id: 4,
    title: "Основы элегантности и вкуса",
    image: productElegance,
    description: "Эти консультации помогут вам создать элегантный и утонченный образ. Мы рассмотрим основы стиля, чтобы вы выглядели безупречно и чувствовали уверенность.",
  },
];

const Products = () => {

const [activeCard, setActiveCard] = useState(null);

const openDesc = (id) => {
    if (window.innerWidth > 1024) return; // Блокируем клик на десктопе
    setActiveCard(prev => (prev === id ? null : id)); // Закрываем при повторном клике
  };

  return (
    <section className="products">
      <h2>Ваш путь к совершенству</h2>
      <div className="products-grid">
  {services.map((service) => (
    <div className="product-card" key={service.id}>
      <img src={service.image} alt={service.title} className="product-image" />
      <div 
        className={`product-overlay ${activeCard === service.id ? "active" : ""}`} 
        onClick={() => openDesc(service.id)}
      >
        <p className="product-title">{service.title}</p>
        <p className="product-description">{service.description}</p>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Products;