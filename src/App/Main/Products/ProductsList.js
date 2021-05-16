import React from 'react'
import ProductsListItem from './ProductsListItem'
import {connect} from 'react-redux'
import { keys } from 'lodash'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductsList = ({ sort, productLikeState, data }) => {
  AOS.init();
     return (
       <>
       
         	<section className = "long-goods">
		<div className = "container"
		data-aos = "zoom-in" >
			<div className="row align-items-center mb-4">
				<div className="col-12">
					<h2 className="section-title">Category</h2>
				</div>
			</div>
         <div className = "row long-goods-list" >
 {
                 sort !== "all" ?
                   
                   
             data.filter((item) =>(keys(productLikeState).find(i => { return +i ===item.id})|| item.gender === sort || item.category === sort || item.label === sort)).map(({
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
             :

             data.map(({
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
           </div>
           </section>
           
 </>
 )
}

const mapStateToProps = (state) => ({
	productLikeState: state.productLikeState
})



export default connect(
	mapStateToProps,
	null
) (ProductsList)
