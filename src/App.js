import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Episodes from './components/pages/Episodes';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
        <Router basename={'/Podcast-Site'}>
          <div className='bg-dark' style={{height:"100vh"}}>
            <Navbar />            
              <div>
              <Switch>
                <Route exact path='https://denhampreen.github.io/Podcast-Site/' component={Home} />
                <Route exact path='https://denhampreen.github.io/Podcast-Site/episodes' component={Episodes} />
                <Route exact path='https://denhampreen.github.io/Podcast-Site/About' component={About} />
                <Route component={NotFound} />
              </Switch>
              {/* <Footer/>             */}
              </div>
          </div>
        </Router>
    );
};

export default App;
