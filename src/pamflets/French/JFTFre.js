import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Juste pour aujourd’hui
                    </h2>

                    <p>
                        Dites-vous :<br /><br />

                        <strong>JUSTE POUR AUJOURD’HUI </strong> mes pensées se concentreront sur mon rétablissement; je vivrai et profiterai de la vie sans consommer. <br /><br />

                        <strong>JUSTE POUR AUJOURD’HUI </strong> j’aurai foi en quelqu’un de NA qui croit en moi et veut m’aider à me rétablir.<br /><br />

                        <strong>JUSTE POUR AUJOURD’HUI </strong> j’aurai un programme et j’essaierai de le suivre de mon mieux.<br /><br />

                        <strong>JUSTE POUR AUJOURD’HUI </strong>, grâce à NA, j’essaierai d’envisager ma vie sous un jour meilleur. <br /><br />

                        <strong>JUSTE POUR AUJOURD’HUI </strong> je serai sans crainte, mes pensées se concentreront sur mes nouveaux amis, des gens qui ne consomment plus et qui ont trouvé un nouveau mode de vie. Aussi longtemps que je suivrai cette voie, je n’aurai rien à craindre.<br /><br />
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