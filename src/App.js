import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Podcasts from './components/pages/Podcasts';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
        <Router>
          <div className='bg-dark' style={{height:"100vh"}}>
            <Navbar />            
              <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Podcasts' component={Podcasts} />
                <Route exact path='/About' component={About} />
                <Route component={NotFound} />
              </Switch>
              <Footer/>            
              </div>
          </div>
        </Router>
    );
};

export default App;
