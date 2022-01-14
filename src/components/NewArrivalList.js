import React from 'react'
import {Link} from 'react-router-dom';
import '../style/NewArrival.scss';
import ShoppingBag from '../image/icon/shopping-bag.svg'

export default function NewArrivalList({data}) {
  return (
    <li>
    <div className="thumbnail">
      <div className="promotion">{data.promotion}</div>
      <div className="pd_img" style={{backgroundImage:`url(${data.image})`}} > <div/>
      <div className="shop_bag_icon" style={{backgroundImage:`url(${ShoppingBag})`}}></div>
    </div>
    </div>
    <div className="description">
      <div className="best_pd_name">
        <Link to="/">{data.title}</Link>
      </div>
      <div className="best_pd_price">
      <span className="best_pd_sale_price">
        <span className="blind">할인률</span>
        {data.dc}
      </span>
        <span className="best_pd_p_dc">
        <span className="blind">할인가</span>
        {data.salePrice}
      </span>
      <span className="best_pd_per_price">
        <span className="blind">정가</span>
        {data.fixPrice}
      </span>
      </div>
    </div>
  </li>
  )
}
