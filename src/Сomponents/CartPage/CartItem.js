import React from 'react'
import '../../common/style/base.css'
import {connect} from 'react-redux'

const CartItem =({
  id,
  products,
  productCount,
  removeProductFromCart,
  changeProductQuantity }) => {
  
console.log(products.products[id-1])

  return (
  <>
      <tr className="cart-item" data-id={id}>
					<td>{products.products[id-1].name}</td>
					<td>{products.products[id-1].price}$</td>
					<td><button  onClick={()=>changeProductQuantity(products.products[id-1].id, productCount-1)} disabled={productCount<=1} className="cart-btn-minus">-</button></td>
					<td>{productCount}</td>
					<td><button onClick={()=>changeProductQuantity(products.products[id-1].id, productCount+1)} disabled={productCount>=10} className="cart-btn-plus">+</button></td>
					<td>{productCount*products.products[id-1].price}$</td>
					<td><button  onClick={()=>removeProductFromCart(products.products[id-1].id)} className="cart-btn-delete">x</button></td>
			</tr>
  </>
  )
}



const mapDispatchToProps = dispatch => ({
  
  removeProductFromCart:(id) => dispatch({
      type:"REMOVE_PRODUCT_FROM_CART",
      id
}),
changeProductQuantity:(id,count) =>dispatch({
  type:"CHANGE_PRODUCT_QUANTITY",
  id,
  count
})
})

export default connect(
  null,
  mapDispatchToProps
) (CartItem)