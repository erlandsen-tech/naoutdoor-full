import React from 'react'
import Table from './Table';
import Register from './Register'
import Home from './Home';
import SeventhTradition from './SeventhTradition';
import Meetings from './Meetings';
import Pamflets from './Pamflets';
import Hvem from './pamflets/Hvem';
import Hva from './pamflets/Hva';
import Hvorfor from './pamflets/Hvorfor';
import Hvordan from './pamflets/Hvordan';
import Tradisjoner from './pamflets/Tradisjoner';
import BareForIDag from './pamflets/BareForIDag';
import ViTilfriskner from './pamflets/ViTilfriskner';
import Slope from './Slope';
import Contact from './Contact';
import MyComponent from './Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";

function usePageViews() {
    let location = window.location.pathname;
    React.useEffect(() => {
        console.log(location);
    }, [location]);
  }

function App() {
    usePageViews();
    return (
        <>
            <Router >
                <div id="landing-img">
                    <MyComponent />
                    <Switch>
                        <Route path="/pamflets/hvem">
                            <Hvem />
                        </Route>
                        <Route path="/pamflets/hva">
                            <Hva />
                        </Route>
                        <Route path="/pamflets/hvorfor">
                            <Hvorfor />
                        </Route>
                        <Route path="/pamflets/hvordan">
                            <Hvordan />
                        </Route>
                        <Route path="/pamflets/12tradisjoner">
                            <Tradisjoner />
                        </Route>
                        <Route path="/pamflets/bareforidag">
                            <BareForIDag />
                        </Route>
                        <Route path="/pamflets/vitilfriskner">
                            <ViTilfriskner />
                        </Route>
                        <Route path="/pamflets">
                            <Pamflets />
                        </Route>

                        <Route path="/registrer">
                            <Register />
                        </Route>
                        <Route path="/liste">
                            <Table />
                        </Route>
                        <Route path="/seventhtradition">
                            <SeventhTradition />
                        </Route>
                        <Route path="/meetings">
                            <Meetings />
                        </Route>
                        <Route path="/slope">
                            <Slope />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
export default App;