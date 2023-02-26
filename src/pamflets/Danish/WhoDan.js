import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    
                    <h2>
                        Hvem er en addict?
                    </h2>
                    
                    <p>
                        De fleste af os behøver ikke tænke to gange over dette
                        spørgsmål. Vi ved det! Hele vores liv og tankegang var centreret
                        om stoffer i en eller anden form – at skaffe, at bruge og finde
                        måder og metoder til at skaffe mere. Vi levede for at bruge
                        og brugte for at leve. Helt enkelt, en addict er en mand eller
                        kvinde, hvis liv er styret af stoffer. Vi er mennesker, fanget af en
                        vedvarende og fremadskridende sygdom, hvis endeligt altid er
                        det samme: Fængsler, institutioner og død.
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