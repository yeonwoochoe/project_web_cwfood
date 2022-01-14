import React from 'react'
import {Link} from 'react-router-dom';
import ShoppingBag from '../image/icon/shopping-bag.svg'




export default function BestItemList({data}) {


  return (
    <li>
      <div className="pd_list_area">
      <div className="thumbnail"> 
      <div className="description">
        <div className="best_pd_name">
          <Link to="/">{data.title}{data.subTitle}
          </Link>
        </div>
      </div>
      <div className="pd_img" style={{backgroundImage:`url(${data.image})`}}  >
      <div className="shop_bag_icon" style={{backgroundImage:`url(${ShoppingBag})`}}></div>

      </div>
    </div>
    </div> 
  </li>
  )
}
