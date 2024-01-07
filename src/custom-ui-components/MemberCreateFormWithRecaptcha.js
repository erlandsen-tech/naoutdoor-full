import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const MemberCreateFormWithRecaptcha = (props) => {
    const recaptchaRef = React.createRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        // You can now send the recaptchaValue to your server to verify it.
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdVh0EpAAAAACwS0nvLty7JKrvZU3_ixbsSH0J0"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MemberCreateFormWithRecaptcha;