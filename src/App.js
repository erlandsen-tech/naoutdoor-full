import React from "react";
import Home from "./Home";
import SeventhTradition from "./SeventhTradition";
import Meetings from "./Meetings";
import Slope from "./Slope";
import Contact from "./Contact";
import Readings from "./Readings";
import Registration from "./Registration";

import ManJFT from "./ManJFT";
import ManSpe from "./ManSpe";

import PamEng from "./pamflets/English/PamEng";
import WhoEng from "./pamflets/English/WhoEng";
import WhatEng from "./pamflets/English/WhatEng";
import WhyEng from "./pamflets/English/WhyEng";
import HowEng from "./pamflets/English/HowEng";
import TradEng from "./pamflets/English/TradEng";
import JFTEng from "./pamflets/English/JFTEng";
import WDREng from "./pamflets/English/WDREng";

import PamNor from "./pamflets/Norwegian/PamNor";
import WhoNor from "./pamflets/Norwegian/WhoNor";
import WhatNor from "./pamflets/Norwegian/WhatNor";
import WhyNor from "./pamflets/Norwegian/WhyNor";
import HowNor from "./pamflets/Norwegian/HowNor";
import TradNor from "./pamflets/Norwegian/TradNor";
import JFTNor from "./pamflets/Norwegian/JFTNor";
import WDRNor from "./pamflets/Norwegian/WDRNor";

import PamSwe from "./pamflets/Swedish/PamSwe";
import WhoSwe from "./pamflets/Swedish/WhoSwe";
import WhatSwe from "./pamflets/Swedish/WhatSwe";
import WhySwe from "./pamflets/Swedish/WhySwe";
import HowSwe from "./pamflets/Swedish/HowSwe";
import TradSwe from "./pamflets/Swedish/TradSwe";
import JFTSwe from "./pamflets/Swedish/JFTSwe";
import WDRSwe from "./pamflets/Swedish/WDRSwe";

import PamDan from "./pamflets/Danish/PamDan";
import WhoDan from "./pamflets/Danish/WhoDan";
import WhatDan from "./pamflets/Danish/WhatDan";
import WhyDan from "./pamflets/Danish/WhyDan";
import HowDan from "./pamflets/Danish/HowDan";
import TradDan from "./pamflets/Danish/TradDan";
import JFTDan from "./pamflets/Danish/JFTDan";
import WDRDan from "./pamflets/Danish/WDRDan";

import PamDut from "./pamflets/Dutch/PamDut";
import WhoDut from "./pamflets/Dutch/WhoDut";
import WhatDut from "./pamflets/Dutch/WhatDut";
import WhyDut from "./pamflets/Dutch/WhyDut";
import HowDut from "./pamflets/Dutch/HowDut";
import TradDut from "./pamflets/Dutch/TradDut";
import JFTDut from "./pamflets/Dutch/JFTDut";
import WDRDut from "./pamflets/Dutch/WDRDut";

import PamGer from "./pamflets/German/PamGer";
import WhoGer from "./pamflets/German/WhoGer";
import WhatGer from "./pamflets/German/WhatGer";
import WhyGer from "./pamflets/German/WhyGer";
import HowGer from "./pamflets/German/HowGer";
import TradGer from "./pamflets/German/TradGer";
import JFTGer from "./pamflets/German/JFTGer";
import WDRGer from "./pamflets/German/WDRGer";

import PamFre from "./pamflets/French/PamFre";
import WhoFre from "./pamflets/French/WhoFre";
import WhatFre from "./pamflets/French/WhatFre";
import WhyFre from "./pamflets/French/WhyFre";
import HowFre from "./pamflets/French/HowFre";
import TradFre from "./pamflets/French/TradFre";
import JFTFre from "./pamflets/French/JFTFre";
import WDRFre from "./pamflets/French/WDRFre";

import PamFin from "./pamflets/Finnish/PamFin";
import WhoFin from "./pamflets/Finnish/WhoFin";
import WhatFin from "./pamflets/Finnish/WhatFin";
import WhyFin from "./pamflets/Finnish/WhyFin";
import HowFin from "./pamflets/Finnish/HowFin";
import TradFin from "./pamflets/Finnish/TradFin";
import JFTFin from "./pamflets/Finnish/JFTFin";
import WDRFin from "./pamflets/Finnish/WDRFin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import GifPage from "./Success";
import Analytics from "./Analytics";

function usePageViews() {
  let location = window.location.pathname;
  React.useEffect(() => {}, [location]);
}

