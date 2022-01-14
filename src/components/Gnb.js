import React,{useState} from 'react';
import { FaAlignJustify } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

// let Maintitle = styled.div
// `
// color : #e30613
// `


export default function Gnb (){

  const [isOpen, setOpen] = useState(true);  // 메뉴의 초기값을 true 설정
  const toggleMenu = () => {
    setOpen(isOpen => !isOpen); // on,off 개념 boolean
    }

  const gnbTitle = [
      {content:"청우식품", href:"/"},
      {content:"회사소개", href:"/"},
      {content:"청우소식", href:"/"},
      {content:"이벤트", href:'/' },
      {content:"인재채용" , href:'/'}
    ];
    
  return (


  <div className="gnb">
    <div className={isOpen ? "gnb_category" : "gnb_category on"} onClick={()=>toggleMenu()}>
    <ul className="category_inner"  >
    { gnbTitle.map( (nav, idx)=>{
      return (
        <li key={idx}>
          <div className="gnb_title">
          <NavLink to={nav.href}> 
          {idx===0 && <FaAlignJustify className="menu_icon" />} {nav.content}
          </NavLink>
        </div>
        </li>
         )
      }) 
    }

    </ul>
  </div>

  <div className={isOpen ? "gnb_list" : "gnb_list on"}>
    <ul className="list_inner">
          <li><Link to="/">파이/쿠키</Link></li>
          <li><Link to="/">비스킷</Link></li>
          <li><Link to="/">젤리</Link></li>
          <li><Link to="/">캔디</Link></li>
          <li><Link to="/">전통과자</Link></li>
    </ul>
    <ul className="list_inner">
          <li><Link to="/">회사연혁</Link></li>
          <li><Link to="/">경영윤리</Link></li>
          <li><Link to="/">오시는길</Link></li>  
        </ul>

        <ul className="list_inner">
          <li><Link to="/">공지사항</Link></li>
          <li><Link to="/">새소식</Link></li>
        </ul>
        <ul className="list_inner">
          <li><Link to="/">이벤트</Link></li>
          <li><Link to="/">기획전</Link></li>
        </ul>

        <ul className="list_inner">
          <li><Link to="/">직무소개</Link></li>
          <li><Link to="/">채용공고</Link></li>
          </ul>
    </div>

  </div>
  )
}