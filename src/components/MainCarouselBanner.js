import images from "./images";
import React from 'react';
import CenterMode from './CenterMode';

export default function MainCarouselBanner() {
  return (
    <section id="viewBox">
      <h2 className="blind">광고영역</h2>
        <CenterMode images={images}/>
      
    </section>
  )
}
