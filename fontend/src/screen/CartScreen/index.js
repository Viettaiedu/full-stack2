
import React from 'react'
import './CartScreen.css';
import CartItem from '../../components/CartItem'
function CartScreen() {
  return (
    <div className='cartscreen'>
        <h3 className='cartscreen__title'>Shopping Cart</h3>
        <div className='cartscreen__content'>
             
                  {/* Cart Item */}
                <div className='cartscreen__items'>
                <CartItem />
                 <CartItem />
                 <CartItem />
                </div>
                  
         
              <div className='cartscreen__total'>
                  <h4 className='cartscreen__subtotal'>
                    Subtotal(0)items
                  </h4>
                  <p className='cartscreen__total__price'>
              $4000
                  </p>
                  <button className='cartscreen__proceed'>
                    Process to Checkout
                  </button>
              </div>
        </div>
    </div>
  )
}

export default CartScreen