import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import { format } from "date-fns";

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
  const resetForm = () => {
    setValues({
      homeGroup: "",
      cleanDate: "",
      // Add other form fields here as needed
    });
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
        const response = await axios.post(
          "https://ave6t20ye8.execute-api.eu-north-1.amazonaws.com/staging/members/add",
          {
            ...values,
            cleanDate: format(values.cleanDate, "dd-MM-yyyy"),
            recaptchaValue,
          }
        );
        if (response.status === 200) {
          setSubmitted(true);
        }
      } catch (error) {
        console.error("Failed to post form values:", error);
      }
    }
  };

  useEffect(() => {
    if (submitted && valid) {
      navigate("/success");
    } else if (submitted && !valid) {
      window.alert("Failed to submit form. Please try again."); // Show an alert dialog with the error message
      resetForm();
    }
  }, [submitted, valid, navigate]);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {!valid && (
          <div className="form-group">
            <label>HomeGroup:</label>
            <input
              className="form-control"
              type="text"
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
            <label>Clean Date:</label>
            <br></br>
            <ReactDatePicker
              className="form-control"
              selected={values.cleanDate}
              onChange={(date) => setValues({ ...values, cleanDate: date })}
              dateFormat="dd/MM/yyyy"
              placeholderText="Clean Date"
              maxDate={new Date()}
              showMonthDropdown
              showYearDropdown
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
