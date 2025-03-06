import "./welcome.css";
import arrowRightIcon from '../../assets/icons/arrow-right.png'

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-content">
                <p className="welcome-text">Создание и развитие вашего уникального имиджа — это искусство, которое я помогу вам освоить.
                </p>
                <p className="welcome-text">Сочетая опыт в люксовой индустрии и глубокое понимание персонального брендинга, я помогу вам уверенно представлять себя в деловой и социальной среде, учитывая все тонкости культурных различий и делового этикета.
                </p>
                <a href="#services" className="button">Подробнее об услугах <img src={arrowRightIcon} className="arrow" alt="arrow right" />
                </a>
            </div>
        </section>
    );
}

export default Welcome;