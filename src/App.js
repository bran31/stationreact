import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Main from './components/Main'
import Twitter from './components/Twitter'
import Members from './components/Members'
import ALS from './components/ALS'
import BLS from './components/BLS'
import Officers from './components/Officers'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-7">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/members" component={Members} />
            <Route path="/als" component={ALS} />
            <Route path="/bls" component={BLS} />
            <Route path="/officers" component={Officers} />

          </Switch>  
        </div>
        <div className="col 3">
          <Twitter />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
