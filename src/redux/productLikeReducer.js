import {omit} from "lodash"
export const productLikeReducer = (state = {},action) => {
    switch (action.type) {
        case "LIKE":
            return {
                ...state,
                [action.id]:true,
            }

        case "DISLIKE":
            return omit(state, action.id)
            // return {
                // ...state,
                // [action.id]: false,
                
            // }
    
        default:
            return state;
    }
}  

