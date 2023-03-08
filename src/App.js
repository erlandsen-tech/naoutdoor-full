import React from 'react'
import Home from './Home';
import SeventhTradition from './SeventhTradition';
import Meetings from './Meetings';
import Slope from './Slope';
import Contact from './Contact';
import Readings from './Readings';

import ManJFT from './ManJFT';
import ManSpe from './ManSpe';

import PamEng from './pamflets/English/PamEng';
import WhoEng from './pamflets/English/WhoEng';
import WhatEng from './pamflets/English/WhatEng';
import WhyEng from './pamflets/English/WhyEng';
import HowEng from './pamflets/English/HowEng';
import TradEng from './pamflets/English/TradEng';
import JFTEng from './pamflets/English/JFTEng';
import WDREng from './pamflets/English/WDREng';

import PamNor from './pamflets/Norwegian/PamNor';
import WhoNor from './pamflets/Norwegian/WhoNor';
import WhatNor from './pamflets/Norwegian/WhatNor';
import WhyNor from './pamflets/Norwegian/WhyNor';
import HowNor from './pamflets/Norwegian/HowNor';
import TradNor from './pamflets/Norwegian/TradNor';
import JFTNor from './pamflets/Norwegian/JFTNor';
import WDRNor from './pamflets/Norwegian/WDRNor';

import PamSwe from './pamflets/Swedish/PamSwe';
import WhoSwe from './pamflets/Swedish/WhoSwe';
import WhatSwe from './pamflets/Swedish/WhatSwe';
import WhySwe from './pamflets/Swedish/WhySwe';
import HowSwe from './pamflets/Swedish/HowSwe';
import TradSwe from './pamflets/Swedish/TradSwe';
import JFTSwe from './pamflets/Swedish/JFTSwe';
import WDRSwe from './pamflets/Swedish/WDRSwe';

import PamDan from './pamflets/Danish/PamDan';
import WhoDan from './pamflets/Danish/WhoDan';
import WhatDan from './pamflets/Danish/WhatDan';
import WhyDan from './pamflets/Danish/WhyDan';
import HowDan from './pamflets/Danish/HowDan';
import TradDan from './pamflets/Danish/TradDan';
import JFTDan from './pamflets/Danish/JFTDan';
import WDRDan from './pamflets/Danish/WDRDan';

import PamDut from './pamflets/Dutch/PamDut';
import WhoDut from './pamflets/Dutch/WhoDut';
import WhatDut from './pamflets/Dutch/WhatDut';
import WhyDut from './pamflets/Dutch/WhyDut';
import HowDut from './pamflets/Dutch/HowDut';
import TradDut from './pamflets/Dutch/TradDut';
import JFTDut from './pamflets/Dutch/JFTDut';
import WDRDut from './pamflets/Dutch/WDRDut';

import PamGer from './pamflets/German/PamGer';
import WhoGer from './pamflets/German/WhoGer';
import WhatGer from './pamflets/German/WhatGer';
import WhyGer from './pamflets/German/WhyGer';
import HowGer from './pamflets/German/HowGer';
import TradGer from './pamflets/German/TradGer';
import JFTGer from './pamflets/German/JFTGer';
import WDRGer from './pamflets/German/WDRGer';

import PamFre from './pamflets/French/PamFre';
import WhoFre from './pamflets/French/WhoFre';
import WhatFre from './pamflets/French/WhatFre';
import WhyFre from './pamflets/French/WhyFre';
import HowFre from './pamflets/French/HowFre';
import TradFre from './pamflets/French/TradFre';
import JFTFre from './pamflets/French/JFTFre';
import WDRFre from './pamflets/French/WDRFre';

