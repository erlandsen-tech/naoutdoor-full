import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        homeGroup: "",
        cleanDate: ""
    });

    const handleInputChange = (event) => {
        event.preventDefault();

        const {name, value} = event.target;
        setValues((values) => ({
            ...values,
            [name]: value
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.homeGroup && values.cleanDate) {
            setValid(true);
            try {
                const response = await axios.post('https://ave6t20ye8.execute-api.eu-north-1.amazonaws.com/staging/members/add', values); // Replace '/api/endpoint' with your actual API endpoint
                console.log(response.data);
            } catch (error) {
                console.error('Failed to post form values:', error);
            }
        }
        console.log(values)
        setSubmitted(true);
    };

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid && (
                    navigate("/success")
                )}
                {!valid && (
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Home Group"
                            name="homeGroup"
                            value={values.homeGroup}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {submitted && !values.homeGroup && (
                    <span id="first-name-error">Please enter home group</span>
                )}

                {!valid && (
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Clean Date"
                            name="cleanDate"
                            value={values.cleanDate}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {submitted && !values.cleanDate && (
                    <span id="last-name-error">Please enter a Clean Date</span>
                )}
                {!valid && (
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" style={{marginBottom: '1vh'}}>
                            Register
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}

const MemberCreateFormWithRecaptcha = (props) => {
    return (
        <RegistrationForm/>
    );
};

export default MemberCreateFormWithRecaptcha;