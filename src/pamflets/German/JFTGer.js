import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const JFTGer = () => {
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

            <div>
                <Link to="/German/PamGer">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default JFTGer;