import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfViTilfriskner = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Me todella toivumme
                    </h2>

                    <p>
                        Kun tämän tien päässä huomaamme, ettemme enää kykene,
                        huumeiden avulla tai ilman niitä, toimimaan inhimillisesti, silloin
                        kohtaamme kaikki saman pulmatilanteen. Mitä voimme enää
                        tehdä? Ainoaksi vaihtoehdoksi näyttää jäävän, että jatkamme
                        kuten parhaiten osaamme katkeraan loppuun asti; vankilaan,
                        laitokseen tai kuolemaan – tai löydämme uuden tavan
                        elää. Entisinä aikoina on hyvin harvoilla addikteilla ollut tätä
                        jälkimmäistä vaihtoehtoa. Nykyään addiktit ovat onnekkaampia.
                        Ensimmäistä kertaa koko ihmiskunnan historian aikana on
                        meidän kaikkien ulottuvilla yksinkertainen menetelmä, joka on
                        osoittautunut monille addikteille toimivaksi. Tämän yksinkertaisen
                        hengellisen – ei uskonnollisen – ohjelman nimi on Nimettömät
                        Narkomaanit.<br /><br />
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
