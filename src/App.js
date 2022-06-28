import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Home';
import About from './About';
import Typography from 'typography';
import theme from 'typography-theme-grand-view';
import ReactGA from "react-ga4";
const typography = new Typography(theme);
typography.injectStyles()

function App() {
  let appClass = window === window.parent ? 'wrapper' : null;
  var domainReferrer = (window === window.parent) ?
            document.location.href :
            document.referrer;

  ReactGA.initialize([{
    trackingId: "G-7RH0TMQQ64"
  }]);


  ReactGA.event({
    category: "domain_referrer",
    action: domainReferrer
  });

  return (
    <div className={`App ${appClass}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
