
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';



import {addToCart , removeFromCart} from '../../redux/actions/cartAction';
import './CartScreen.css';
import CartItem from '../../components/CartItem';
function CartScreen() {
  const [total , setTotal] = useState(0);
  const cart = useSelector(state => state.cart);
  const dispatch  = useDispatch();
  const {cartItems} = cart;
  let qty =  0 ;
  const totalMoney = cartItems.reduce((sum , item) => {
    qty += parseInt(item.qty);
   return sum + item.price * item.qty
  },0);
  useEffect(() => {
    if(cartItems.length > 0 ) {
        setTotal(totalMoney)
    }
  },[cartItems.length,totalMoney]);

  const handleMountCart = (id , qty) => {
    dispatch(addToCart(id,qty));
  };

  const handleRemoveItem = (id) => {
    dispatch( removeFromCart(id));
  }
  return (
    <div className='cartscreen'>
        <h3 className='cartscreen__title'>Shopping Cart</h3>
        <div className='cartscreen__content'>
             
                  {/* Cart Item */}
                <div className='cartscreen__items'>
                {cartItems.length <= 0 ? "Bạn chưa có đơn hàng nào" : cartItems.map((item,index) => (
                  <CartItem  handleRemoveItem ={handleRemoveItem} handleMountCart={handleMountCart} key={index} item={item} />
                )) }
                </div>
             {cartItems.length <= 0 ?"":  <div className='cartscreen__total'>
                  <h4 className='cartscreen__subtotal'>
                    Subtotal({qty})items
                  </h4>
                  <p className='cartscreen__total__price'>
             Total : {total}
                  </p>
                  <button className='cartscreen__proceed'>
                    Process to Checkout
                  </button>
              </div>}
        </div>
    </div>
  )
}

export default CartScreen