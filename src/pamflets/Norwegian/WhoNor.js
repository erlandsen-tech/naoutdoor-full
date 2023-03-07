import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const WhoNor = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>Hvem er rusavhengig?</h2>
                    <p>De fleste av oss behøver ikke tenke to ganger på dette spørsmålet. VI VET! Hele vårt liv og tenkning dreide seg om rusmidler i 
                        en eller annen form. Å få tak i, bruke og finne måter og midler til å skaffe mer. Vi levde for å bruke og brukte for å leve. 
                        Helt enkelt, en rusavhengig er en mann eller kvinne hvis liv er kontrollert av rusmidler. Vi er mennesker i grepet på en vedvarende og 
                        progressiv sykdom som alltid ender på samme måte: fengsler, institusjoner og død.</p>
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
export default WhoNor;