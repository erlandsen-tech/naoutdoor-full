import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const JFTFre = () => {
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

            <div>
                <Link to="/French/PamFre">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default JFTFre;