
import React from 'react'
import '../style/NewArrival.scss';

export default function NewArrival() {
  return (
    <article id="newPdBox">
      <h2 className="blind">신상품</h2>
      <div className="main_title">
        <h3><span>New Arrival</span>
         새로운 맛 신상품
        </h3>
        </div>
        <ul className="pd_list">
          <li>
            <div className="thumbnail">
              <div className="promotion"></div>
              <div className="img"> <div/>
              <div className="shop_bag_icon"></div>
            </div>
            </div>
            <div class="description">
              <div class="best_pd_name">
                <a href="/">[청우식픔] 찰떡 초코파이</a>
              </div>
              <div class="best_pd_price">
              <span class="best_pd_sale_price">
                <span class="blind">할인률</span>
               20&#37;
              </span>
                <span class="best_pd_p_dc">
                <span class="blind">할인가</span>
                8,900원
              </span>
              <span class="best_pd_per_price">
                <span class="blind">정가</span>
               9,500원
              </span>


              </div>
            </div>
          </li>
        </ul>
  
    </article>
  )
}
