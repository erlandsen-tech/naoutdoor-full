import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const Pamfre = () => {
    return (

        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/French/WhoFre" className="btn btn-dark">
                    Qui est dépendant ou dépendante?
                    </Link>
                <Link to="/French/WhatFre" className="btn btn-dark">
                    Qu’est-ce que le programme de Narcotiques Anonymes?
                    </Link>
                <Link to="/French/WhyFre" className="btn btn-dark">
                    Pourquoi sommes-nous ici?
                    </Link>
                <Link to="/French/HowFre" className="btn btn-dark">
                    Comment ça marche?
                    </Link>
                <Link to="/French/TradFre" className="btn btn-dark">
                    Les douze traditions de Narcotiques Anonymes
                    </Link>
                <Link to="/French/JFTFre" className="btn btn-dark">
                    Juste pour aujourd’hui
                    </Link>
                <Link to="/French/WDRFre" className="btn btn-dark">
                    Le rétablissement existe vraiment
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
export default Pamfre;