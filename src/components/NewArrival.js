
import React,  { useEffect, useState }  from 'react';
import ProductList from './ProductList';
import axios from 'axios';
import '../style/page/NewArrival.scss';


export default function NewArrival(props) {
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
      <h3><span>{props.heading.mainTitle}</span>
      {props.heading.subTitle}<strong>{props.heading.subText}</strong>
      </h3>
    </div>
        <ul className="pd_list">
        { dataList.map( (product,idx)=> <ProductList  key={idx} data={product} />  )}      
        </ul>
  
    </article>
  )
}
