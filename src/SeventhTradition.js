import React from 'react';
import { Link } from 'react-router-dom';
const SeventhTradition = () => {
    return (
        <div class="container">
            <div class="container-fluid footer fixed-bottom mb-5">
                <div class="row">
                    <div class="col">
                        <img class="mx-auto d-block" src="/img/vipps.png" />
                    </div>
                </div>
                <div class="row mt-5 justify-content-center mb-5">
                    <div class="col fw-bold form-text text-center">
                       Konto: <br/>313223231231 
                    </div>
                    <div class="col form-text fw-bold  text-center mb-5">
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