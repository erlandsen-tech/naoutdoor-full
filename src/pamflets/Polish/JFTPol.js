import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Wła śnie dzisiaj
                    </h2>

                    <p>
                        Powiedz sobie:<br /><br />

                        <i>Właśnie dzisiaj</i> moje myśli skupi ą się na zdrowieniu, życiu i cieszeniu się życiem bez za żywania narkotyków.<br /><br />

                        <i>Właśnie dzisiaj</i> zaufam komuś z NA, kto wierzy we mnie i chce pomóc mi w zdrowieniu.<br /><br />

                        <i>Właśnie dzisiaj</i> poddam się Programowi NA, który będę starać się wprowadzać w życie, najlepiej jak potrafię. <br /><br />

                        <i>Właśnie dzisiaj</i> poprzez NA będę starać się mieć szersze spojrzenie na swoje życie.<br /><br />

                        <i>Właśnie dzisiaj</i> nie będę mieć obaw, będę myśleć o moich nowych znajomych, ludziach, którzy nie zażywają i którzy znaleźli nową drogę
                        życiową. Dopóki idę tą drogą, nie mam się czego obawiać.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/12tradisjoner">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="NAs 12 Tradisjoner" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/vitilfriskner">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Vi Tilfriskner" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfBareForIDag;