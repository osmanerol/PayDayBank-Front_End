import { combineReducers } from 'redux';

//  reducers
import userReducer from './userReducer';
import productReducer from './productReducer';

export default combineReducers({
    user:userReducer,
    products:productReducer
})