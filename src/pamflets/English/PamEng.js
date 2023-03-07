import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';
const PamEng = () => {
    return (
        <div className="container">
            <Header/>
            <div className="d-grid gap-3 col-7 mx-auto">
                <Link to="/English/WhoEng" className="btn btn-dark">
                    Who is an Addict?
                    </Link>
                <Link to="/English/whatEng" className="btn btn-dark">
                    What is the NA Program?
                    </Link>
                <Link to="/English/WhyEng" className="btn btn-dark">
                    Why Are We Here?
                    </Link>
                <Link to="/English/HowEng" className="btn btn-dark">
                    How it Works
                    </Link>
                <Link to="/English/TradEng" className="btn btn-dark">
                    The Twelve Traditions
                    </Link>
                <Link to="/English/JFTEng" className="btn btn-dark">
                    Just for Today
                    </Link>
                <Link to="/English/WDREng" className="btn btn-dark">
                    We Do Recover
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
export default PamEng;