import * as actionTypes from '../constants/cartConstans';
import axios from 'axios';

export const addToCart = (id,qty) => async(dispath,getState) => {
    const {data} = await axios.get(`/api/products/${id}`);

    dispath({
        type : actionTypes.ADD_TO_CART,
        payload : {
            product : data._id,
            name : data.name,
            imageUrl : data.imageUrl,
            price : data.price,
            countInStock : data.countInStock,
            qty
        }
    })

    localStorage.setItem("cart" , JSON.stringify(getState.cart));
}

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
        type : actionTypes.REMOVE_FROM_CART,
        payload : id
    })
    localStorage.setItem("cart" , JSON.stringify(getState.cart.cartItems));

}