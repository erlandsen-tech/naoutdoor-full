import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamDut = () => {
    return (

        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/Dutch/WhoDut" className="btn btn-dark">
                    Wie is verslaafd?
                    </Link>
                <Link to="/Dutch/WhatDut" className="btn btn-dark">
                    Wat is het Programma van NA-Anonieme Verslaafden?
                    </Link>
                <Link to="/Dutch/WhyDut" className="btn btn-dark">
                    Waarom zijn wij hier?
                    </Link>
                <Link to="/Dutch/HowDut" className="btn btn-dark">
                    Hoe het werkt
                    </Link>
                <Link to="/Dutch/TradDut" className="btn btn-dark">
                    De Twaalf Tradities van NA
                    </Link>
                <Link to="/Dutch/JFTDut" className="btn btn-dark">
                    Alleen voor vandaag
                    </Link>
                <Link to="/Dutch/WDRDut" className="btn btn-dark">
                    We herstellen echt
                    </Link>
            </div>
            <div>
                <Link to="/Readings">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="../img/left-arrow.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
}
export default PamDut;