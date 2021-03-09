import React from 'react';
import {
    Link
} from "react-router-dom";

const Home = () => {
    return (
        <div id="landing-img">
            <div class="container-1">
                <div class="logotext-img">
                    <Link to="/">
                        <img src="/img/logotext.png" class="img-fluid" alt="Ski & Recovery" />
                    </Link>
                </div>
            </div>
            <div class="container-2">

                <div class="icon-1" id="col">
                    <Link to="/registrer">
                        <img src="/img/register.png" class="img-responsive" alt="Registrering" />
                    </Link>
                </div>

                <div class="icon2" id="col">
                    <Link to="/seventhtradition">
                        <img src="/img/donation.png" class="img-responsive" alt="7 Tradisjon" />
                    </Link>
                </div>

                <div class="icon3" id="col">
                    <Link to="/meetings">
                        <img src="/img/conference.png" class="img-responsive" alt="Møten" />
                    </Link>
                </div>

            </div>

            <div class="container-2" id="index-con-2">

                <div class="icon-4" id="col">
                    <Link to="/pamflets">
                        <img src="/img/magazine.png" class="img-responsive" alt="Pamfletter" />
                    </Link>
                </div>

                <div class="icon-5" id="col">
                    <Link to="/slope">
                        <img src="/img/snowboard.png" class="img-responsive" alt="Løypekart" />
                    </Link>
                </div>

                <div class="icon-6" id="col">
                    <Link to="/contact">
                        <img src="/img/mail.png" class="img-responsive" alt="" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
export default Home;