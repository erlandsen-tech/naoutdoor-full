import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Hvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Hvem er rusavhengig?
                    </h2>
                    
                    <p>
                        
                        Useimpien meistä ei tarvitse ajatella kahdesti tätä kysymystä. ME TIEDÄMME KYLLÄ! Huumeet muodossa tai toisessa olivat koko elämämme ja ajattelumme keskipiste. Hankimme huumeita, käytimme niitä ja koetimme keksiä, miten saisimme niitä lisää. Elimme käyttääksemme ja käytimme elääksemme. Yksinkertaisesti sanottuna addikti on mies tai nainen, jonka elämää huumeet hallitsevat. Olemme ihmisiä, jotka kärsivät parantumattomasta ja pahenevasta sairaudesta, jonka lopputulos on aina sama: vankilat, laitokset ja kuolema.
                    
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