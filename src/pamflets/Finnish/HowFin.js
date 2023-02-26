import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvordan = () => {
    return (
        <div>
        <div className="pam" id="pam-hvordan">
            <div className="box-pam">
                <h2>
                    Miten se toimii
                </h2>

                <p>
                    Jos haluat sen, mitä meillä on tarjottavana, ja jos haluat ponnistella sen hyväksi, silloin olet valmis ottamaan tietyt askeleet. Tässä ovat ne periaatteet, jotka ovat mahdollistaneet toipumisemme:<br/><br/>
                    
                    1.  Myönsimme, että olimme voimattomia addiktiomme suhteen ja että elämämme oli käynyt hallitsemattomaksi.<br/><br/>
                    
                    2.  Opimme uskomaan, että jokin itseämme suurempi voima voisi palauttaa mielemme terveyden.<br/><br/>
                    
                    3.  Teimme päätöksen luovuttaa tahtomme ja elämämme Jumalan huomaan, <i>sellaisena kuin hänet käsitimme.</i><br/><br/>
                    
                    4.  Teimme perusteellisen ja pelottoman moraalisen itsetutkistelun.<br/><br/>
                    
                    5.  Myönsimme väärien tekojemme todellisen luonteen Jumalalle, itsellemme ja jollekin toiselle ihmiselle.<br/><br/>
                    
                    6.  Olimme täysin valmiit antamaan Jumalan poistaa kaikki nämä luonteemme heikkoudet.<br/><br/>
                    
                    7.  Nöyrästi pyysimme häntä poistamaan vajavuutemme.<br/><br/>
                    
                    8.  Teimme luettelon kaikista vahingoittamistamme ihmisistä ja meissä syntyi halu hyvittää heitä kaikkia.<br/><br/>
                    
                    9.  Hyvitimme henkilökohtaisesti näitä ihmisiä milloin vain mahdollista, mikäli emme niin tehdessämme vahingoittaneet heitä tai muita.<br/><br/>
                    
                    10.  Jatkoimme itsetutkistelua ja kun olimme väärässä, myönsimme sen heti.<br/><br/>
                    
                    11.  Pyrimme rukouksen ja mietiskelyn avulla syventämään tietoista yhteyttämme Jumalaan, <i>sellaisena kuin hänet käsitimme</i>, rukoillen vain tietoa siitä, mikä on hänen tahtonsa meidän suhteemme ja voimaa sen toteuttamiseen.<br/><br/>
                    
                    12.  Koettuamme hengellisen heräämisen näiden askelten tuloksena yritimme saattaa tämän sanoman addikteille ja toteuttaa näitä periaatteita kaikissa toimissamme.<br/><br/>
                    
                    Tämä kuulostaa melkoiselta urakalta emmekä pysty suoriutumaan siitä käden käänteessä. 
                    Addiktiommekaan ei syntynyt yhdessä päivässä, joten muista – hiljaa hyvä tulee.<br/><br/>
                    
                    On yksi asia, joka enemmän kuin mikään muu voi tehdä tyhjäksi toipumisemme: välinpitämätön 
                    tai suvaitsematon asenne hengellisiin periaatteisiin. Tarvitsemme välttämättä niistä kolmea: 
                    rehellisyyttä, ennakkoluulottomuutta ja halukkuutta. Niiden avulla pääsemme jo hyvän matkaa eteenpäin.<br/><br/>
                    
                    Pidämme suhtautumistamme addiktiosairauteen täysin realistisena, koska yhden addiktin apu 
                    toiselle on hoidolliselta arvoltaan ylivertainen. Menetelmämme on myös käytännöllinen, 
                    sillä addiktia voi parhaiten ymmärtää ja auttaa toinen addikti. Uskomme, että mitä pikemmin 
                    kohtaamme ongelmamme yhteiskunnassa, arkielämässä, sitä pikemmin meistä tulee yhteisömme kelvollisia, vastuuntuntoisia ja hyödyllisiä jäseniä.<br/><br/>
                    
                    Ainoa tapa olla palaamatta huumekierteeseen on olla ottamatta ensimmäistä annosta. Jos 
                    olet kaltaisemme, tiedät, että yksi annos on liikaa ja tuhat liian vähän. Tähdennämme tätä, 
                    sillä tiedämme, että kun käytämme mitä tahansa huumeita tai kun korvaamme yhden huumeen toisella, 
                    päästämme addiktiomme taas valloilleen.<br/><br/>
                    
                    Monet addiktit ovat retkahtaneet ajateltuaan, että alkoholi eroaa muista huumeista. 
                    Ennen NA:han tuloamme moni meistä piti alkoholia eri asiana, mutta meillä ei ole varaa 
                    sekaannukseen tässä asiassa. Alkoholi on huume. Olemme addiktiosairaudesta kärsiviä ihmisiä, 
                    ja mikäli haluamme toipua meidän on pysyttävä erossa kaikista huumeista.<br/><br/><br/>
                
                </p>
            </div>
        </div>
            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hvorfor">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvorfor" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/12tradisjoner">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="NAs 12 Tradisjoner" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvordan;