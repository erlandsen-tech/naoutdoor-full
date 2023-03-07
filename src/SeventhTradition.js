import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const SeventhTradition = () => {
    return (
        <div className="container">
            <Header/>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col">
                        <img className="mx-auto d-block" src="/img/pay_with_vipps.png" />
                    </div>
                </div>
                <div className="row  justify-content-center bg-dark mt-5">
                    <div className="col fw-bold form-text text-center mt">
                        <h1 className="" style={{color: "royalblue"}}>
                        Vipps: 520065<br />
                        Konto: 15060727772
                        </h1>
                    </div>
                </div>
                <div className="row  justify-content-center bg-dark mt-5">
                    <div className="col fw-bold form-text text-center mt">
                        <h1 className="" style={{color: "royalblue"}}>
                        For International contributions!
                        Account Name: NA Outdoor<br />
                        DNB SWIFT: DNBANOKKXXX<br />
                        IBAN: NO5215060727772<br/>
                        Anonyme Narkomane Område<br />
                        Øst Service Komite<br />
                        Hummeldalsvegen 1<br />
                        2406 Elverum<br />
                        </h1>
                    </div>
                </div>
            </div>
            <Link to="/">
                <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>
            </div>
    )
};
export default SeventhTradition;