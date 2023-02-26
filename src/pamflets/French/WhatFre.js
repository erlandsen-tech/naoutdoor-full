import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Qu’est-ce que le programme de Narcotiques Anonymes?
                    </h2>
                    <p>
                        NA est une fraternité ou une association à but non lucratif,
                        composée d’hommes et de femmes pour qui la drogue était
                        devenue un problème majeur. Nous sommes des dépendants
                        en rétablissement. Nous nous réunissons régulièrement
                        pour nous entraider à rester abstinents. C’est un programme
                        d’abstinence complète de toute drogue. La seule condition
                        pour devenir membre est le désir d’arrêter de consommer. Nous
                        vous suggérons de garder l’esprit ouvert et de vous donner
                        une chance. Notre programme repose sur des principes écrits
                        si simplement que nous pouvons les appliquer à notre vie
                        quotidienne. L’important, c’est qu’ils donnent des résultats.<br /><br />

                        NA est entièrement autonome; nous ne sommes affiliés à
                        aucun organisme. Nous n’avons pas de frais d’admission ni de
                        cotisations, pas d’engagements à signer ni de promesses à faire
                        à qui que ce soit. Nous ne sommes rattachés à aucun groupe
                        politique ou mouvement religieux. Nous n’avons aucun lien avec
                        la police et ne sommes jamais tenus sous surveillance. N’importe
                        quel dépendant ou dépendante peut se joindre à nous quels que
                        soient son âge, son origine, son identité sexuelle, ses croyances,
                        sa religion ou absence de religion.<br /><br />

                        Nous ne voulons pas savoir ce que vous consommiez, ni
                        en quelle quantité ni qui vous en procurait. Votre passé et les
                        moyens dont vous disposez ne nous intéressent pas. Tout ce qui
                        nous importe, c’est ce que vous désirez faire concernant votre
                        problème et comment nous pouvons vous aider. Les nouveaux et
                        les nouvelles sont les personnes les plus importantes dans nos
                        réunions, car c’est seulement en redonnant aux autres que nous
                        conservons ce qui nous a été donné. Notre expérience collective
                        nous a appris que ceux et celles qui assistent régulièrement à
                        nos réunions demeurent abstinents.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hvem">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvem" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning"/>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/hvorfor">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvorfor" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvem;