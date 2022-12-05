
import './CartItem.css';

function CartItem() {
  return (
    <div className='cartscreen__item'>
                      <img className='cartscreen__image' src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt='Product1'/>
                        <span className='cartscreen__name'>
                          PlaytStation
                        </span>
                        <div className='cartscreen__details'>
                          <span className='cartscreen__price'>$499</span>
                          <select>
                            <option value ="1">1</option>
                            <option value ="2">2</option>
                            <option value ="3">3</option>
                            <option value ="4">4</option>
                            <option value ="5">5</option>
                            <option value ="6">6</option>
                            <option value ="7">7</option>
                          </select>
                          <button className='cartscreen__remove'>Xóa</button>
                        </div>
                  </div>

  )
}

export default CartItem