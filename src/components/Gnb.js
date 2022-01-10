
import styled from 'styled-components';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Gnb (){

  let Maintitle = styled.div
  `
  color : #e30613
  `

  return (


  <div className="gnb">
    <div className="gnb_category">
    <ul className="category_inner">
      <li>
      <Maintitle className="gnb_title"> <Link to="/ "><FaAlignJustify className="menu_icon" size="16" color="#e30613"/>청우식품</Link></Maintitle>

      </li>

      <li>
      <div className="gnb_title"><Link to="/">회사소개</Link></div>

      </li>
      <li>
        <div className="gnb_title"><Link to="/">청우소식</Link></div>

      </li>
      <li>
        <div className="gnb_title"><Link to="/">이벤트</Link></div>

      </li>
      <li>
        <div className="gnb_title"><Link to="/">인재채용</Link></div>

      </li>
    </ul>
  </div>

  <div className="gnb_list">

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