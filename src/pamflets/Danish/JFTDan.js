import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const JFTDan = () => {
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

            <div>
                <Link to="/Danish/PamDan">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default JFTDan;