import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WDRDut = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        We herstellen echt
                    </h2>

                    <p>
                        Wanneer wij aan het eind van ons Latijn zijn en we ondervinden
                        dat we niet langer als menselijke wezens kunnen functioneren,
                        met of zonder drugs, staan we allemaal voor hetzelfde dilemma.
                        Wat kunnen we nog doen? Er lijkt deze keuze te zijn: óf, zo goed
                        en zo kwaad als we kunnen, doorgaan tot het bittere einde –
                        gevangenissen, inrichtingen, of de dood – óf een nieuwe manier
                        van leven vinden. Vroeger hadden zeer weinig verslaafden
                        deze laatste keuze. Zij die vandaag de dag verslaafd zijn,
                        hebben meer geluk. Voor het eerst in de geschiedenis heeft
                        een eenvoudige manier zich bewezen in het leven van veel
                        verslaafden. Van deze methode kunnen we allemaal gebruik
                        maken. Dit is een eenvoudig spiritueel, niet religieus programma
                        bekend onder de naam Narcotics Anonymous (NA-Anonieme
                        Verslaafden).<br /><br /><br />
                    </p>

                </div>
            </div>

            <div>
                <Link to="/Dutch/PamDut">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default WDRDut;
