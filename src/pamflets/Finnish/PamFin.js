import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamFin = () => {
    return (

        <div className="container">
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/Finnish/WhoFin" className="btn btn-dark">
                    Kuka on addikti?
                    </Link>
                <Link to="/Finnish/WhatFin" className="btn btn-dark">
                    Mikä on Nimettömien Narkomaanien ohjelma?
                    </Link>
                <Link to="/Finnish/WhyFin" className="btn btn-dark">
                    Miksi olemme täällä?
                    </Link>
                <Link to="/Finnish/HowFin" className="btn btn-dark">
                    Miten se toimii
                    </Link>
                <Link to="/Finnish/TradFin" className="btn btn-dark">
                    NA:n kaksitoista perinnettä
                    </Link>
                <Link to="/Finnish/JFTFin" className="btn btn-dark">
                    Juuri Tänään
                    </Link>
                <Link to="/Finnish/WDRFin" className="btn btn-dark">
                    Me todella toivumme
                    </Link>
            </div>
            <Link to="/Readings">
                <img className="mx-auto d-block footer fixed-bottom mb-3" src="../img/left-arrow.png" id="back" alt="Back" />
            </Link></div>
    );
}
export default PamFin;