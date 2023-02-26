import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfBareIDag = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Bare for i dag
                </h2>
                    <p>
                        Sig til deg selv:<br /><br />

                        <strong>BARE FOR IDAG</strong> vil mine tanker dreje sig om min bedring, at leve og nyde livet uden brug af stoffer.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg have tillid til nogen i NA, der tror på mig, og som ønsker at hjælpe mig i min bedring..<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg have et program. Jeg vil prøve at følge det, så godt jeg kan.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ved hjælp af NA forsøge at få et bedre syn på mit liv.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ikke være bange. Mine tanker vil være hos mine nye fæller, mennesker, som ikke bruger, og som har fundet en ny måde at leve på. Så længe jeg følger denne vej, har jeg intet at frygte.<br /><br /><br />
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
export default PamfBareIDag;