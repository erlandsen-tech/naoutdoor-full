import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, withRouter } from 'react-router-dom';
import Header from './Header';

const fetch = require('node-fetch');
const current = new Date();
const date = `${current.getFullYear()}-${("0" + current.getMonth()).slice(-2)}-${("0" + current.getDate()).slice(-2)}`;

const Register = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            cleanDate: '',
            area: '',
            homeGroup: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Du må skrive inn et navn'),
            cleanDate: Yup.date()
                .max(date, 'Datoen kan ikke være i fremtiden')
                .notOneOf(['dd/mm/yyyy', ''], 'Du må velge en dato')
                .required('Du må velge en dato'),
            phone: Yup.string()
                .required()
                .matches(/^[0-9,+]+$/, "Bare tall og + er tillatt")
                .max(20, "Telefonnummer med retningsnummer kan ikke være lengre enn 20 siffer")
                .min(8, "Telefonnummer er minst 8 siffer lange")
        }),
        onSubmit: values => {
            fetch(`${window.location.origin}/attendees`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
            .then(formik.resetForm())
            .then((response) => {
                if(response.status >= 200 && response.status <= 299) {
                props.history.push("/registered");
                } else {
                    throw Error(response.statusText);
                }
            })
            .catch((error) => {
                alert("Registrering feilet fordi: " + error);
                props.history.push("/");
            });
        },
    })
    return (
        <div>
            <div id="container">
                <Header />
                <div className="container-2">

                </div>
                <div className="container-2">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Navn"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="alert alert-danger">{formik.errors.name}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="form-control"
                                placeholder="Telefonnummer"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="alert alert-danger">{formik.errors.phone}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <input
                                id="cleanDate"
                                name="cleanDate"
                                type="date"
                                className="form-control"
                                max={date}
                                onChange={formik.handleChange}
                                value={formik.values.cleanDate}
                            />
                            {formik.touched.cleanDate && formik.errors.cleanDate ? (
                                <div className="alert alert-danger">{formik.errors.cleanDate}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <input
                                id="area"
                                name="area"
                                type="text"
                                className="form-control"
                                onChange={formik.handleChange}
                                value={formik.values.area}
                                placeholder="Område"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                id="homeGroup"
                                className="form-control"
                                name="homeGroup"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.homeGroup}
                                placeholder="Hjemmegruppe"
                            />
                        </div>
                        <div className="container mb-3 justify-center">
                            <input className="button btn-primary" type="submit" value="Registrer" />
                        </div>
                    </form>
                    <div id="left-arrow">
                        <Link to="/">
                            <img className="" src="img/left-arrow.png" id="back" alt="Back" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default withRouter(Register);