import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom'
import Results from '../Results/Results';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Results />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;


