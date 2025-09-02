import "./blog.css";

const articles = [
    {
      id: 1,
      title: "Образ для международного мероприятия",
      image: "/images/blog/blog-1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Успешный персональный бренд",
      image: "/images/blog/blog-2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Имидж лидера",
      image: "/images/blog/blog-3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Секреты делового стиля",
      image: "/images/blog/blog-4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Деловой этикет по странам",
      image: "/images/blog/blog-5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Элегантность вне времени",
      image: "/images/blog/blog-6.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Найти свой персональный стиль",
      image: "/images/blog/blog-7.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "Фотосессия для персонального бренда",
      image: "/images/blog/blog-8.jpg",
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
            <a href="#blog" className="button">Читать больше <img src="/icons/arrow-right.png" className="arrow" alt="arrow right" />
                </a>
            </div>
        </section>
    );
}

export default Blog;