function App() {
  usePageViews();
  return (
    <>
      <Router>
        <div id="landing-img">
          <Header />
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/success" element={<GifPage />} />
            <Route path="/readings" element={<Readings />} />
            <Route path="/seventhtradition" element={<SeventhTradition />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/slope" element={<Slope />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ManJFT" element={<ManJFT />} />
            <Route path="/ManSpe" element={<ManSpe />} />

            {/* English */}
            <Route path="/English/PamEng" element={<PamEng />} />
            <Route path="/English/WhoEng" element={<WhoEng />} />
            <Route path="/English/WhatEng" element={<WhatEng />} />
            <Route path="/English/WhyEng" element={<WhyEng />} />
            <Route path="/English/HowEng" element={<HowEng />} />
            <Route path="/English/TradEng" element={<TradEng />} />
            <Route path="/English/JFTEng" element={<JFTEng />} />
            <Route path="/English/WDREng" element={<WDREng />} />
            {/* Norwegian */}
            <Route path="/Norwegian/PamNor" element={<PamNor />} />
            <Route path="/Norwegian/WhoNor" element={<WhoNor />} />
            <Route path="/Norwegian/WhatNor" element={<WhatNor />} />
            <Route path="/Norwegian/WhyNor" element={<WhyNor />} />
            <Route path="/Norwegian/HowNor" element={<HowNor />} />
            <Route path="/Norwegian/TradNor" element={<TradNor />} />
            <Route path="/Norwegian/JFTNor" element={<JFTNor />} />
            <Route path="/Norwegian/WDRNor" element={<WDRNor />} />

            {/* Swedish */}
            <Route path="/Swedish/PamSwe" element={<PamSwe />} />
            <Route path="/Swedish/WhoSwe" element={<WhoSwe />} />
            <Route path="/Swedish/WhatSwe" element={<WhatSwe />} />
            <Route path="/Swedish/WhySwe" element={<WhySwe />} />
            <Route path="/Swedish/HowSwe" element={<HowSwe />} />
            <Route path="/Swedish/TradSwe" element={<TradSwe />} />
            <Route path="/Swedish/JFTSwe" element={<JFTSwe />} />
            <Route path="/Swedish/WDRSwe" element={<WDRSwe />} />
            {/* Danish */}
            <Route path="/Danish/PamDan" element={<PamDan />} />
            <Route path="/Danish/WhoDan" element={<WhoDan />} />
            <Route path="/Danish/WhatDan" element={<WhatDan />} />
            <Route path="/Danish/WhyDan" element={<WhyDan />} />
            <Route path="/Danish/HowDan" element={<HowDan />} />
            <Route path="/Danish/TradDan" element={<TradDan />} />
            <Route path="/Danish/JFTDan" element={<JFTDan />} />
            <Route path="/Danish/WDRDan" element={<WDRDan />} />

            {/* Dutch */}
            <Route path="/Dutch/PamDut" element={<PamDut />} />
            <Route path="/Dutch/WhoDut" element={<WhoDut />} />
            <Route path="/Dutch/WhatDut" element={<WhatDut />} />
            <Route path="/Dutch/WhyDut" element={<WhyDut />} />
            <Route path="/Dutch/HowDut" element={<HowDut />} />
            <Route path="/Dutch/TradDut" element={<TradDut />} />
            <Route path="/Dutch/JFTDut" element={<JFTDut />} />
            <Route path="/Dutch/WDRDut" element={<WDRDut />} />

            {/* German */}
            <Route path="/German/PamGer" element={<PamGer />} />
            <Route path="/German/WhoGer" element={<WhoGer />} />
            <Route path="/German/WhatGer" element={<WhatGer />} />
            <Route path="/German/WhyGer" element={<WhyGer />} />
            <Route path="/German/HowGer" element={<HowGer />} />
            <Route path="/German/TradGer" element={<TradGer />} />
            <Route path="/German/JFTGer" element={<JFTGer />} />
            <Route path="/German/WDRGer" element={<WDRGer />} />
            {/* French */}
            <Route path="/French/PamFre" element={<PamFre />} />
            <Route path="/French/WhoFre" element={<WhoFre />} />
            <Route path="/French/WhatFre" element={<WhatFre />} />
            <Route path="/French/WhyFre" element={<WhyFre />} />
            <Route path="/French/HowFre" element={<HowFre />} />
            <Route path="/French/TradFre" element={<TradFre />} />
            <Route path="/French/JFTFre" element={<JFTFre />} />
            <Route path="/French/WDRFre" element={<WDRFre />} />

            {/* Finnish */}
            <Route path="/Finnish/PamFin" element={<PamFin />} />
            <Route path="/Finnish/WhoFin" element={<WhoFin />} />
            <Route path="/Finnish/WhatFin" element={<WhatFin />} />
            <Route path="/Finnish/WhyFin" element={<WhyFin />} />
            <Route path="/Finnish/HowFin" element={<HowFin />} />
            <Route path="/Finnish/TradFin" element={<TradFin />} />
            <Route path="/Finnish/JFTFin" element={<JFTFin />} />
            <Route path="/Finnish/WDRFin" element={<WDRFin />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
