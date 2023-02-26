import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Wer ist süchtig?
                    </h2>

                    <p>
                        Die meisten von uns brauchen über diese Frage nicht
                        nachzudenken. Wir wissen es! Unser ganzes Leben und Denken
                        drehte sich um Drogen in irgendeiner Form, sie zu beschaffen, zu
                        verwenden und Mittel und Wege zu finden, um mehr, immer mehr
                        zu bekommen. Wir brauchten sie zum Leben und lebten, um
                        sie zu gebrauchen. Einfach ausgedrückt, Süchtige sind Frauen
                        oder Männer, deren Leben von Drogen beherrscht wird. Wir sind
                        Menschen, die sich in der Gewalt einer ständig fortschreitenden
                        Krankheit befinden, deren Ende immer das Gleiche ist:
                        Gefängnis, Anstalt oder Tod.
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