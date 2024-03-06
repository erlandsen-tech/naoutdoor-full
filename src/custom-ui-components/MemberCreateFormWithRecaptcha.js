import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import { format } from "date-fns";
import Select from "react-select";

const RECAPTCHA_KEY = "6LdUh0EpAAAAAE6xRU0oK5qfmYVk5WINZYep8vs_";

const RegistrationForm = () => {
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry({ value: "NO", label: "🇳🇴 Norway" });
        setValues({ ...values, country: "🇳🇴 Norway" });
      });
  }, []);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [values, setValues] = useState({
    homeGroup: "",
    cleanDate: "",
    country: "",
    recaptchaValue: "",
  });
  const resetForm = () => {
    setValues({
      homeGroup: "",
      cleanDate: "",
      country: "",
      recaptchaValue: "",
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.homeGroup && values.cleanDate && values.recaptchaValue) {
      setValid(true);
      try {
        const response = await axios.post(
          "https://q6dbqs0q30.execute-api.eu-north-1.amazonaws.com/createMember",
          {
            cleanDate: format(values.cleanDate, "dd-MM-yyyy"),
            country: values.country,
            homeGroup: values.homeGroup,
            recaptchaValue: values.recaptchaValue,
          }
        );
        console.log("Response from API:", response);
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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formHomeGrup">
        <Form.Control
          type="text"
          placeholder="Homegroup"
          value={values.homeGroup}
          onChange={(e) => setValues({ ...values, homeGroup: e.target.value })}
        />
      </Form.Group>
      {!valid && (
        <Form.Group className="mb-3" controlId="formCleanDate">
          <ReactDatePicker
            selected={values.cleanDate}
            onChange={(date) => setValues({ ...values, cleanDate: date })}
            dateFormat="dd/MM/yyyy"
            placeholderText="Cleandate"
            maxDate={new Date()}
            showMonthDropdown={true}
            showYearDropdown={true}
            scrollableMonthYearDropdown={true}
            scrollableYearDropdown={true}
            yearDropdownItemNumber={100}
            disabledKeyboardNavigation
            customInput={<input disabled={true} style={{ width: "100%" }} />}
            withPortal
            onChangeRaw={(e) => e.preventDefault()}
          />
        </Form.Group>
      )}
      {!valid && (
        <Form.Group className="mb-3" controlId="formRecaptcha">
          <ReCAPTCHA
            sitekey={RECAPTCHA_KEY}
            onChange={(value) =>
              setValues({ ...values, recaptchaValue: value })
            }
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formCountry">
        <Select
          options={countries}
          value={selectedCountry}
          onChange={(selectedCountry) => {
            setValues({ ...values, country: selectedCountry.label });
            setSelectedCountry(selectedCountry);
          }}
        />
      </Form.Group>
      {!valid && (
        <Form.Group className="mb-3" controlId="formSubmitButton">
          <Button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: "20px", marginBottom: "5vh" }}
          >
            Register
          </Button>
        </Form.Group>
      )}
    </Form>
  );
};

const MemberCreateFormWithRecaptcha = (props) => {
  return <RegistrationForm />;
};

export default MemberCreateFormWithRecaptcha;
