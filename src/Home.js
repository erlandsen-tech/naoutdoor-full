import React from 'react';
import {
    Link
} from "react-router-dom";




const Home = () => {
    return (
        <div class="container">
            <div class="container footer fixed-bottom mb-5">
                <div class="row row-cols-4 mb-5">
                    <div class="col-3">
                        <Link to="/registrer">
                            <img src="/img/register.png" class="mx-auto d-block" alt="Registrering" />
                        </Link>
                    </div>

                    <div class="col-3">
                        <Link to="/seventhtradition">
                            <img src="/img/donation.png" class="mx-auto d-block" alt="7 Tradisjon" />
                        </Link>
                    </div>

                    <div class="col-3">
                        <Link to="/meetings">
                            <img src="/img/conference.png" class="mx-auto d-block" alt="Møten" />
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link to="/pamflets">
                            <img src="/img/magazine.png" class="mx-auto d-block" alt="Pamfletter" />
                        </Link>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row row-cols-3">
                        <div class="col-3">
                            <Link to="/slope">
                                <img src="/img/snowboard.png" class="mx-auto d-block" alt="Løypekart" />
                            </Link>
                        </div>

                        <div class="col-3">
                            <Link to="/contact">
                                <img src="/img/mail.png" class="mx-auto d-block" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Home;