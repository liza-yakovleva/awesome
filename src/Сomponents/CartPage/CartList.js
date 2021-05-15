import React,{useState} from 'react'
import { Tooltip } from '@varld/popover'
import {connect} from 'react-redux'
import '../../common/style/base.css'
import {keys} from 'lodash'
import CartItem from '../CartPage/CartItem'


const CartList = ({ products,
	productsInCart,
	removeAllProductFromCart,
	 modalBin=false,
	  closeModalBin,
	}) => {
	
	const [newOrder,setNewOrder] = useState({
		name:"",
		tel:"",
		email:"" 
})

const handleNameChange = (e) => (
	setNewOrder((value)=> ({
			...value,
			name:e.target.value
	}))
)

const handleEmailChange = (e) => (
	setNewOrder((value)=> ({
			...value,
			email:e.target.value
	}))
)
const handleTelChange = (e) => (
	setNewOrder((value)=> ({
			...value,
			tel:e.target.value
	}))
)

const onSend = (e) => {
	e.preventDefault()
	closeModalBin()
	// alert(`Уважаемый(я) ${newOrder.name}! Ваш контактный телефон ${newOrder.tel}. Ваше заказ успешно оформлен.Проверьте Ваш email ${newOrder.email}`)
	removeAllProductFromCart()
}



  return (
      <>
<div 
className=
{modalBin ? "overlay show":"overlay"}
 id="modal-cart">
		<div className="modal">
			<header className="modal-header">
				<h2 className="modal-title">Cart</h2>
				<Tooltip content="Жми сюда, чтобы закрыть модальное окно!">
					<div>
					<button onClick={()=> closeModalBin()} className="modal-close">x</button>
					</div>
				</Tooltip>
			</header>

			<table className="cart-table">
				<colgroup>
					<col className="col-goods"/>
					<col className="col-price"/>
					<col className="col-minus"/>
					<col className="col-qty"/>
					<col className="col-plus"/>
					<col className="col-total-price"/>
					<col className="col-delete"/>
				</colgroup>
				<thead>
				<tr>
					<th>Good(s)</th>
					<th>Price</th>
					<th colSpan="3">Qty.</th>
					<th colSpan="2">Total</th>
				</tr>
				</thead>
				<tbody className="cart-table__goods">

				{   
                keys(productsInCart).map((id) => (
                    <CartItem
										
                        id={id}
                        products={products}
                        productCount={productsInCart[id]}
                        
                    />
                ))
            }


				</tbody>
				<tfoot>
				<tr>
					<th colSpan="2">Total:</th>
					<th colSpan="3">{   
                    keys(productsInCart).reduce((total, productId) => (
                        total +  productsInCart[productId]
                    ),0)
					} ps</th>
					<th className="card-table__total" colSpan="2"> 
					{   
                    keys(productsInCart).reduce((total, productId) => (
                        total + (products.products[productId-1].price * productsInCart[productId])
                    ),0)
					}
                $</th>
				</tr>
				</tfoot>

			</table>


					<form action="mail.php" method="POST" enctype="multipart/form-data"
						onSubmit={onSend} className="modal-form">
				<label>
					<input className="modal-input"
					 type="text"
					  placeholder="Имя"
						 name="user_name"
						 value={newOrder.name}
						 onChange={handleNameChange}
						 />
				</label>
				<label>
					<input className="modal-input"
					 type="tel"
					  placeholder="+380-XX-XXX-XX-XX"
						 name="user_tel"
						 value={newOrder.tel}
						 onChange={handleTelChange}
						 />
				</label>
				<label>
					<input className="modal-input"
					 type="email" placeholder="email"
					  name="emailCustomer"
						value={newOrder.email}
						onChange={handleEmailChange}
							/>
						
				</label>
				<button  type="submit" className="button cart-buy">
					<span className="button-text">Checkout</span>
				</button>
			</form>


		</div>
	</div>
  </>
    )
  }

	const mapStateToProps = (state) => ({
		productsInCart: state.productsInCart,
		products:state.products,
})

const mapDispatchToProps = dispatch => ({
  removeAllProductFromCart:(id) => dispatch({
      type:"REMOVE_ALL_PRODUCT_FROM_CART",
      id
})
})



export default connect(
	mapStateToProps, mapDispatchToProps
)(CartList)





