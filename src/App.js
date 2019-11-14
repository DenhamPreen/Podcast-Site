import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/layout/Footer";
import Episode from "./components/podcasts/Episode";

import EpisodeState from "./context/episode/EpisodeState";

import "./App.css";
import { isTablet, isDesktop } from "./utils/ScreenSize";

const App = () => {
  return (
    <EpisodeState>
      <Router>
        <div className="bg-dark-with-gradient" style={{ minHeight: "100vh" }}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/episode/:path" component={Episode} />
              <Route exact path="/About" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Fragment>
              <div style={{ height: "156px" }}></div>
              <Footer />
            </Fragment>
          </div>
        </div>
      </Router>
    </EpisodeState>
  );
};

export default App;
