import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Home/Main';
import PeopleContact from './components/Home/PeopleContact';
import Footer from './components/Home/Footer';

import './App.scss'
function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <Main />
    <PeopleContact />
    <Footer />
    </div>
  );
}

export default App;
