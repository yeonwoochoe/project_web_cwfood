import React from 'react'
import { Link } from 'react-router-dom';
import '../style/page/SubBanner.scss';
// import subImg from '../image/5e428ed460ffc3881382.png'


export default function SubBanner() {
  return (
    <article id="subViewBox">
      <h2 className="blind">기획전</h2>
      <div className="container">
        <Link to="/"><img src= "/assets/banner/sample_sub_banner.jpg" alt="2022년 기획전"/></Link>

        {/* <Link to="/"><img src= {subImg}alt="2022년 기획전"/></Link>  */ }
      </div>
    </article>
  )
}
