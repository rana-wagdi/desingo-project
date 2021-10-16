import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import PeopleContact from './components/Home/PeopleContact';
import Footer from './components/Home/Footer';
import OurCompany from "./components/pages/OurCompany/OurCompany";
import Location from './components/pages/Location/Location';
import Contact from './components/pages/contact/Contact';
import MainFooter from './sharedComponent/mainFooter';
import { useLocation } from 'react-router-dom';

import './App.scss'

const App =(props)=>{
//  const LocationDisplay = () => {
//     const location = useLocation()
// let location = useLocation();
// useEffect(
//   () => {
//     ga.send(['pageview', location.pathname])
//   },
//   [location]
// )
//     return <div>{location.pathname}</div>
//   }

    // const location = useLocation();

  return (
 
    <Router>
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
{/*       
        {props.location.pathname !== '/contact' && <Footer /> } */}
     
        {/* {location.pathname !== '/user' && <Footer /> } */}
        {/* {props.location.pathname !== '/contact' && <Footer /> } */}
     
       {/* {window.location.pathname === "/contact" ? null : <Footer />} */}
        {/* <Route path="/contact" exact component={Contact} />
        <Footer /> */} 
    
     
        <Footer />
        
      </div>
      {/* <Switch>
      <Route path="/contact" exact component={Contact} />
      {location.pathname !== '/contact' && <Footer /> }
      </Switch> */}
     
    </Router>
    
  );
}

export default App;
