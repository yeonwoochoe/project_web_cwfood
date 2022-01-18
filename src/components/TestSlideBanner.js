import '../style/Main.scss';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MainSlideBanner(){


  const listData = ['광고1', '광고2', '광고3', '광고4','광고5'];
  listData.unshift(listData[listData.length-1]);


  const [num, setNum] = useState(0);
  const checkRef = useRef('next'); // {current:'next'}

  const initialStyle = {
    position:'relative', left:'-114%',    
    marginLeft: `${num * -1040}px`
  }  

  const [slideStyle, setSlideStyle] = useState(initialStyle);

  useEffect (()=>{ 
      (checkRef.current ==='next') ? fnSlideNext() : fnSlidePrev();
  },[num])



  const fnSlideNext = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== 0) ? 'margin 500ms ease' : 'none',
      animation : (num === 0) ? 'firstSlide 500ms ease 1' : 'none',});
  };

  const fnSlidePrev = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== listData.length-2) ? 'margin 500ms ease':'none',
      animation : (num === listData.length-2 ) ? 'lastSlide 500ms ease 1':'none'
    });
  };

  // const viewData = listData.filter( (list,idx) => idx === num );
  const fnNextSlide = ()=> { 
    setNum( num >= listData.length-2 ? 0 : num + 1 ); // useState값 변경 -> Main()
    // setCheck('next'); // useState값 변경 -> Main()
    checkRef.current = 'next';
  }

  const fnPrevSlide = ()=> { 
    setNum( num <= 0 ? listData.length-2 : num - 1 ); 
    // setCheck('prev'); 
    checkRef.current = 'prev';
  }




  return (
  <section id="viewBox">
     <h2 className="blind">광고영역</h2>
    <div className="container">
        <div className="indi_container">
          <ul className="indicator blind_wrap" >
          {listData.map( (list, idx)=>
           <li key={idx}>
             <Link to="/"><span className="blind">{list}</span></Link>
           </li> )}
            {/* <li className="action"><Link to="/"><span>1</span></Link></li>
            <li><Link to="/"><span>2</span></Link></li>
            <li><Link to="/"><span>3</span></Link></li>
            <li><Link to="/"><span>4</span></Link></li>
            <li><Link to="/"><span>5</span></Link></li>  */}
          </ul>
        </div>
      <div className="slide_btn">
        <button type="button" className="next" onClick={fnNextSlide} >다음내용</button>
        <button type="button" className="prev"onClick={fnPrevSlide} >이전내용</button>
      </div>
      <div className="view_content">
        <ul style={slideStyle}>
        {listData.map( (list, idx)=>
           <li key={idx}>
          <Link to="/"><span>{list}</span></Link>
           </li> )}
          {/* <li><button type="button">광고 1</button></li>
          <li><button type="button">광고 2</button></li>
          <li><button type="button">광고 3</button></li>
          <li><button type="button">광고 4</button></li>
          <li><button type="button">광고 5</button></li> */}
        </ul>
      </div>
    </div> 
  </section>
  )
}