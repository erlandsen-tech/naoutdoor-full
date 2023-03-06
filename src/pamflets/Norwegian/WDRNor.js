import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WDRNor = () => {
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

            <div>
                <Link to="/Norwegian/PamNor">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default WDRNor;
