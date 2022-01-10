import Searchbox from './Searchbox';
import Unb from './Unb';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import '../style/Header.scss';

import logo from './../cw_logo.svg';

export default function Header(){


return (
  <header id="headBox">
    <div className="container">
      <h1><Link to="/"><img src={logo} alt="" />
      <span className="blind">청우식품</span></Link></h1>
      <Searchbox/>
      <Unb/>
    </div> 
    <nav className="navigation">
      <h2 className="blind">global navigation</h2>
        <div className="gnb">
          <ul className="gnb_wrap">
            <li>
            <div className="gnb_title"><Link to="/"><FaAlignJustify className="menu_icon" size="16" color="#f00"/>청우식품</Link></div>
              <ul className="gnb_list">
                <li><Link to="/">파이/쿠키</Link></li>
                <li><Link to="/">비스킷</Link></li>
                <li><Link to="/">젤리/캔디</Link></li>
                <li><Link to="/">전통과자</Link></li>

              </ul>
            </li>
            <li>
            <div className="gnb_title"><Link to="/">회사소개</Link></div>
              <ul className="gnb_list">
                <li><Link to="/">회사연혁</Link></li>
                <li><Link to="/">경연윤리</Link></li>
                <li><Link to="/">오시는길</Link></li>  
              </ul>
            </li>
            <li>
              <div className="gnb_title"><Link to="/">news</Link></div>
              <ul className="gnb_list">
                <li><Link to="/">청우소식</Link></li>
              </ul>
            </li>
            <li>
              <div className="gnb_title"><Link to="/">event</Link></div>
              <ul className="gnb_list">
                <li><Link to="/">프로모션</Link></li>
                <li><Link to="/">이벤트기획전</Link></li>
              </ul>
            </li>
            <li>
              <div className="gnb_title"><Link to="/">인재채용</Link></div>
              <ul className="gnb_list">
                <li><Link to="/">직무소개</Link></li>
                <li><Link to="/">채용공고</Link></li>
                </ul>
            </li>
          </ul>
        </div>
      </nav>
  </header>

  )
}