import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamSwe = () => {
    return (
        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/Swedish/WhoSwe" className="btn btn-dark">
                    Vem är en Beroende?
                    </Link>
                <Link to="/Swedish/whatSwe" className="btn btn-dark">
                    Vad är Anonyma Narkomaners program?
                    </Link>
                <Link to="/Swedish/WhySwe" className="btn btn-dark">
                    Varför är vi här?
                    </Link>
                <Link to="/Swedish/HowSwe" className="btn btn-dark">
                    Hur det fungerar
                    </Link>
                <Link to="/Swedish/TradSwe" className="btn btn-dark">
                    Anonyma Narkomaners tolv traditioner
                    </Link>
                <Link to="/Swedish/JFTSwe" className="btn btn-dark">
                    Bara för idag
                    </Link>
                <Link to="/Swedish/WDRSwe" className="btn btn-dark">
                    Vi Tillfrisknar!
                    </Link>
            </div>
            <div>
                <Link to="/readings">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="../img/left-arrow.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
}
export default PamSwe;