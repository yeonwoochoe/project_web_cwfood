
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContent from './ProductContent.js';
import '../style/Main.scss';
export default function BrandPdAbout() {

  const [num, setNum] = useState(0);
  const [PdData, setPdData] = useState([]);

  useEffect(()=>{
    axios.get('./data/ProductData.json')
    .then(res=>  setPdData(res.data) )
  }, []);

  const fnTab = (e, i)=>{
    e.preventDefault();
    setNum(i);
  }

  const code = PdData.filter( (data, index) => index === num );  

  // ------------------------------------------

  return (
    <article id="BrandPdBox">
    <div className="main_title">
    <h3><span>Brand Goods</span>
    청우식품을 <strong>소개합니다!</strong>
    </h3>
    </div>
      <div className="btn_part">
        { PdData.map((data,idx)=> 
            <button 
              key={data.pageTitle} type="button" onClick={(e)=> fnTab(e, idx)}>
                {data.pageTitle}
            </button>) }
      </div>
      {code.map( (data,idx) => <ProductContent key={idx} data={data} /> )}
    </article>
  )
}
