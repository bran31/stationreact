import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Main from './components/Main'
import Twitter from './components/Twitter'
import Members from './components/Members'
import ALS from './components/seniority/ALS'
import BLS from './components/seniority/BLS'
import Officers from './components/seniority/Officers'
import Tour1 from './components/tours/Tour1'
import Tour2 from './components/tours/Tour2'
import Tour3 from './components/tours/Tour3'
import Eplt from './components/platoons/Eplt'
import Fplt from './components/platoons/Fplt'
import Dplt from './components/platoons/Dplt'
import Form from './components/forms/Form'

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
            <Route path="/tour1" component={Tour1} />
            <Route path="/tour2" component={Tour2} />
            <Route path="/tour3" component={Tour3} />
            <Route path="/officers" component={Officers} />
            <Route path="/eplt" component={Eplt} />
            <Route path="/fplt" component={Fplt} />
            <Route path="/dplt" component={Dplt} />
            <Route path="/add" component={Form} />
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
