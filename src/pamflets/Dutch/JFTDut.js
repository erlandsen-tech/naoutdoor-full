import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Alleen voor vandaag
                    </h2>
                    <p>
                        Zeg tegen jezelf:<br /><br />

                        <strong>ALLEEN VOOR VANDAAG</strong> zal ik met mijn gedachten bij mijn herstel zijn, zal ik leven en van het leven genieten zonder drugs te gebruiken.<br /><br />

                        <strong>ALLEEN VOOR VANDAAG</strong> zal ik vertrouwen hebben in iemand in NA die in mij gelooft en mij wil helpen in mijn herstel.<br /><br />

                        <strong>ALLEEN VOOR VANDAAG</strong> zal ik een programma hebben. Ik zal proberen het te volgen naar mijn beste kunnen.<br /><br />

                        <strong>ALLEEN VOOR VANDAAG</strong> zal ik met hulp van NA proberen een beter zicht op mijn leven te krijgen.<br /><br />

                        <strong>ALLEEN VOOR VANDAAG</strong> zal ik niet bang zijn, mijn gedachten zullen bij mijn nieuwe contacten zijn, mensen die niet gebruiken en een nieuwe manier van leven hebben gevonden. Zolang ik volgens die manier leef, heb ik niets te vrezen.<br /><br /><br />
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