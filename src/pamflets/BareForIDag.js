import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div class="pam" id="pam-bare">
                <div class="box-pam">
                    <h2>
                        Bare for idag
                </h2>
                    <p>
                        Si til deg selv:<br /><br />

                        <strong>BARE FOR IDAG</strong> vil mine tanker være på min tilfriskning, å leve og nyte livet uten bruk av rusmidler.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ha tillit til noen i NA som tror på meg og ønsker å hjelpe meg i min tilfriskning.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ha et program. Jeg vil prøve å følge det etter beste evne.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg gjennom NA prøve å få et bedre syn på livet mitt.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg være uredd, mine tanker vil være på mine nye bekjente, mennesker som ikke bruker og som har funnet en ny måte å leve på. Så lenge jeg følger den veien har jeg ingenting å frykte.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div class="row footer fixed-bottom mb-3">
                <div class="col">
                    <Link to="/pamflets/12tradisjoner">
                        <img class="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="NAs 12 Tradisjoner" />
                    </Link>
                </div>
                <div class="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div class="col">
                    <Link to="/pamflets/vitilfriskner">
                        <img class="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Vi Tilfriskner" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfBareForIDag;