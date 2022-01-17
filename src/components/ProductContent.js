// ProductContent.js

import ProductConList from './ProductConList.js'

export default function ProductContent({data}) {
  const list = data;
  return (
    <div className="content_part">      
      <h2>{list.pageTitle}</h2>
      <p>{list.pageContent}</p>

      <ul>
        { list.products.map((card,idx)=> <ProductConList key={idx} data={card}/> )}
      </ul>
    </div>
  )
}

