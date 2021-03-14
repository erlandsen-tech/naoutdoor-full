import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfViTilfriskner = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Vi tilfriskner
                </h2>
                    <p>
                        Når vi til slutt finner ut at vi ikke lenger kan fungere som mennesker, hverken med eller uten rusmidler, står vi alle ansikt til ansikt med følgende dilemma. Hva mer kan gjøres? Det ser ut til å være disse alternativene, enten å fortsette så godt vi kan til den bitre slutt – fengsler, institusjoner eller død  – eller finne en ny måte å leve på. I tidligere tider fikk veldig få rusavhengige dette siste valget. De som er rusavhengige i dag er heldigere. For første gang i menneskehetens historie har en enkel måte bevist seg selv i livet til mange rusavhengige, og den er tilgjengelig for oss alle. Det er et enkelt åndelig, ikke-religiøst program, kjent som Anonyme Narkomane. <br /><br /><br />
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
