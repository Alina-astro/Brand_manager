import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-content">
                <p className="welcome-text">Создание и развитие вашего уникального имиджа — это искусство, которое я помогу вам освоить.
                </p>
                <p className="welcome-text">Сочетая опыт в люксовой индустрии и глубокое понимание персонального брендинга, я помогу вам уверенно представлять себя в деловой и социальной среде, учитывая все тонкости культурных различий и делового этикета.
                </p>
                <Link to="/offerings" className="button">
                    Подробнее об услугах <img src="/icons/arrow-right.png" className="arrow" alt="arrow right" />
                </Link>
            </div>
        </section>
    );
}

export default Welcome;