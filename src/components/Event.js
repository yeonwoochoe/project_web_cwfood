import React from 'react'
import { Link } from 'react-router-dom';

export default function Event() {
  return (
    <article id="infoBox">
    <h2 className="blind">이벤트</h2>
    <div className="main_title">
    <h3><span>EVENT</span>
    <strong>이벤트&#38;기획전</strong>
    </h3>
    </div>
    <div className="containner">
      <div className="gift_area">
       <Link to="/"></Link>
      </div>
      <div className="event_area">
        <div className="new"> <Link to="/"></Link></div>
        <div className="quiz"><Link to="/"></Link></div>
      </div>

    </div>
    </article>
  )
}
