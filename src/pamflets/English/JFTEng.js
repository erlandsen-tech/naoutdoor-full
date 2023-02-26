import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareForIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Just for Today
                    </h2>
                    <p>
                        Tell yourself:<br /><br />

                        <strong>JUST FOR TODAY</strong> my thoughts will be on my recovery, living and enjoying life without the use of drugs.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will have faith in someone in NA who believes in me and wants to help me in my recovery.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will have a program. I will try to follow it to the best of my ability.<br /><br />

                        <strong>JUST FOR TODAY</strong>, through NA, I will try to get a better perspective on my life.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will be unafraid. My thoughts will be on my new associations, people who are not using and who have found a new way of life. So long as I follow that way, I have nothing to fear.<br /><br /><br />
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