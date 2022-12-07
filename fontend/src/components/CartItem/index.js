
import { useState } from 'react';
import './CartItem.css';

function CartItem({item ,handleMountCart , handleRemoveItem}) {

  const [qty , setQty] = useState(item.qty);
  const handleCart = (e) => {
    setQty(e.target.value);
    handleMountCart(item.product , e.target.value);
  }
  return (
    <div className='cartscreen__item'>
                      <img className='cartscreen__image' src={item.imageUrl} alt={item.name} />
                        <span className='cartscreen__name'>
                        {item.name} 
                        </span>
                        <div className='cartscreen__details'>
                          <span className='cartscreen__price'>{item.price} </span>
                          <select value={qty} onChange={handleCart}  >
                            { [...Array(parseInt(item.countInStock)).keys()].map((x) => (
                              <option key={(x) + 1} value={(x)+1} >{(x)+1}</option>
                            ))}
                          </select>
                          <button className='cartscreen__remove' onClick={() => handleRemoveItem(item.product)}>Xóa</button>
                        </div>
                  </div>

  )
}

export default CartItem