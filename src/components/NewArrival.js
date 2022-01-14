
import React,  { useEffect, useState }  from 'react';
import NewArrivalList from './NewArrivalList';
import axios from 'axios';
import '../style/Main.scss';


export default function NewArrival() {
  const dataUrl = './data/NewPdList.json';
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
    <article id="newPdBox">
      <h2 className="blind">신상품</h2>
      <div className="main_title">
        <h3><span>New Arrival</span>
         새로운 맛 <strong>신상품</strong>
        </h3>
        </div>
        <ul className="pd_list">
        { dataList.map( (product,idx)=> <NewArrivalList  key={idx} data={product} />  )}      
        </ul>
  
    </article>
  )
}
