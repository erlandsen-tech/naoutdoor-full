import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Nur für heute
                    </h2>
                    <p>
                        Sage dir selbst:<br /><br />

                        <i>Nur für heute</i> werden meine Gedanken bei der Genesung sein, beim Leben und bei der Freude am Leben ohne Drogen.<br /><br />

                        <i>Nur für heute</i> werde ich einem Mitglied von NA vertrauen, das an mich glaubt und mir in meiner Genesung helfen will.<br /><br />

                        <i>Nur für heute</i> werde ich ein Programm haben. Ich werde versuchen, ihm so gut wie möglich zu folgen.<br /><br />

                        <i>Nur für heute</i> werde ich durch NA versuchen, ein besseres Verhältnis zu meinem Leben zu gewinnen.<br /><br />

                        <i>Nur für heute</i> werde ich nicht ängstlich sein, meine Gedanken
                        werden bei meinen neuen Bekannten sein, bei Leuten,
                        die keine Drogen nehmen und die einen neuen
                        Lebensweg gefunden haben. Solange ich diesem Weg
                        folge, brauche ich nichts zu befürchten.<br /><br /><br />
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