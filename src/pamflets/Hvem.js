import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
    return (
        <div>
            <div class="pam" id="pam-hvem">
                <div class="box-pam">
                    <h2>Hvem er rusavhengig?</h2>
                    <p>De fleste av oss behøver ikke tenke to ganger på dette spørsmålet. VI VET! Hele vårt liv og tenkning dreide seg om rusmidler i en eller annen form. Å få tak i, bruke og finne måter og midler til å skaffe mer. Vi levde for å bruke og brukte for å leve. Helt enkelt, en rusavhengig er en mann eller kvinne hvis liv er kontrollert av rusmidler. Vi er mennesker i grepet på en vedvarende og progressiv sykdom som alltid ender på samme måte: fengsler, institusjoner og død.</p>
                </div>
            </div>
            <div class="row footer fixed-bottom mb-3">
                <div class="col">
                    <Link to="/pamflets/vitilfriskner">
                        <img class="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Vi tilfriskner" />
                    </Link>
                </div>
                <div class="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div class="col">
                    <Link to="/pamflets/hva">
                        <img class="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hva" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Hvem;