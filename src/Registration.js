import React from "react";
import MemberCreateFormWithRecaptcha from "./custom-ui-components/MemberCreateFormWithRecaptcha";
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className="container registration-page">
            <div className="container-fluid fixed-bottom" style={{backgroundColor: 'rgba(5, 5, 5, 0.5)'}}>
                <MemberCreateFormWithRecaptcha/>
            </div>
            <div className="fixed-bottom footer">
                <Link to="/">
                    <img className="mx-auto d-block" src="/img/left-arrow.png" id="back" alt="Back"/>
                </Link>
            </div>
        </div>
    );
}

export default Registration;