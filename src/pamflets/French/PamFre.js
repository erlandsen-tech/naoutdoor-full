import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const Pamfre = () => {
    return (

        <div className="container">
            <div className="container">
            <div className="d-grid gap-2 col-10 mx-auto">
                    <Link to="/French/WhoFre" className="btn btn-dark  text-wrap">
                        Qui est dépendant ou dépendante?
                    </Link>
                    <Link to="/French/WhatFre" className="btn btn-dark text-wrap">
                        Qu’est-ce que le programme de Narcotiques Anonymes?
                    </Link>
                    <Link to="/French/WhyFre" className="btn btn-dark  text-wrap">
                        Pourquoi sommes-nous ici?
                    </Link>
                    <Link to="/French/HowFre" className="btn btn-dark  text-wrap">
                        Comment ça marche?
                    </Link>
                    <Link to="/French/TradFre" className="btn btn-dark text-wrap">
                        Les douze traditions de Narcotiques Anonymes
                    </Link>
                    <Link to="/French/JFTFre" className="btn btn-dark text-wrap">
                        Juste pour aujourd’hui
                    </Link>
                    <Link to="/French/WDRFre" className="btn btn-dark  text-wrap">
                        Le rétablissement existe vraiment
                    </Link>
                </div>
        </div>
                <Link to="/Readings" className="mt-5">
                    <img className="col-12 mt-1 mb-1  mx-auto d-block footer fixed-bottom mb-3" src="../img/left-arrow.png" id="back" alt="Back" />
                </Link>
        </div>
    );
}
export default Pamfre;