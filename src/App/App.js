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
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    AOS.init({
      duration: 2000
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
      <span id="start" />
     
     <Route path="/" render={() => <Header handleShowModalBin={this.handleShowModalBin} data={this.state.data} />} />
     
      < div data-aos = "zoom-in" >
        <Route path="/" exact component={Slider} />
    </div>
      < div data-aos = "zoom-in" >
        <Route path="/" exact render={() => < Main data={this.state.data} />} />
      </div>
       < div data-aos = "zoom-in" >
        < Route path="/productsAll" render={() => < ProductsList data={this.state.data} sort={"all"} />} />
      </div>
       < div data-aos = "zoom-in" >
        <Route path="/product/:id" exact component={ProductPage} />
      </div>
       < div data-aos = "zoom-in" >
        < Route path="/productsMen" render={() => < ProductsList data={this.state.data} sort={"Mens"} />} />
      </div>
       < div data-aos = "zoom-in" >
        < Route path="/productsWomen" render={() => < ProductsList data={this.state.data} sort={"Womens"} />} />
      </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsClothing" render={() => < ProductsList data={this.state.data} sort={"Clothing"} />} />
      </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsShoes" render={() => < ProductsList data={this.state.data} sort={"Shoes"} />} />
        </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsAccessories" render={() => < ProductsList data={this.state.data} sort={"New"} />} />
        </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsFavorites" render={() => < ProductsList data={this.state.data} />} />
        </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsNew" render={() => < ProductsList data={this.state.data} sort={"New"} />} />
        </div>
      < div data-aos = "zoom-in" >
        < Route path="/productsBestseller" render={() => < ProductsList data={this.state.data} sort={"Bestseller"} />} />
        </div>
      
      { this.state.modalBin ? <CartList modalBin={this.state.modalBin} closeModalBin={this.closeModalBin} /> : null}
      
      < div data-aos = "zoom-in" >
        <Route path="/" render={() => <Footer />} />
         </div>
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