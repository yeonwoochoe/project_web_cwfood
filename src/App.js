
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainSlideBanner from './components/MainSlideBanner';
import NewArrival from './components/NewArrival';
import SubBanner from './components/SubBanner.js';
import BestItem from './components/BestItem.js';
import MdPickItem from './components/MdPickItem.js';
import BrandPdAbout from './components/BrandPdAbout.js';
import Event from './components/Event.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import './App.css';


function App() {
  
  const newArrival = {
    mainTitle: 'New Arrival',
    subTitle: '새로운 맛',
    subText: '신상품'
  }


  const mdPick = {
    mainTitle: 'MD`s Pick',
    subTitle: '엠디들이 고른 ',
    subText: '추천상품'
  }


  return (
    <div className="App">
      <Header/>
      <Nav/>
      <MainSlideBanner/>
      <NewArrival heading={newArrival}/>
      <BrandPdAbout/>
      <MdPickItem heading={mdPick}/>
      <SubBanner/>
      <BestItem/> 
      <News/>
      <Event/>
      <Footer/>
    </div>
  );
}

export default App;
