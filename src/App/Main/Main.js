import React from "react"
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import '../../common/style/base.css'
import "./main.css"

import arrow from '../../common/img/arrow.svg'
import ProductsShortListList from './Products/ProductsShortNewList'
import Tilt from 'react-parallax-tilt';
const Main = ({ addProductToCart, data })=> {
	



  return (
      <>
	<section id="body" className="special-offers container pt-5 pb-4">

		<div className="row mb-4">
	
	<Tilt
    className = "parallax-effect-glare-scale col-xl-6"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
				
					
				<div className="card card-1 mb-4">
					<h3 className="card-title">Fashion Month Ready in Capital Shop</h3>
					<p className="card-text">Bags & Acsessories & Lingerie & Sportswear & Beauty & Swimwear</p>
					<Link to = "/productsAll"
								className=" btn-all" > < button className="button button-bg" >
										<svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
						<span className="button-text view-all">View all</span>
						<img src={arrow}  className="button-icon"  alt="arrow"/>
							</button>
								</Link>
							</div>
					</Tilt>	
			
	

					
						<Tilt
    className = "parallax-effect-glare-scale col-xl-6"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
					>
						
				<div className="card card-2 mb-4">
					<h3 className="card-title text-light">Catch the Sun: Spring Break Styles From $5.99</h3>
					<p className="card-text text-light">Sweaters & Hoodies & Puffer Jackets & Coats and Jackets & Knit</p>
						< Link to = "/productsAll"
								className=" btn-all" > <button className="button button-bg" >
										<svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
						<span className="button-text view-all">View all</span>
						<img src={arrow} alt="arrow" className="button-icon"/>
							</button>
									</Link>
								</div> 
								</Tilt>
						



					
						<Tilt
    className = "parallax-effect-glare-scale col-xl-9 col-lg-6 mb-4"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
					>
					
				<div className="card card-3">
					<span className="label">Bestseller</span>
					<h3 className="card-title large">Poplin Top <br/> With Sleeve Bow <br/>
					</h3>
					<p className="card-text large">Poplin top with roll neckline, long sleeves</p>
							<button onClick={() => addProductToCart(2, 1)} className="button add-to-cart button-bg" data-id="002">
									<svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
						<span className="button-price">$129</span>
						<span className="button-text">Shop now</span>
					</button>
							</div>
						
			
	</Tilt>

				
					<Tilt
    className = "parallax-effect-glare-scale col-xl-3 col-lg-6 mb-4"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
					>
						
				<div className="card card-4">
					<h3 className="card-title  mw-160">Printed Shirt with a Bow</h3>
					<p className="card-text ">Pink/Sky Blue/Yellow</p>
							<button onClick={() => addProductToCart(9, 1)} className="button add-to-cart button-four button-bg" data-id="009">
									<svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
						<span className="button-price">$119</span>
						<span className="button-text">Shop now</span>
					</button>
							</div>
							
		
</Tilt>
		</div>

   < div data-aos = "zoom-in" >
		<div className="row align-items-center mb-4">
			<div className="col-9">
				<h2 className="section-title">New Arrival</h2>
					</div>
			
			
			<Link to = "/productsAll" className = "col-3 d-flex justify-content-end  btn-all">
				 <span className = "more view-all" >View All</span>
				</Link>
		
					</div>
					
				<ProductsShortListList data={data} />
				</div>
	</section>
   </>
    )
}
	

const mapDispatchToProps = dispatch => ({
	addProductToCart:(id, count) => dispatch({
			type:"ADD_PRODUCT_TO_CART",
			id,
			count
	})
})



export default connect(
	null,
	mapDispatchToProps
) (Main)