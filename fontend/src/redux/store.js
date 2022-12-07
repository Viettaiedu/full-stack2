import {legacy_createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import {cartReducer} from '../redux/reducers/cartReducer';
import {getProductsReducer , getProductDetailsReducer} from '../redux/reducers/productReducer';
const reducer = combineReducers({
    cart : cartReducer,
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer
});
const middleware = [thunk];
const cartFromLocalStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) || [] : [];

    const INITCIAL_STATE = {
        cart :cartFromLocalStore
    }

const store = legacy_createStore(
    reducer,
    INITCIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;