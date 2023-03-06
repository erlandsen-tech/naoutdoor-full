import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WhoDut = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Wie is verslaafd?
                    </h2>

                    <p>
                        De meesten van ons hoeven niet tweemaal na te denken over
                        deze vraag. WIJ WETEN HET! Ons hele leven en denken draaide
                        om drugs, in welke vorm dan ook: het verkrijgen, gebruiken en
                        het vinden van manieren om aan meer te komen. Wij leefden
                        om te gebruiken en gebruikten om te leven. Een verslaafde
                        is gewoon een man of vrouw van wie het leven door drugs
                        wordt beheerst. Wij zijn mensen in de greep van een steeds
                        voortschrijdende ziekte voor wie het einde altijd hetzelfde is:
                        gevangenissen, inrichtingen, en de dood.
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
export default WhoDut;