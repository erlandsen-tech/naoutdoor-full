import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const RECAPTCHA_KEY = "6LdUh0EpAAAAAE6xRU0oK5qfmYVk5WINZYep8vs_";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    homeGroup: "",
    cleanDate: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.homeGroup && values.cleanDate && recaptchaValue) {
      setValid(true);
      try {
        console.log(`sending values ${values}`);
        const response = await axios.post(
          "https://ave6t20ye8.execute-api.eu-north-1.amazonaws.com/staging/members/add",
          values,
          recaptchaValue
        ); // Replace '/api/endpoint' with your actual API endpoint
        console.log(response.data);
      } catch (error) {
        console.error("Failed to post form values:", error);
      }
    }
    console.log(values);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && valid) {
      navigate("/success");
    }
  }, [submitted, valid, navigate]);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
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
            <ReCAPTCHA
              sitekey={RECAPTCHA_KEY}
              onChange={handleRecaptchaChange}
            />
          </div>
        )}

        {!valid && (
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginBottom: "1vh" }}
            >
              Register
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const MemberCreateFormWithRecaptcha = (props) => {
  return <RegistrationForm />;
};

export default MemberCreateFormWithRecaptcha;
