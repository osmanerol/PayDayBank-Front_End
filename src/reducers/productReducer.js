import { GET_PRODUCTS_PENDING , GET_PRODUCTS_FULFILLED, GET_PRODUCTS_REJECTED, 
        GET_PRODUCT_PENDING , GET_PRODUCT_FULFILLED, GET_PRODUCT_REJECTED, 
        UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_FULFILLED, UPDATE_PRODUCT_REJECTED } from '../actions/productAction';

const initialState={
    productsList:[],
    error:false,
    product:{},
    updateStatus:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        //  get all products
        case GET_PRODUCTS_PENDING:
            return {
                ...state,
                updateStatus:null
            }
        case GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                productsList:action.payload.data
            }
        case GET_PRODUCTS_REJECTED:
            return {
                ...state
            }
        // get product by id
        case GET_PRODUCT_PENDING:
            return {
                ...state,
                updateStatus:null
            }
        case GET_PRODUCT_FULFILLED:
            return {
                ...state,
                product:action.payload.data
            }
        case GET_PRODUCT_REJECTED:
            return {
                ...state
            }
        //  update product
        case UPDATE_PRODUCT_PENDING:
            return {
                ...state,
                updateStatus:null
            }
        case UPDATE_PRODUCT_FULFILLED:
            return {
                ...state,
                updateStatus:action.payload.status
            }
        case UPDATE_PRODUCT_REJECTED:
            return {
                ...state
            }
        default:
            return state
    }
}