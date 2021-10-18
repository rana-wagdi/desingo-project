import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { browserHistory } from 'react-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import PeopleContact from './components/Home/PeopleContact';
import Footer from './components/Home/Footer';
import OurCompany from "./components/pages/OurCompany/OurCompany";
import Location from './components/pages/Location/Location';
import Contact from './components/pages/contact/Contact';
import MainFooter from './sharedComponent/mainFooter';
import { createBrowserHistory } from "history";
import ScrollTop from './ScrollTop';
import './App.scss'

const App =()=>{
  const history = createBrowserHistory();


  return (
    // onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}
    <Router >
    <ScrollTop>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home />
          <Main />
          <PeopleContact />
          <MainFooter />
        </Route>
        <Route path="/ourCompany" exact component={OurCompany} />
        <Route path="/location" exact component={Location} />
        <Route path="/contact" exact component={Contact} />
    
     
        <Footer />
        
      </div>

</ScrollTop>
     
    </Router>
    
  );
}

export default App;
