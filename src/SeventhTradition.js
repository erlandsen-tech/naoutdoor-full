import React from 'react';
import { Link } from 'react-router-dom';
const SeventhTradition = () => {
    return (
        <div id="landing-img">
            <div class="container-1">
                <div class="logotext-img">
                    <Link to="/">
                        <img src="/img/logotext.png" class="img-fluid" alt="Ski & Recovery" />
                    </Link>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <img class="mx-auto d-block" src="/img/vipps.png" />
                    </div>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col fw-bold form-text text-center">
                       Konto: <br/>313223231231 
                    </div>
                    <div class="col form-text fw-bold  text-center">
                        Iban: <br/>
                        NO12-12312312311 
                    </div>
                </div>
            </div>
            <Link to="/">
                <img class="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>
        </div>
    )
};
export default SeventhTradition;