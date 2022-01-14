
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainSlideBanner from './components/MainSlideBanner';
import NewArrival from './components/NewArrival';
import SubBanner from './components/SubBanner.js';
import BestItem from './components/BestItem.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <MainSlideBanner/>
      <NewArrival/>
      <SubBanner/>
      <BestItem/>
    </div>
  );
}

export default App;
