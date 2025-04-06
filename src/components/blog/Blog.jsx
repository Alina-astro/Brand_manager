import "./blog.css";
import React, { useState } from "react";
import imgArt1 from "../../assets/images/blog/blog-1.jpg";
import imgArt2 from "../../assets/images/blog/blog-2.jpg";
import imgArt3 from "../../assets/images/blog/blog-3.jpg";
import imgArt4 from "../../assets/images/blog/blog-4.jpg";
import imgArt5 from "../../assets/images/blog/blog-5.jpg";
import imgArt6 from "../../assets/images/blog/blog-6.jpg";
import imgArt7 from "../../assets/images/blog/blog-7.jpg";
import imgArt8 from "../../assets/images/blog/blog-8.jpg";
import arrowRightIcon from '../../assets/icons/arrow-right.png'

const articles = [
    {
      id: 1,
      title: "Образ для международного мероприятия",
      image: imgArt1,
      link: "#",
    },
    {
      id: 2,
      title: "Успешный персональный бренд",
      image: imgArt2,
      link: "#",
    },
    {
      id: 3,
      title: "Имидж лидера",
      image: imgArt3,
      link: "#",
    },
    {
      id: 4,
      title: "Секреты делового стиля",
      image: imgArt4,
      link: "#",
    },
    {
      id: 5,
      title: "Деловой этикет по странам",
      image: imgArt5,
      link: "#",
    },
    {
      id: 6,
      title: "Элегантность вне времени",
      image: imgArt6,
      link: "#",
    },
    {
      id: 7,
      title: "Найти свой персональный стиль",
      image: imgArt7,
      link: "#",
    },
    {
      id: 8,
      title: "Фотосессия для персонального бренда",
      image: imgArt8,
      link: "#",
    },
  ];

function Blog() {
    return (
        <section className="blog">
            <h2>Заметки о стиле и брендинге</h2>
            <div className="block-desc">Советы, вдохновение и интересные истории о стиле, брендах и событиях из мира моды.</div>
            <div className="blog-grid">
              {articles.map((article) => (
                <div className="blog-card" key={article.id}>
                  <img src={article.image} alt={article.title} className="article-image" />
                  <p className="article-title">{article.title}</p>
                </div>
              ))}
            </div>
            <div>
            <a href="#blog" className="button">Читать больше <img src={arrowRightIcon} className="arrow" alt="arrow right" />
                </a>
            </div>
        </section>
    );
}

export default Blog;