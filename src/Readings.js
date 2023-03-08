import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';


const Readings = () => {
    return (
        <div className="container">
            <div>
                <Header />
            </div>
            <div className="container">
                <div className="d-grid gap-3 col-7 mx-auto">
                    <Link to="/ManSpe" className="btn btn-dark">
                        Speaker meeting format
                    </Link>
                    <Link to="/ManJFT" className="btn btn-dark">
                        JFT and SPAD meeting format
                    </Link>
                </div>
                <div className="row row-cols-3 mt-5 mb-5 justify-content-center">
                    <div className="col-2">
                        <Link to="/English/PamEng">
                            <img src="/img/flags/united-kingdom.png" className="mx-auto d-block" alt="UK" />
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/Norwegian/PamNor">
                            <img src="/img/flags/norway.png" className="mx-auto d-block" alt="Norwegian" />
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/Swedish/PamSwe">
                            <img src="/img/flags/sweden.png" className="mx-auto d-block" alt="Swedish" />
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-3 mb-5 justify-content-center">
                        <div className="col-2">
                            <Link to="/English/PamEng">
                                <img src="/img/flags/ireland.png" className="mx-auto d-block" alt="Irish" />
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Danish/PamDan">
                                <img src="/img/flags/denmark.png" className="mx-auto d-block" alt="Danish" />
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Dutch/PamDut">
                                <img src="/img/flags/netherlands.png" className="mx-auto d-block" alt="Netherland" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-3 mb-5 justify-content-center">
                        <div className="col-2">
                            <Link to="/German/PamGer">
                                <img src="/img/flags/germany.png" className="mx-auto d-block" alt="German" />
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/French/PamFre">
                                <img src="/img/flags/france.png" className="mx-auto d-block" alt="French" />
                            </Link>
                        </div>
                        <div className="col-2">
                            <Link to="/Finnish/PamFin">
                                <img src="/img/flags/finland.png" className="mx-auto d-block" alt="Finish" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom footer mt-5">
                <Link to="/">
                    <img className="mx-auto d-block" src="img/left-arrow.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
}
export default Readings;