import {
    Link
} from "react-router-dom";
import { mapsSelector } from './js/main';
const Meetings = () => {
    return (
        <div id="landing-img">
            <div class="container-1">
                <div class="logotext-img ">
                    <Link to="/">
                        <img src="/img/logotext.png" class="img-fluid " alt="Ski & Recovery" />
                    </Link>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="text-mote col text-center">
                        <h6>Speaker møten:<br />
                        Onsdag: Kl 19.00<br />
                        Torsdag: Kl 19.00<br />
                        Fredag: Kl 19.00<br />
                        Lørdag: Kl 19.00</h6>
                    </div>

                    <div class="maps-link col">
                        <img id="maps" class="img-thumb mx-auto d-block mt-4" onClick={mapsSelector} src="/img/maps-icon.png" />
                    </div>
                </div>


                <div class="row justify-content-center mt-3" >
                    <div class="text-mote col text-center mt-4">
                        <h6>Bare for idag: Knettsetra</h6>
                    </div>

                    <div class="maps-link col" id="col-mote">
                        <Link to="/slope">
                            <img src="img/snowboard.png" class="img-thumb mx-auto d-block mt-4" alt="" />
                        </Link>
                    </div>
                </div>
                <Link to="/">
                    <img class="mx-auto d-block footer fixed-bottom mb-2" src="img/left-arrow.png" id="back" alt="Back" />
                </Link>
            </div>
            <script src="js/main.js"></script>
        </div>
    );
}
export default Meetings;