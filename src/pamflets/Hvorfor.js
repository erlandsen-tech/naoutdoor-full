import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvorfor = () => {
    return (
        <div>
            <div class="pam" id="pam-hvorfor">
                <div class="box-pam mb-4">
                    <h2>
                        Hvorfor er vi her?
                </h2>
                    <p>
                        Før vi kom til NAs fellesskap kunne vi ikke mestre våre egne liv. Vi kunne ikke leve og nyte livet slik andre mennesker gjør. Vi måtte ha noe annet, og vi trodde vi hadde funnet det i rusmidler. Vi satte rusbruken foran velferden til våre familier, våre koner, våre ektemenn og våre barn. Vi måtte ha rusmidler for enhver pris. Vi gjorde mange mennesker stor skade, men mest av alt skadet vi oss selv. Ved vår manglende evne til å godta personlig ansvar, skapte vi faktisk våre egne problemer. Vi syntes ute av stand til å møte livet på dets egne vilkår.<br /><br />
                    De fleste av oss innså at vi i vår avhengighet langsomt begikk selvmord, men avhengighet er en så slu fiende av livet at vi hadde mistet evnen til å gjøre noe med det. Mange av oss endte i fengsel, eller søkte medisinsk, religiøs eller psykiatrisk hjelp. Ingen av disse metodene var tilstrekkelige for oss. Vår sykdom dukket alltid opp igjen eller fortsatte å utvikle seg, inntil vi i desperasjon søkte hjelp hos hverandre i Anonyme Narkomane.<br />
                    Etter at vi kom til NA innså vi at vi var syke mennesker. Vi led av en sykdom som ikke har noen kjent helbredelse. Den kan imidlertid stanses på et visst stadium og tilfriskning er da mulig.<br /><br />
                    </p>
                </div>
            </div>

            <div class="row footer fixed-bottom mb-3">
                <div class="col">
                    <Link to="/pamflets/hva">
                        <img class="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hva" />
                    </Link>
                </div>
                <div class="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div class="col">
                    <Link to="/pamflets/hvordan">
                        <img class="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvordan det virker" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvorfor;