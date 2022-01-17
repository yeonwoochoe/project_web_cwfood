import React,{useState} from 'react';
import styled from 'styled-components';
import { FaAlignJustify } from "react-icons/fa";
import {Link} from 'react-router-dom';

let Maintitle = styled.div
`
color : #e30613
`

export default function Gnb (){

  const [isOpen, setOpen] = useState(true);  // 메뉴의 초기값을 true 설정
  const toggleMenu = () => {
    setOpen(isOpen => !isOpen); // on,off 개념 boolean
    }
  


  return (


  <div className="gnb">
    <div className={isOpen ? "gnb_category" : "gnb_category on"} onClick={()=>toggleMenu()}>
    <ul className="category_inner"  >
      <li>
      <Maintitle className="gnb_title" > <Link to="/ "><FaAlignJustify className="menu_icon" size="16" color="#e30613"/>청우식품</Link></Maintitle>

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
    <div>
            <div className="news_box">
        <Link to="/" >
        <div className="action">
        <dl>
          <dt>과자의 명가 청우식품<br/> 제과업계 최초 GMP획득</dt>
          <dd>㈜청우식품은 선진화된 생산 시스템을 바탕으로 과자의 명가로 우뚝 선 회사다.
박윤구 회장이 1964년 설립한 원풍제과가 청우식품의 전신이다.<br/> 초창기엔 호두과자를 생산하면서 사업을 전개했다.<br/>
이후 지금까지 50년 이상을 과자류 제조업에 한 우물을 파왔다.<br/>

박 회장은 “국내 굴지의 대기업에 비하면 청우는 후발주자”라며 몸을 낮췄다.<br/>

그러나 박 회장에겐 절대 양보할 수 없는 원칙이 있다.<br/>

바로 품질 좋은 제품을 생산하겠다는 의지다. 50년 넘게 이 원칙을 지켜왔다.<br/>

대기업과의 경쟁 속에서도 청우식품의 경쟁력을 가지고 성장할 수 있었던 원동력이기도 하다.<br/>
지금도 박 회장은 현장중심 경영을 해오고 있다. 해외시장 전시회 참여와 새로운 기계설비 도입 등을 주도해왔다.<br/>
지금도 사업장을 직접 꼼꼼하게 체크하면서 열정을 보이는 경영인이다.
업계의 마당발로서 열정적으로 사업을 확장한 덕분에 거래처를 다수 확보할 수 있었다.<br/>
회사의 주요 거래처로는 하이퍼, SSM,편의점, 농협하나로마트 등이 있다.<br/>
글로벌 시장에서도 한국 과자의 저력을 널리 알리는 기업이다.<br/>
중국, 미국, 일본, 베트남, 싱가포르 등 10여 개국에 수출하고 있다.<br/>
현재 청우식품은 시장 트렌드에 맞는 프리미엄 제품개발 및 확대에 박차를 가하고 있다.<br/>
청우식품은 제과업계 첫 GMP(우수제품관리기준) 인증 획득과 HACCP를 도입한 최첨단 시설의 공장으로 경쟁력을 보여주고 있다.
박 회장은 “직원들이 편하게 일할 수 있는 기업, 직원들의 자녀들도 취업하고 싶어 하는 기업,
즉 연속성 있는 기업을 만드는 게 목표”라며 “100년 이상 장수기업을 만들 것”이라고 포부를 밝혔다.</dd>
        </dl>
        
        </div>
        </Link>
      </div>
    </div>
  </div>
  )
}