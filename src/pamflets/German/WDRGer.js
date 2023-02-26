import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfViTilfriskner = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Wir genesen
                    </h2>

                    <p>
                        Wenn wir schließlich am Ende dieses Weges feststellen,
                        dass wir weder mit noch ohne Drogen als Menschen
                        funktionieren können, stehen wir alle vor demselben Dilemma.
                        Was bleibt uns übrig? Es scheint diese Alternativen zu geben:
                        wir können entweder, so gut es geht, bis zum bitteren Ende –
                        Gefängnis, Anstalt oder Tod – weitermachen, oder wir finden
                        einen neuen Lebensweg. Früher hatten nur sehr wenige Süchtige
                        diese zweite Möglichkeit. Diejenigen, die heutzutage süchtig
                        sind, haben es da besser. Zum ersten Mal in der gesamten
                        Menschheitsgeschichte hat sich ein einfacher Weg im Leben
                        vieler Süchtiger bewährt. Er ist für uns alle gangbar. Er ist ein
                        einfaches spirituelles – nicht religiöses – Programm, bekannt als
                        Narcotics Anonymous.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/bareforidag">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Bare For I Dag" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/hvem">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvem" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfViTilfriskner;
