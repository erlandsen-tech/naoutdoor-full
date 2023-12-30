import React from 'react'
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import App from './App'
import {Helmet} from 'react-helmet';
import {Amplify} from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(amplifyconfig);

const TITLE = "Ski & Recovery";



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<div>
    <Helmet>
        <title>{TITLE}</title>
    </Helmet>
    <App/>
</div>);