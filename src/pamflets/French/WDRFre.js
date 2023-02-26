import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfViTilfriskner = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Le rétablissement existe vraiment
                    </h2>
                    <p>
                    Quand, finalement, nous nous apercevons enfin de notre
                    incapacité à fonctionner comme un être humain, avec ou sans
                    drogues, nous sommes tous confrontés au même dilemme.
                    Que nous reste-il à faire ? Il semble qu’il n’y ait qu’une
                    alternative : continuer du mieux que l’on peut jusqu’au triste
                    aboutissement (la prison, l’hôpital ou la morgue) ou trouver une
                    autre façon de vivre. Par le passé, très peu de dépendants ont
                    pu choisir cette dernière possibilité. Aujourd’hui, ils ont plus
                    de chance. Pour la première fois dans l’histoire de l’humanité,
                    une méthode simple s’est révélée efficace dans la vie de
                    nombreux dépendants. Elle est accessible à tous. Il s’agit d’un
                    simple programme spirituel et non pas religieux qui s’appelle
                    Narcotiques Anonymes.<br /><br /><br />
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
