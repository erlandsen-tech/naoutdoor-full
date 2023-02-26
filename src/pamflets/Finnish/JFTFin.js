import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Juuri Tänään
                    </h2>
                    <p>
                        Sano itsellesi:<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> ajatukseni ovat toipumisessani, elän ja nautin elämästä ilman huumeiden käyttöä.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> minulla on luottamus johonkuhun NA:ssa, joka uskoo minuun ja haluaa auttaa minua toipumisessani.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> minulla on ohjelma. Yritän noudattaa sitä parhaan kykyni mukaan.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> pyrin NA:n kautta saamaan paremman näkökulman elämääni.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> olen peloton, ajatukseni ovat uusien ystävieni kanssa, ihmisten, jotka eivät käytä ja jotka ovat löytäneet uuden elämäntavan. Niin kauan kuin seuraan tätä tietä, minulla ei ole mitään pelättävää.<br /><br /><br />
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