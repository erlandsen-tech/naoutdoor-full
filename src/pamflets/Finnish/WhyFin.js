import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvorfor = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam mb-4">
                    <h2>
                        Miksi olemme täällä?
                    </h2>

                    <p>
                        Ennen NA:n toveriseuraan tuloamme emme kyenneet hallitsemaan elämäämme. 
                        Emme kyenneet elämään ja nauttimaan elämästä muiden ihmisten tapaan. 
                        Meillä oli oltava jotain erilaista ja luulimme löytäneemme sen huumeista. 
                        Asetimme huumeiden käyttämisen perheidemme, puolisomme ja lastemme hyvinvoinnin 
                        edelle. Meidän oli saatava huumeita mihin hintaan hyvänsä. Vahingoitimme monia 
                        ihmisiä, mutta kaikkein eniten vahingoitimme itseämme. Koska emme kyenneet 
                        ottamaan vastuuta omista asioistamme, aiheutimme todellisuudessa itse omat 
                        ongelmamme. Olimme ilmeisen kyvyttömiä kohtaamaan elämän sen omilla ehdoilla.<br /><br />

                        Useimmat meistä huomasivat tekevänsä addiktiossaan hidasta itsemurhaa, 
                        mutta addiktio on niin ovela elämän vihollinen, että olimme menettäneet 
                        kyvyn tehdä asialle mitään. Monet meistä päätyivät vankilaan tai etsivät 
                        apua lääketieteestä, uskonnosta ja psykiatriasta. Mikään näistä menetelmistä 
                        ei riittänyt meille. Sairautemme puhkesi aina uudestaan tai paheni jatkuvasti, 
                        kunnes epätoivoisina haimme apua toinen toisiltamme Nimettömissä Narkomaaneissa.<br />
                    
                        Tultuamme NA:han huomasimme olevamme sairaita ihmisiä. Kärsimme sairaudesta, johon 
                        ei ole mitään tunnettua parannuskeinoa. Sen eteneminen voidaan kuitenkin pysäyttää, 
                        ja silloin toipuminen on mahdollista.<br /><br />
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