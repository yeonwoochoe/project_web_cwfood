
import React,  { useEffect, useState }  from 'react';
import BestItemList from './BestItemList';
import axios from 'axios';
import '../style/Main.scss';


export default function BestItem() {

  const dataUrl = './data/BestPdList.json';
  const [dataList, setDataList] = useState([]);
  

  // data 불러오기
  useEffect(()=>{
    // axios.get(dataUrl).then(res => setDataList(res.data) )
    (async ()=>{
      const res = await axios.get(dataUrl);
          setDataList(res.data);
        
    })()
  }, [])

 
  
  return (
    
  <section id="bestPdBox">
    <h2 className="blind">인기상품</h2>
    <div className="container">
    <ul className="best_pd_inner">
  
    { dataList.map( (product,idx)=> 
    <BestItemList key={idx} 
    data={product}/> )
    } 
    </ul>
    <div className="best_main_title">
      <h3><span>Best Item</span>가장 많이 팔리는<br/>
          <strong>베스트상품</strong></h3>
        </div>
  </div>


  </section>
  )
}
