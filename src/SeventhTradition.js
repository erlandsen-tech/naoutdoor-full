import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const SeventhTradition = () => {
    return (
        <div className="container">
            <Header/>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col">
                        <img className="mx-auto d-block" src="/img/vipps.png" />
                    </div>
                </div>
                <div className="row  justify-content-center bg-dark mt-5">
                    <div className="col fw-bold form-text text-center mt">
                        <h1 className="" style={{color: "royalblue"}}>
                        Vipps number: 520065
                        </h1>
                    </div>
                </div>
            </div>
            <Link to="/">
                <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>
            </div>
    )
};
export default SeventhTradition;