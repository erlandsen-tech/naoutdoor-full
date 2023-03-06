import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamNor = () => {
    return (

        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/Norwegian/WhoNor" className="btn btn-dark">
                    Hvem
                    </Link>
                <Link to="/Norwegian/WhatNor" className="btn btn-dark">
                    Hva
                    </Link>
                <Link to="/Norwegian/WhyNor" className="btn btn-dark">
                    Hvorfor
                    </Link>
                <Link to="/Norwegian/HowNor" className="btn btn-dark">
                    Hvordan det virker
                    </Link>
                <Link to="/Norwegian/TradNor" className="btn btn-dark">
                    NAs 12 Tradisjoner
                    </Link>
                <Link to="/Norwegian/JFTNor" className="btn btn-dark">
                    Bare For I Dag
                    </Link>
                <Link to="/Norwegian/WDRNor" className="btn btn-dark">
                    Vi Tilfriskner
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
export default PamNor;