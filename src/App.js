import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import PeopleContact from './components/Home/PeopleContact';
import Footer from './components/Home/Footer';
import OurCompany from "./components/pages/OurCompany/OurCompany";
import Location from './components/pages/Location/Location';

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
        <Route path="/ourCompany" exact component={OurCompany} />
        <Route path="/location" exact component={Location} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