import PamFin from './pamflets/Finnish/PamFin';
import WhoFin from './pamflets/Finnish/WhoFin';
import WhatFin from './pamflets/Finnish/WhatFin';
import WhyFin from './pamflets/Finnish/WhyFin';
import HowFin from './pamflets/Finnish/HowFin';
import TradFin from './pamflets/Finnish/TradFin';
import JFTFin from './pamflets/Finnish/JFTFin';
import WDRFin from './pamflets/Finnish/WDRFin';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./Header";

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
                    <Header />
                    <Switch>
                        <Route path="/readings">
                            <Readings />
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

                        <Route path="/ManJFT">
                            <ManJFT />
                        </Route>    
                        <Route path="/ManSpe">
                            <ManSpe />
                        </Route>

                        {/* English */}
                        <Route path="/English/PamEng">
                            <PamEng />
                        </Route>
                        <Route path="/English/WhoEng">
                            <WhoEng />
                        </Route>
                        <Route path="/English/WhatEng">
                            <WhatEng />
                        </Route>
                        <Route path="/English/WhyEng">
                            <WhyEng />
                        </Route>
                        <Route path="/English/HowEng">
                            <HowEng />
                        </Route>
                        <Route path="/English/TradEng">
                            <TradEng />
                        </Route>
                        <Route path="/English/JFTEng">
                            <JFTEng />
                        </Route>
                        <Route path="/English/WDREng">
                            <WDREng />
                        </Route>
                        {/* Norwegian */}
                        <Route path="/Norwegian/PamNor">
                            <PamNor />
                        </Route>
                        <Route path="/Norwegian/WhoNor">
                            <WhoNor />
                        </Route>
                        <Route path="/Norwegian/WhatNor">
                            <WhatNor />
                        </Route>
                        <Route path="/Norwegian/WhyNor">
                            <WhyNor />
                        </Route>
                        <Route path="/Norwegian/HowNor">
                            <HowNor />
                        </Route>
                        <Route path="/Norwegian/TradNor">
                            <TradNor />
                        </Route>
                        <Route path="/Norwegian/JFTNor">
                            <JFTNor />
                        </Route>
                        <Route path="/Norwegian/WDRNor">
                            <WDRNor />
                        </Route>
                        {/* Swedish */}
                        <Route path="/Swedish/PamSwe">
                            <PamSwe />
                        </Route>
                        <Route path="/Swedish/WhoSwe">
                            <WhoSwe />
                        </Route>
                        <Route path="/Swedish/WhatSwe">
                            <WhatSwe />
                        </Route>
                        <Route path="/Swedish/WhySwe">
                            <WhySwe />
                        </Route>
                        <Route path="/Swedish/HowSwe">
                            <HowSwe />
                        </Route>
                        <Route path="/Swedish/TradSwe">
                            <TradSwe />
                        </Route>
                        <Route path="/Swedish/JFTSwe">
                            <JFTSwe />
                        </Route>
                        <Route path="/Swedish/WDRSwe">
                            <WDRSwe />
                        </Route>
                        {/* Danish */}
                        <Route path="/Danish/PamDan">
                            <PamDan />
                        </Route>
                        <Route path="/Danish/WhoDan">
                            <WhoDan />
                        </Route>
                        <Route path="/Danish/WhatDan">
                            <WhatDan />
                        </Route>
                        <Route path="/Danish/WhyDan">
                            <WhyDan />
                        </Route>
                        <Route path="/Danish/HowDan">
                            <HowDan />
                        </Route>
                        <Route path="/Danish/TradDan">
                            <TradDan />
                        </Route>
                        <Route path="/Danish/JFTDan">
                            <JFTDan />
                        </Route>
                        <Route path="/Danish/WDRDan">
                            <WDRDan />
                        </Route>
                        {/* Dutch */}
                        <Route path="/Dutch/PamDut">
                            <PamDut />
                        </Route>
                        <Route path="/Dutch/WhoDut">
                            <WhoDut />
                        </Route>
                        <Route path="/Dutch/WhatDut">
                            <WhatDut />
                        </Route>
                        <Route path="/Dutch/WhyDut">
                            <WhyDut />
                        </Route>
                        <Route path="/Dutch/HowDut">
                            <HowDut />
                        </Route>
                        <Route path="/Dutch/TradDut">
                            <TradDut />
                        </Route>
                        <Route path="/Dutch/JFTDut">
                            <JFTDut />
                        </Route>
                        <Route path="/Dutch/WDRDut">
                            <WDRDut />
                        </Route>
                        {/* German */}
                        <Route path="/German/PamGer">
                            <PamGer />
                        </Route>
                        <Route path="/German/WhoGer">
                            <WhoGer />
                        </Route>
                        <Route path="/German/WhatGer">
                            <WhatGer />
                        </Route>
                        <Route path="/German/WhyGer">
                            <WhyGer />
                        </Route>
                        <Route path="/German/HowGer">
                            <HowGer />
                        </Route>
                        <Route path="/German/TradGer">
                            <TradGer />
                        </Route>
                        <Route path="/German/JFTGer">
                            <JFTGer />
                        </Route>
                        <Route path="/German/WDRGer">
                            <WDRGer />
                        </Route>
                        {/* French */}
                        <Route path="/French/PamFre">
                            <PamFre />
                        </Route>
                        <Route path="/French/WhoFre">
                            <WhoFre />
                        </Route>
                        <Route path="/French/WhatFre">
                            <WhatFre />
                        </Route>
                        <Route path="/French/WhyFre">
                            <WhyFre />
                        </Route>
                        <Route path="/French/HowFre">
                            <HowFre />
                        </Route>
                        <Route path="/French/TradFre">
                            <TradFre />
                        </Route>
                        <Route path="/French/JFTFre">
                            <JFTFre />
                        </Route>
                        <Route path="/French/WDRFre">
                            <WDRFre />
                        </Route>
                        {/* Finnish */}
                        <Route path="/Finnish/PamFin">
                            <PamFin />
                        </Route>
                        <Route path="/Finnish/WhoFin">
                            <WhoFin />
                        </Route>
                        <Route path="/Finnish/WhatFin">
                            <WhatFin />
                        </Route>
                        <Route path="/Finnish/WhyFin">
                            <WhyFin />
                        </Route>
                        <Route path="/Finnish/HowFin">
                            <HowFin />
                        </Route>
                        <Route path="/Finnish/TradFin">
                            <TradFin />
                        </Route>
                        <Route path="/Finnish/JFTFin">
                            <JFTFin />
                        </Route>
                        <Route path="/Finnish/WDRFin">
                            <WDRFin />
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