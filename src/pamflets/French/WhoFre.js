import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Qui est dépendant ou dépendante?
                    </h2>
                    <p>
                        La plupart d’entre nous ne se posent pas deux fois la question:
                        <i>nous le savons</i> ! Notre vie entière et toutes nos pensées étaient
                        centrées sur la drogue, sous une forme ou une autre: s’en
                        procurer, en consommer et chercher les moyens pour en obtenir
                        davantage. Nous consommions pour vivre et vivions pour
                        consommer. Un dépendant est tout simplement un homme ou
                        une femme dont la vie est dominée par la drogue. Nous sommes
                        des personnes sous l’emprise d’une maladie continuelle et
                        progressive qui finissent toujours de la même manière: en
                        prison, à l’hôpital ou à la morgue.
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