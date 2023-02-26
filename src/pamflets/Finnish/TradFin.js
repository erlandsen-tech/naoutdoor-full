import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Pamf12Trad = () => {
    return (
        <div>

            <div className="pam" id="pam-trad">
                <div className="box-pam">
                    <h2>

                        NA:n kaksitoista perinnettä

                    </h2>
                    <p>

                        Vain pysymällä valppaina säilytämme sen, mitä meillä on. Samoin kuin yksilön vapaus saa alkunsa kahdestatoista askeleesta, ryhmän vapaus kumpuaa perinteistämme.<br />

                        Niin kauan kuin meitä yhdistävät siteet ovat hajottavia voimia vahvemmat, kaikki on hyvin.<br /><br />
                    
                        1.  Yhteisen hyvinvointimme tulisi olla ensi sijalla; NA:n yhtenäisyys on henkilökohtaisen toipumisen edellytys.<br /><br />

                        2.  Ryhmämme tarkoitusta varten on olemassa vain yksi perusarvovalta: rakastava Jumala sellaisena kuin hän saattaa ilmaista itsensä ryhmäomatunnossamme. Johtajamme ovat vain uskottuja palvelijoita; he eivät hallitse.<br /><br />

                        3.  Jäsenyyden ainoa edellytys on halu lopettaa käyttäminen.<br /><br />

                        4.  Jokaisen ryhmän tulisi olla itsenäinen, paitsi toisia ryhmiä tai koko NA:ta koskevissa asioissa.<br /><br />

                        5.  Jokaisella ryhmällä on vain yksi päätarkoitus – saattaa sanomaa vielä kärsivälle addiktille.<br /><br />

                        6.  NA-ryhmän ei tulisi milloinkaan ryhtyä takaajaksi tai rahoittajaksi eikä lainata NA:n nimeä millekään rinnakkaiselle järjestölle, hoitolaitokselle eikä ulkopuoliselle yritykselle, etteivät raha-asioita, omaisuutta ja arvovaltaa koskevat pulmat vieroittaisi meitä päätarkoituksestamme.<br /><br />

                        7.  Jokaisen NA-ryhmän tulisi olla täysin omavarainen ja torjua ulkopuoliset avustukset.<br /><br />

                        8.  Nimettömät Narkomaanit -toveriseuran tulisi aina säilyä ei-ammatillisena, mutta palvelukeskuksemme voivat palkata erikoistyöntekijöitä.<br /><br />

                        9.  NA:ta sellaisenaan ei saisi koskaan organisoida, mutta voimme muodostaa palveluelimiä tai toimikuntia, jotka ovat välittömästi vastuussa niille, joita palvelevat.<br /><br />

                        10.  Nimettömät Narkomaanit -toveriseuralla ei ole mielipidettä ulkopuolisista asioista; tästä syystä NA:n nimen ei pitäisi milloinkaan tulla vedetyksi julkisiin kiistoihin.<br /><br />

                        11.  Julkinen suhdetoimintamme perustuu pikemminkin vetovoimaan kuin mainontaan; meidän tulee aina säilyttää henkilökohtainen nimettömyytemme kaikissa tiedotusvälineissä.<br /><br />

                        12.  Nimettömyys on kaikkien perinteidemme hengellinen perusta ja se muistuttaa meitä aina siitä, että meidän on asetettava periaatteet henkilökohtaisten seikkojen edelle.<br /><br />

                        Näiden perinteiden ymmärtäminen tapahtuu hitaasti ajan myötä. Saamme tietoa puhuessamme NA:laisten kanssa ja käydessämme eri ryhmissä. Tavallisesti vasta kun alamme toimia palvelutehtävissä joku huomauttaa, että ”NA:n yhtenäisyys on henkilökohtaisen toipumisen edellytys”, ja että yhtenäisyys riippuu siitä, miten hyvin noudatamme perinteitämme. NA:n kahdestatoista perinteestä ei voida tinkiä. Niiden avulla toveriseuramme pysyy elävänä ja vapaana.<br /><br />

                        Seuraamalla näitä suuntaviivoja suhteissamme muihin ihmisiin ja koko yhteiskuntaan vältämme monet ongelmat. Tämä ei merkitse sitä, että perinteemme raivaavat tieltä kaikki ongelmat. Meidän on edelleen kohdattava vaikeudet sitä mukaa kuin niitä syntyy: viestintävaikeudet, erimielisyydet, sisäiset riidat sekä hankaluudet toveriseuran ulkopuolisten ihmisten ja ryhmien kanssa. Noudattaessamme näitä periaatteita vältämme kuitenkin osan näistä sudenkuopista.<br /><br />

                        Monet ongelmista ovat samanlaisia kuin ne, joita edeltäjillämme oli vastassaan. Perinteet syntyivät heidän kovien kokemustensa kautta, ja oma kokemuksemme on osoittanut, että nämä periaatteet pätevät tänään aivan yhtä hyvin kuin silloinkin. Perinteemme suojelevat meitä niiltä sisäisiltä ja ulkoisilta voimilta, jotka voisivat tuhota meidät. Perinteemme yhdistävät meidät. Ne toimivat vain, jos ymmärrämme ne ja sovellamme niitä.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hvordan">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvordan det virker" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/bareforidag">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Bare for i dag" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Pamf12Trad;