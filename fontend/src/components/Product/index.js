
import {Link} from 'react-router-dom';

import './Product.css'

function Product({item}) {
  return (
    <div className='product'>
        <img className='product__image' src={item.imageUrl} alt={item.name}/>
        <h4 className='product__title'>
        {item.name}
        </h4>
        <p className='product__description'>
        {item.desription}
        </p>
        <p className='product__price'>     {item.price}</p>

        <Link to={`/product/${item._id}`} className='product__view'>
                View
        </Link>
    </div>
  )
}

export default Product