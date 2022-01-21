import React from 'react';
import images from "../../components/images";
import MainCarouselBanner from '../../components/MainCarouselBanner';
import NewArrival from '../../components/NewArrival';
import SubBanner from '../../components/SubBanner.js';
import BestItem from '../../components/BestItem.js';
import MdPickItem from '../../components/MdPickItem.js';
import BrandPdAbout from '../../components/BrandPdAbout.js';
import Event from '../../components/Event.js';
import BrandIntroduce from '../../components/BrandIntroduce.js';

function Home() {

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
  <>
  <MainCarouselBanner images={images}/>
  <NewArrival heading={newArrival}/>
  <BrandPdAbout/>
  <MdPickItem heading={mdPick}/>
  <SubBanner/>
  <BestItem/> 
  <BrandIntroduce/>
  <Event/>
  </>);
}

export default Home;
