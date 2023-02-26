import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from './Header';


const Readings = () => {
    return (
        <div className="container">
            <Header />
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/inledning-Speaker" className="btn btn-dark">
                    Speaker meeting manual
                    </Link>
                <Link to="/inledning-JFT" className="btn btn-dark">
                    Just For Today meeting manual
                    </Link>
            </div>
            <div className="container footer fixed-bottom mb-5">
                <div className="row row-cols-3 mb-5 justify-content-center">
                <div className="col-3">
                        <Link to="/Pamflets/English">
                            <img src="/img/flags/united-kingdom.png" className="mx-auto d-block" alt="7 Tradisjon" />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/Pamflets/Norwegian">
                            <img src="/img/flags/norway.png" className="mx-auto d-block" alt="Pamfletter" />
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/meetings">
                            <img src="/img/conference.png" className="mx-auto d-block" alt="Møten" />
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-4 justify-content-center">
                        <div className="col-3">
                            <Link to="/slope">
                                <img src="/img/snowboard.png" className="mx-auto d-block" alt="Løypekart" />
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/contact">
                                <img src="/img/mail.png" className="mx-auto d-block" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Readings;