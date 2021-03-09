import React from 'react';
import { Link } from 'react-router-dom';
const Pamflets = () => {
    return (

        <div id="landing">
            <div id="landing-img">
                <div class="container-fluid">
                    <div class="logotext-img">
                        <Link to="/">
                            <img src="/img/logotext.png" class="img-fluid" alt="Ski & Recovery" />
                        </Link>
                    </div>
                </div>
                <div class="d-grid gap-3 col-7 mx-auto">
                    <Link to="/pamflets/hvem" class="btn btn-dark">
                        Hvem
                    </Link>
                    <Link to="/pamflets/hva" class="btn btn-dark">
                        Hva
                    </Link>
                    <Link to="/pamflets/hvorfor" class="btn btn-dark">
                        Hvorfor
                    </Link>
                    <Link to="/pamflets/hvordan" class="btn btn-dark">
                        Hvordan det virker
                    </Link>
                    <Link to="/pamflets/12tradisjoner" class="btn btn-dark">
                        NAs 12 Tradisjoner
                    </Link>
                    <Link to="/pamflets/bareforidag" class="btn btn-dark">
                        Bare For I Dag
                    </Link>
                    <Link to="/pamflets/vitilfriskner" class="btn btn-dark">
                        Vi Tilfriskner
                    </Link>
                </div>
            </div>
            <Link to="/">
                <img class="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>
        </div >
    );
}
export default Pamflets;