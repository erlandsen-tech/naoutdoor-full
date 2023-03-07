import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WDRDan = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Vi kommer i bedring
                    </h2>
                    <p>
                        Når vi ved vejs ende erkender, at vi ikke længere kan fungere
                        som menneske med eller uden stoffer, står vi alle over for det
                        samme dilemma. Hvad er der tilbage at gøre? Der synes at
                        være dette valg: Enten at fortsætte så godt vi kan til den bitre
                        ende – fængsler, institutioner eller død – eller at
                        finde en ny
                        måde at leve på. Tidligere har meget få addicts haft denne
                        anden valgmulighed. De, der er addicterede i dag, er mere
                        heldige. For første gang i menneskehedens samlede historie
                        har en simpel måde vist sig at virke i mange addicts’ liv. Den er
                        tilgængelig for os alle. Det er et enkelt åndeligt – ikke et religiøst
                        – program, kendt som Narcotics Anonymous. <br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link to="/Danish/PamDan">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default WDRDan;
