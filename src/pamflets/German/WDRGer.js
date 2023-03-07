import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WDRGer = () => {
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

            <div>
                <Link to="/German/PamGer">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default WDRGer;
