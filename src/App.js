import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Episode from './components/podcast/Episode';
import NotFound from './components/pages/NotFound';
// import Footer from './components/layout/Footer';
import Episode from './components/podcasts/Episode';

import EpisodeState from './context/episode/EpisodeState';

import './App.css';

const App = () => {
  return (
    <EpisodeState>
      <Router>
        <div className='bg-dark' style={{ height: '100vh' }}>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/episode/:path' component={Episode} />
              <Route exact path='/About' component={About} />
              <Route component={NotFound} />
            </Switch>
            {/* <Footer/>             */}
          </div>
        </div>
      </Router>
    </EpisodeState>
  );
};

export default App;
