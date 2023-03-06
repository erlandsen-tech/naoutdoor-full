import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WhoEng = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Who Is an Addict?
                    </h2>
                    <p>
                        Most of us do not have to think twice about this question.
                        We know! Our whole life and thinking was centered in drugs
                        in one form or another—the getting and using and finding
                        ways and means to get more. We lived to use and used
                        to live. Very simply, an addict is a man or woman whose
                        life is controlled by drugs. We are people in the grip of a
                        continuing and progressive illness whose ends are always
                        the same: jails, institutions, and death.
                    </p>
                </div>
            </div>
            <div>
                <Link to="/English/PamEng">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default WhoEng;