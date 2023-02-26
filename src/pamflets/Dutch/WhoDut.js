import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
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
            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/vitilfriskner">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Vi tilfriskner" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/hva">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hva" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Hvem;