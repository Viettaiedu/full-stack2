
import {Link} from 'react-router-dom';

import './Product.css'

function Product({item}) {
  return (
    <div className='product'>
        <img className='product__image' src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt="Sản phẩm 1"/>
        <h4 className='product__title'>
            PlayStation 5
        </h4>

        <p className='product__description'>
        PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.
        </p>
        <p className='product__price'>$499</p>

        <Link to={`/products/63889da0e8ef6c01d50d5ee0`} className='product__view'>
                View
        </Link>
    </div>
  )
}

export default Product