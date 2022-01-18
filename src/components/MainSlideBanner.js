import '../style/Main.scss';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MainSlideBanner(){

  const listData = ['광고1', '광고2', '광고3', '광고4','광고5'];
  listData.unshift(listData[listData.length-1]);

// Container
const sliderRef = useRef();
const [mobileTypes, setMobileTypes] = useState(["좌측 카드","중앙 카드","우측 카드"]);



useEffect(() => {


  let walk;
  let startX;
  let scrollValue;

  function slideTouchStart (e){
    startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollValue = sliderRef.current.scrollLeft;
  }
  
  // 터치가 진행되는 동안, walk값이 변한다.
  function slideTouchMove (e){
    e.preventDefault()
    
    // 0.9를 곱한 이유는, 카드의 너비가 화면보다 작았기 때문에, 드래그로 화면을 초과하는 것을 막았다.
    walk = (e.touches[0].pageX - sliderRef.current.offsetLeft - startX) * 0.9;
    
    // 이를 scrollLeft에 적용시킴으로써 실질적으로 드래그되는 변화량을 줄였다.
    sliderRef.current.scrollLeft = scrollValue - walk;
  }

  function slideTouchEnd (){
    if(walk) {
      sliderRef.current.scrollLeft = (window.innerWidth*0.75 - (window.innerWidth - window.innerWidth*0.75) / 2);
      if (walk < 0) {
      
        // 변위가 너무 작으면, 이동하지 않는다.
        if (walk < -120) {
          setMobileTypes((state) => state.slice(1, 3).concat(state[0]))
        }
      } 
      else if (walk > 0) {
        if (walk > 120) {
          setMobileTypes((state) => [state[2]].concat(state.slice(0, 2)))
        }
      }
    }
    walk = 0;
  }
  
  function slideTouchCancel (){
    if(walk) {
      sliderRef.current.scrollLeft = (window.innerWidth*0.75 - (window.innerWidth - window.innerWidth*0.75) / 2);
      if (walk < 0) {
        if (walk < -120) {
          setMobileTypes((state) => state.slice(1, 3).concat(state[0]))
        }
      } else if (walk > 0) {
        if (walk > 120) {
          setMobileTypes((state) => [state[2]].concat(state.slice(0, 2)))
        }
      }
    }
    walk = 0;
  }
  


  

  sliderRef.current.addEventListener('touchstart', slideTouchStart);
  sliderRef.current.addEventListener('touchend', slideTouchEnd);
  sliderRef.current.addEventListener('touchmove', slideTouchMove);
  sliderRef.current.addEventListener('touchcancel', slideTouchCancel)

  // 해제를 안하면 warning이 뜨니 해제도 작성했다.
  return () => {if(sliderRef.current)sliderRef.current.removeEventListener('touchmove',slideTouchMove);}
}, [])




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

          </ul>
        </div>
      <div className="slide_btn">
        <button type="button" className="next">다음내용</button>
        <button type="button" className="prev">이전내용</button>
      </div>
      <div className="view_content">
        <ul>
        {listData.map( (list, idx)=>
           <li key={idx}>
          <Link to="/"><span>{list}</span></Link>
           </li> )}

        </ul>
      </div>
    </div> 
  </section>
  )
}