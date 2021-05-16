import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import s from './product-list-item.module.css'
import heart_dis from '../../../common/img/heart-regular.svg'
import heart_like from '../../../common/img/heart-solid.svg'
import Tilt from 'react-parallax-tilt';
const ProductListItem = ({
	isLiked = false,
	productAddLike,
	productRemoveLike,
	addProductToCart,
	label,
	img,
	name,
	description,
	id,
	price,
	likeCount }) => {

	return (
		<>
			<Tilt
    className="parallax-effect-glare-scale"
    perspective={800}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
			<div className="goods-card">
			{
					label
						?<>
						<Link to={`/products${label}`}>
							 <span className="label"> {label} </span>
						</Link>
							<Link to={`/product/${id}`}>
									<img src={img} alt={name} className="goods-image" />
							</Link>
						</>
		:
		<Link to={`/product/${id}`}>
			<img src={img} alt={name} className="goods-image" />
		</Link>
}

			<h3 className="goods-title">{name.slice(0,19)}</h3>
			<p className="goods-description">{description.slice(0,19)}</p>
		
	
	
				<div className={ s.artc_art_ico_box}>
					<div className={ s.artc_art_num}>
                    {isLiked ? +likeCount + 1 : +likeCount}
                  </div>
					<div className={s.artc_dowland_ico}>
						<button className={s.btn_like} onClick={() => isLiked ? productRemoveLike(id) : productAddLike(id)}>
                      {isLiked ? (<img src={heart_like} alt='like'></img>
                      ) : (
                        <img src={heart_dis} alt='dislike'></img>
                      )}
      </button>
			</div>
      </div>									
			<button onClick={()=>addProductToCart(id, 1)} className="button goods-card-btn add-to-cart" data-id={id}>
			<svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
				<span className="button-price">${price}</span>
			</button>
			</div>
			</Tilt>
			</>
			
	)
}

const mapStateToProps = (state, {id}) => ({
	isLiked: state.productLikeState[id]
})

const mapDispatchToProps = dispatch => ({

	addProductToCart:(id, count) => dispatch({
			type:"ADD_PRODUCT_TO_CART",
			id,
			count
	}),

	productAddLike:(id) => dispatch({
		type: "LIKE",
		id
	}),

	productRemoveLike: (id) => dispatch({
		type: "DISLIKE",
		id
	})

})


export default connect(
	mapStateToProps,
	mapDispatchToProps
) (ProductListItem)



