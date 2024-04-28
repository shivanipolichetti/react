


const initialState={
    products:[],
    error:false
}

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "PRODUCT_SUCCESS":
            return {...state,products:action.payload}
        case "PRODUCTS_FAILURE":
            return {...state,error:action.payload}
        default :
        return state
        }
}

export default productReducer;