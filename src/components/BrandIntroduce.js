import React from 'react'
import { Link } from 'react-router-dom';

export default function BrandIntroduce() {
  return (
    <section id="brandBox">
    <h2 className="blind">브랜드소개</h2>
    <h3>청우식품</h3>
    <p>㈜청우식품은 ‘꿈과 사랑의 기업’이라는 창업이념을 바탕으로
지난 30여년간 입에 맞는 먹거리보다 몸에 좋은 먹거리를 위해 최선을 다해왔습니다.</p>
    <div className="direct_btn"><Link to="/">브랜드 소개 바로가기</Link></div>
  </section>
  )
}
