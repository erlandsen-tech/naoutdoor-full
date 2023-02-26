import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvorfor = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam mb-4">
                    <h2>
                        Waarom zijn wij hier?
                    </h2>

                    <p>
                        Voordat wij bij NA kwamen, konden wij ons eigen leven niet
                        hanteren. Wij konden niet leven en van het leven genieten zoals
                        anderen dat doen. Wij moesten iets anders hebben en dachten
                        dat in drugs gevonden te hebben. Wij plaatsten het gebruik
                        ervan boven het welzijn van onze families, onze vrouw, man
                        en kinderen. Wij moesten koste wat het kost drugs hebben.
                        Wij hebben veel mensen ernstige schade berokkend, maar
                        bovenal hebben wij onszelf geschaad. Door ons onvermogen om
                        persoonlijke verantwoordelijkheden te aanvaarden, creëerden wij
                        in feite onze eigen problemen. Wij leken niet in staat te zijn het
                        leven zoals het is onder ogen te zien.<br /><br />
                        
                        De meesten van ons beseften dat wij met onze verslaving
                        langzaam zelfmoord pleegden, maar verslaving is zo’n sluwe
                        vijand van het leven dat wij de kracht verloren hadden om er
                        iets aan te doen. Velen van ons belandden in de gevangenis
                        of zochten hulp in de geneeskunde, godsdienst of psychiatrie.
                        Geen van deze methoden was voor ons toereikend. Onze
                        ziekte stak altijd de kop weer op of bleef erger worden, tot wij in
                        wanhoop hulp bij elkaar zochten in NA-Anonieme Verslaafden.<br />
                        
                        Na onze komst bij NA realiseerden wij ons dat wij zieke
                        mensen waren. Wij leden aan een ziekte waarvoor geen remedie
                        bekend is. Wel is het mogelijk de ziekte op een gegeven moment
                        te bedwingen en dan is herstel mogelijk.<br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hva">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hva" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/hvordan">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvordan det virker" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvorfor;