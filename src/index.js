import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import App from './App'
import { Helmet } from 'react-helmet';
const TITLE = "Ski & Recovery";

render((
    <div>
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
        <App />
    </div>

), document.getElementById('root'));