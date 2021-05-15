export const productsReducer = (state={},action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: action.data
            }

        default:
            return state;
    }
}


