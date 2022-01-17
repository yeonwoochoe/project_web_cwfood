// ProductLi.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductConList({data}) {
  console.log( data );
  return (  
    <li><Link to="/">
      <div className='img_detail'></div>
        <dl>
          <dt>{data.product}</dt>
          <dd className="pd_img" style={{backgroundImage:`url(${data.image})`}} ></dd>
          <dd>{data.narr}</dd>
      </dl>
      </Link>
    </li>
  )
  
  
}