import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"
import { productsReducer } from "./productsReducer"
import { productLikeReducer } from "./productLikeReducer"


const rootReducer = combineReducers({
    productLikeState:productLikeReducer,
    productsInCart: cartReducer,
    products:productsReducer,
    
})

export default rootReducer