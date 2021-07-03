import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import PeopleContact from './components/Home/PeopleContact';
import Footer from './components/Home/Footer';
import OurCompany from './components/pages/OurCompany'

import './App.scss'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home />
          <Main />
          <PeopleContact />
        </Route>
        {/* <Route path="/" exact component={} /> */}
        <Route path="/ourcompany" exact component={OurCompany} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
