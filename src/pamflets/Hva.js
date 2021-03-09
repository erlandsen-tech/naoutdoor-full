import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvem = () => {
    return (
        <div>
            <div class="pam" id="pam-hva">
                <div class="box-pam">
                    <h2>
                        Hva er Anonyme Narkomanes Program?
                </h2>
                    <p>
                        NA er et fellesskap eller forening av menn og kvinner for hvem rusmidler hadde blitt et hovedproblem. Vi er rusavhengige under tilfriskning som møtes jevnlig for å hjelpe hverandre til å holde oss rusfrie. Dette er et program med total avholdenhet fra alle rusmidler. Det er kun en betingelse for medlemskap, et ønske om å slutte å bruke rusmidler. Vi foreslår at du har et åpent sinn og gir deg selv en sjanse. Vårt program er en samling prinsipper skrevet så enkelt at vi kan følge dem i våre daglige liv. Det viktigste ved dem er at de virker.<br /><br />

                            NA er ikke knyttet til noen andre organisasjoner, vi har ingen inngangspenger eller avgifter, ingen forpliktelser og ingen løfter å gi til noen. Vi er ikke forbundet med noen politisk eller religiøs gruppe, heller ingen myndigheter, og er ikke overvåket på noe tidspunkt. Hvem som helst kan slutte seg til oss uansett alder, rase, seksuell legning, livssyn, religion eller mangel på religion.<br /><br />

                                Vi er ikke interessert i hva eller hvor mye du brukte eller hvem som var dine forbindelser, hva du har gjort tidligere, hvor mye eller lite du har, men kun i hva du vil gjøre med ditt problem, og hvordan vi kan hjelpe. Nykommeren er den viktigste personen på ethvert møte, fordi vi kan bare beholde det vi har ved å gi det videre. Vi har lært av vår gruppeerfaring at de som kommer regelmessig på våre møter holder seg rusfrie. <br /><br /><br />
                    </p>
                </div>
            </div>

            <div class="row footer fixed-bottom mb-3">
                <div class="col">
                    <Link to="/pamflets/hvem">
                        <img class="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvem" />
                    </Link>
                </div>
                <div class="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning"/>
                    </Link>
                </div>
                <div class="col">
                    <Link to="/pamflets/hvorfor">
                        <img class="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvorfor" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvem;