import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfViTilfriskner = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        We Do Recover
                    </h2>
                    <p>
                        When at the end of the road we find that we can no longer
                        function as a human being, either with or without drugs, we all
                        face the same dilemma. What is there left to do? There seems
                        to be this alternative: either go on as best we can to the bitter
                        ends—jails, institutions or death—or find a new way to live. In
                        years gone by, very few addicts ever had this last choice.
                        Those who are addicted today are more fortunate. For the first
                        time in man’s entire history, a simple way has been proving
                        itself in the lives of many addicts. It is available to us all. This is
                        a simple spiritual—not religious—program, known as Narcotics
                        Anonymous.<br /><br /><br />
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
