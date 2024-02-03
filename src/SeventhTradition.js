import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const SeventhTradition = () => {
    return (
        <div className="container">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col">
                        <img className="mx-auto d-block" src="/img/pay_with_vipps.png"/>
                    </div>
                </div>
                <div className="row  justify-content-center bg-dark mt-1">
                    <h6 className="col fw-bold text-center" style={{color: "royalblue"}}>
                        Vipps: 520065<br/>
                        Konto: 15060727772
                    </h6>
                </div>
                <div className="row  justify-content-center bg-dark mt-1">
                    <div className="col text-center mt-1">
                        <div className="" style={{color: "royalblue"}}>
                            <h3 style={{color: "royalblue"}}>
                                For International contributions! <br/>
                            </h3>
                            Account Name: NA Outdoor<br/>
                            DNB SWIFT: DNBANOKKXXX<br/>
                            IBAN: NO5215060727772<br/>
                            Anonyme Narkomane<br/>
                            Område Øst<br/>
                            Service Komite<br/>
                            Hummeldalsvegen 1<br/>
                            2406 Elverum<br/>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="mt-5"
                  style={{position: "fixed", top: 100}}
            >
                <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back"
                     alt="Back"/>
            </Link>
        </div>
    )
};
export default SeventhTradition;