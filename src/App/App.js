import React, {Component}  from "react"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Slider from "./Slider/Slider"
import {Route} from "react-router-dom"
import "../common/style/reset.css"
import "../common/style/base.css"
import CartList from '../Сomponents/CartPage/CartList'
import ProductsList from './Main/Products/ProductsList'
import ProductPage from  '../Сomponents/ProductPage/ProductPage'
import { database } from '../firebase'
import {connect} from 'react-redux'



class App extends Component {
constructor(props) {
    super(props)
    this.state = {
      rootPartPath: '0/',
      data: [],
      modalBin:false,
    }
  }
  
  

   componentDidMount() {
    database.ref('/0/').once('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
    
    
  }
  
handleShowModalBin = () => {
  this.setState((s)=>({
    modalBin:!s.modalBin,
  }))
}

closeModalBin = () => {
    this.setState({
    modalBin:false
  })
}


  render()
  
  {
   
  this.props.addProducts(this.state.data)
  return (
    <>
      <span id="start"/>
      <Route path="/" render={() => <Header handleShowModalBin={this.handleShowModalBin} data={this.state.data}/>}/>
      <Route path="/" exact component={Slider}/>
      <Route path="/" exact render={() => < Main data={this.state.data}/>}/>
      < Route path="/productsAll" render={() => < ProductsList data={this.state.data} sort={"all"}/>}/>
      <Route path="/product/:id" exact component={ProductPage}/>
      < Route path="/productsMen" render={() => < ProductsList data={this.state.data} sort={"Mens"}/>}/>
      < Route path = "/productsWomen" render = {() => < ProductsList data={this.state.data} sort={"Womens"}/>}/ >
      < Route path = "/productsClothing" render = {() => < ProductsList data={this.state.data} sort={"Clothing"} />}/>
      < Route path="/productsShoes" render={() => < ProductsList data={this.state.data} sort={"Shoes"} />} />
      < Route path="/productsAccessories" render={() => < ProductsList data={this.state.data} sort={"New"} />} />
      < Route path="/productsFavorites" render={() => < ProductsList data={this.state.data}/>}/>
      < Route path="/productsNew" render={() => < ProductsList data={this.state.data} sort={"New"} />}/>
      < Route path="/productsBestseller" render={() => < ProductsList data={this.state.data} sort={"Bestseller"}/>}/>
      { this.state.modalBin ?  <CartList modalBin={this.state.modalBin} closeModalBin={this.closeModalBin}/> : null}
      <Route path="/"  render={() => <Footer/>} />
    </>
  )
 }
}

const mapDispatchToProps = dispatch => ({
    addProducts:(data) => dispatch({
      type: "ADD_PRODUCTS",
      data
    })

})


export default connect(null, mapDispatchToProps)(App)