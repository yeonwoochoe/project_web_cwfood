import React from 'react'
import { FaFacebook,FaInstagram,FaYoutube,FaPhoneAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from './../cw_logo.svg';
import '../style/page/Footer.scss';

export default function Footer() {
  return (
    <footer id="footBox">
      <div className="container">
        <h2><span className="blind">site information</span></h2>
        <div className="foot_inner">
          <div className="info_area">
          <h3><Link to="/"><img src={logo} alt="로고" />
      <span className="blind">청우식품</span></Link></h3>
            <address>
              <p>본사 : 경기도 포천시 영중면 먼재길 129<br/>
서울사무소 : 서울특별시 성북구 성북로 11 청우빌딩 4층(한성대입구역 5번 출구) <br />
</p>
</address>
              <p className="copyright">Copyright 2019 CHEONGWOO CO.,LTD. ALL RIGHT RESERVED.</p>
   
          </div>
          <div className="service_area">
          <div className="cs_part">
            <h3><FaPhoneAlt className="call_icon"/>고객센터</h3>
            <p>tel:00-000-0000<span className="phone_number">00-000-0000</span></p>
            <p>평일 오전 9시~ 오후 6시<br />
              주말 및 공휴일 휴무</p>
          </div>
          <div className="sns_part">
            <ul>
              <li><Link to="/"><FaFacebook/><span className="blind">facebook</span></Link></li>
              <li><Link to="/"><FaInstagram/><span className="blind">instagram</span></Link></li>
              <li><Link to="/"><FaYoutube/><span className="blind">youtube</span></Link></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="nav_inner">
          <ul className="nav_area">
            <li><Link to="/">회사소개</Link></li>
            <li><Link to="/">고객센터</Link></li>
            <li className="bold"><Link to="/">개인정보처리방침</Link></li>
            <li><Link to="/">이메일무단수집거부</Link></li>
            <li className="uppercase"><Link to="/">hot-line</Link></li>
            <li><Link to="/">사이트맵</Link></li>
          </ul>
        </div>
      </div>    
    </footer>
  )
}
