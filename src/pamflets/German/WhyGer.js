import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvorfor = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam mb-4">
                    <h2>
                        Warum sind wir hier? 
                    </h2>
                    <p>
                        Bevor wir zu NA kamen konnten wir unser eigenes Leben nicht
                        meistern. Wir konnten nicht so leben wie andere Menschen,
                        konnten unser Leben nicht genießen. Wir mussten etwas anderes
                        haben und glaubten, es in den Drogen gefunden zu haben. Wir
                        gaben Drogen den Vorrang vor dem Wohl unserer Familien,
                        unserer Frauen, Männer und Kinder. Wir mussten Drogen
                        haben – um jeden Preis. Wir fügten vielen Menschen großen
                        Schaden zu, am meisten jedoch schadeten wir uns selbst. Durch
                        unsere Unfähigkeit, persönliche Verantwortung zu übernehmen,
                        schufen wir letztendlich unsere eigenen Probleme. Wir waren
                        anscheinend unfähig, uns dem Leben und der Wirklichkeit zu
                        stellen..<br /><br />
                    
                        Die meisten von uns merkten, dass wir mit unserer Sucht
                        langsam Selbstmord begingen; Sucht ist jedoch ein so tückischer
                        Feind des Lebens, dass wir die Macht verloren hatten, etwas
                        dagegen zu tun. Viele von uns landeten im Gefängnis oder
                        suchten Hilfe durch Medizin, Religion und Psychiatrie. Keiner
                        dieser Wege erwies sich als ausreichend. Unsere Krankheit
                        brach immer wieder durch oder schritt weiter voran, bis wir
                        in Verzweiflung Hilfe durch Selbsthilfe suchten: in Narcotics
                        Anonymous.<br />
                        
                        Nachdem wir zu NA gekommen waren, begriffen wir, dass wir
                        kranke Menschen waren. Wir litten an einer Krankheit, für die es
                        keine Heilung gibt. Sie kann jedoch an einem gewissen Punkt
                        zum Stillstand gebracht werden, und dann ist Genesung möglich.<br /><br />
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