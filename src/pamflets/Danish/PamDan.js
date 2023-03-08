import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamDan = () => {
    return (

        <div className="container">
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/Danish/WhoDan" className="btn btn-dark">
                    Hvem er en addict?
                    </Link>
                <Link to="/Danish/WhatDan" className="btn btn-dark">
                    Hvad er Narcotics Anonymous’ program?
                    </Link>
                <Link to="/Danish/WhyDan" className="btn btn-dark">
                    Hvorfor er vi her?
                    </Link>
                <Link to="/Danish/HowDan" className="btn btn-dark">
                    Sådan virker det
                    </Link>
                <Link to="/Danish/TradDan" className="btn btn-dark">
                    Narcotics Anonymous’ Tolv Traditioner
                    </Link>
                <Link to="/Danish/JFTDan" className="btn btn-dark">
                    Bare For i dag
                    </Link>
                <Link to="/Danish/WDRDan" className="btn btn-dark">
                    Vi kommer i bedring
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
export default PamDan;