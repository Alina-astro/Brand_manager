import "./about.css";

const About = () => {
    return (
      <section className="about">
        <h2 className="about-title">Обо мне</h2>
        <div className="about-content">
          <div className="about-image-container">
          <img src="/images/welcome/about-photo.jpg" alt="Алина Попова" className="about-image" />
          </div>
          <div className="about-text">
            <div className="about-mission">
                <p>
                Моя миссия — создать для вас гармоничный, уверенный и запоминающийся образ, отражающий ваши уникальные черты и профессиональные цели. 
                </p>
                <p>
                Мой подход основан на индивидуальности, знании мировых трендов и опыте работы с международными брендами.
                </p>
            </div>
            <div className="about-career">
                <p>
                Меня зовут Алина Попова, я консультант по имиджу и личному бренду с более чем 10-летним опытом работы. 
                </p>
                <p>Получив образование в области Luxury and Fashion Brand Management в университете Боккони, я строила карьеру в люксовом сегменте в международных компаниях, таких как The Luxury Collection и Four Seasons.
                </p>
            </div>
          </div>
        </div>
        <div className="block-desc">
        Моя цель — помочь вам раскрыть свой потенциал через продуманный имидж и уверенное позиционирование.
        </div>
      </section>
    );
  };
  
  export default About;