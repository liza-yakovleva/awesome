import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { database } from '../../firebase'
import TestimonialsList from '../TestimonialsList/TestimonialsList'
import TestimonialForm from '../TestimonialsList/TestimonialForm/TestimonialForm'

import '../../common/style/base.css'
import './product-page.css'

import heart_dis from '../../common/img/heart-regular.svg'
import heart_like from '../../common/img/heart-solid.svg'


class ProductPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rootPartPath: '0/',
      data: [],
    }
  }
  
  componentDidMount() {
    database.ref('/0/').on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }
  render() {
    
    
      const  {match,
        isLiked = false,
        addProductToCart,
        productAddLike,
        productRemoveLike,
      } = this.props
    
      // console.log(this.state.data)
    const index = match.params.id-1

    if (this.state.data === null || this.state.data.length === 0) {
      return null
    }
    else {
      
      
      return (
        <>
          <section className="container page-contain">
            <div className="row col-12">
              <div className="item_container">
                {!this.state.data[index].name
                  ?
                  null
                  :
                  <h3 className="goods_title">{this.state.data[index].name}</h3>}
              {this.state.data[index].label
                ?
                  <Link to={`/products${this.state.data[index].label}`}> <span className="label">{this.state.data[index].label}</span>
                    <img src={this.state.data[index].img} alt={this.state.data[index].name} className="goods-image img-page" />
                </Link>
                :
                  <img src={this.state.data[index].img} alt={this.state.data[index].name} className="goods-image img-page" />
              }
              
                <p className="goods-description">{this.state.data[index].description}</p>
                <div className="goods-description long-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui fugiat eligendi rem praesentium aut molestias nemo, hic excepturi voluptatem veniam? Dolorem error facilis quos!</div>
              <div className="artc_art_ico_box">
                <div className="artc_art_num">
                  {isLiked ? this.state.data[index].likeCount + 1 : this.state.data[index].likeCount}
                </div>
                <div className="artc_dowland_ico">
                  <button className="btn_like" onClick={() => isLiked ? productRemoveLike(index+1) : productAddLike(index+1)}>
                    {isLiked
                      ?
                      <img src={heart_like} alt='like' />
                      :
                      <img src={heart_dis} alt='dislike'/>}
                  </button>
                </div>
              </div>
              <button onClick={() => addProductToCart(index+1, 1)} className="button goods-card-btn add-to-cart" data-id={index+1}>
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                <span className="button-price">${this.state.data[index].price}</span>
              </button>
              </div>
            </div>
            
               <TestimonialsList
            data={this.state.data}
            itemId={index+1}
            rootPartPath={this.state.rootPartPath} />
          <TestimonialForm
            data={this.state.data}
            itemId={index+1}
            testimonialsLength={this.state.data[index].testimonials!==undefined ? this.state.data[index].testimonials.length : 0}
            rootPartPath={this.state.rootPartPath} isComment />
          </section>
        </>
      )
    }
  }





}
  

  const mapStateToProps = (state, props) => ({
    isLiked: state.productLikeState[props.match.params.id],
  })

  const mapDispatchToProps = dispatch => ({
    productAddLike:(id) => dispatch({
      type: "LIKE",
      id
    }),
    productRemoveLike: (id) => dispatch({
      type: "DISLIKE",
      id
    }),
    addProductToCart:(id, count) => dispatch({
			type:"ADD_PRODUCT_TO_CART",
			id,
			count
	})
  })

export default connect
  (mapStateToProps, mapDispatchToProps)(ProductPage)

