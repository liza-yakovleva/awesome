import React from 'react'
import {connect} from 'react-redux'
import '../../../common/style/base.css'
import {keys} from 'lodash'
import "./сart.css"
import cart from './cart.png'
import { Tooltip } from '@varld/popover'

const Cart = ({handleShowModalBin, productsInCart}) => {

	return (
		<>
			<Tooltip content="Жми сюда, чтобы откыть корзину с выбранными товарами!">
				<button onClick={() => handleShowModalBin()} className="button button-cart">
					 <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
					<span className="button-text">
						{   
                    keys(productsInCart).reduce((total, productId) => (
                        total +  productsInCart[productId]
                    ),0)
					}
					 ps </span>
					<img className="button-icon" src={cart} alt="icon: cart"/>
					<span className="button-text">Cart</span>
					<span className="button-text cart-count"></span>
				</button>	</Tooltip>
			
				
				</>
  )
}
const mapStateToProps = (state) => ({
	productsInCart:state.productsInCart
})


export default connect(
mapStateToProps, null
)(Cart)
