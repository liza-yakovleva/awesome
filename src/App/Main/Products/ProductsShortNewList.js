import React from 'react'
import ProductsListItem from './ProductsListItem'


import './product-list-item.module.css'

const ProductsShortListList = ({data}) => {
     return (
       <>
        <div className="short-goods row">
 {(data.filter(item => item.label === "New").slice(0, 4)).map(({
           label,
           img,
           name,
           description,
           id,
           price,
           likeCount
         }) => (
<div className='col-lg-3 col-sm-6' key={id}>
<ProductsListItem
                                id={id}
                                label={label}
                                img={img}
                                name={name}
                                description={description}
                                price={price}
                                likeCount={likeCount}
     />
     </div>
   ))
  }
</div>
 </>
 )
}

export default ProductsShortListList