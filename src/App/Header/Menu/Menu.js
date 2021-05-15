import React from "react"
import "./menu.css"
import '../../../common/style/base.css'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import { keys } from 'lodash'
import heart_like from '../../../common/img/heart-solid.svg'
const Menu = ({productLikeState}) => {
  return (
   	  
					<>
					 <li className="navigation-item">
							<Link to="/productsWomen" className="navigation-link" data-field="gender">Womens</Link>
						</li>
						<li className="navigation-item">
							<Link to="/productsMen"
							className = "navigation-link"
							data-field= "gender"> Mens </Link>
						</li>
						<li className="navigation-item">
							<Link to="/productsClothing" className="navigation-link" data-field="category">Clothing</Link>
						</li>
						<li className="navigation-item">
							<Link to="/productsAccessories" className="navigation-link" data-field="category">Accessories</Link>
						</li>
						<li className="navigation-item">
							<Link to="/productsShoes" className="navigation-link" data-field="category">Shoes</Link>
						</li>
						<li className="navigation-item">
							<Link to="/productsAll" className="navigation-link view-all" >All</Link>
			</li>
			{keys(productLikeState).length !== 0 ?
						<li className="navigation-item">
							<Link to="/productsFavorites" className="navigation-link "><img src={heart_like} alt='like' width="13"/></Link>
				</li>
				: <li className="navigation-item">
							<Link to="/productsFavorites" className="navigation-link "></Link>
				</li>}
					</>
				
  )
}



const mapStateToProps = (state) => ({
	productLikeState: state.productLikeState
})



export default connect(
	mapStateToProps,
	null
) (Menu)
