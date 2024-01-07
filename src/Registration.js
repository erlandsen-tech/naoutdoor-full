import React from "react";
import MemberCreateFormWithRecaptcha from "./custom-ui-components/MemberCreateFormWithRecaptcha";


const Registration = () => {
    return (
        <div className="container registration-page">
            <div className="container-fluid fixed-bottom" style={{backgroundColor: 'rgba(5, 5, 5, 0.5)'}}>
                <MemberCreateFormWithRecaptcha/>
            </div>
        </div>
    );
}

export default Registration;