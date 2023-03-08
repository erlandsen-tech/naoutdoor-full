import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamGer = () => {
    return (

        <div className="container">
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/German/WhoGer" className="btn btn-dark">
                    Wer ist süchtig?
                    </Link>
                <Link to="/German/WhatGer" className="btn btn-dark">
                    Was bedeutet das Narcotics Anonymous Programm?
                    </Link>
                <Link to="/German/WhyGer" className="btn btn-dark">
                    Warum sind wir hier?
                    </Link>
                <Link to="/German/HowGer" className="btn btn-dark">
                    Wie es funktioniert
                    </Link>
                <Link to="/German/TradGer" className="btn btn-dark">
                    Die Zwölf Traditionen von NA
                    </Link>
                <Link to="/German/JFTGer" className="btn btn-dark">
                    Nur für heute
                    </Link>
                <Link to="/German/WDRGer" className="btn btn-dark">
                    Wir genesen
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
export default PamGer;