import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const Pamflets = () => {
    return (

        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/pamflets/hvem" className="btn btn-dark">
                    Hvem
                    </Link>
                <Link to="/pamflets/hva" className="btn btn-dark">
                    Hva
                    </Link>
                <Link to="/pamflets/hvorfor" className="btn btn-dark">
                    Hvorfor
                    </Link>
                <Link to="/pamflets/hvordan" className="btn btn-dark">
                    Hvordan det virker
                    </Link>
                <Link to="/pamflets/12tradisjoner" className="btn btn-dark">
                    NAs 12 Tradisjoner
                    </Link>
                <Link to="/pamflets/bareforidag" className="btn btn-dark">
                    Bare For I Dag
                    </Link>
                <Link to="/pamflets/vitilfriskner" className="btn btn-dark">
                    Vi Tilfriskner
                    </Link>
            </div>
            <Link to="/">
                <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link></div>
    );
}
export default Pamflets;