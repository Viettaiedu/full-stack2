
import React from 'react'
import { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import {getProductDetails} from '../../redux/actions/productAction';
import {addToCart} from '../../redux/actions/cartAction';
import './ProductScreen.css';
function ProductScreen() {
  const {id} =  useParams();
  const navigate = useNavigate();
  const[qty , setQty] = useState(1);
  const dispatch =useDispatch();
  const productDetails = useSelector(state => state.getProductDetails);
  const {loading , error , product} = productDetails;
  useEffect(() => {
    if (product && id !== product._id){
      dispatch(getProductDetails(id))
    }
  },[dispatch,id ])
  const handleAddCart = () => {
      dispatch(addToCart(id,qty));
      navigate('/cart');
  }
  return (
    <div className='productscreen'>
        <img className='productscreen__left'  src={product.imageUrl} alt={product.name}/>
      <div className='productscreen__middel'>
            <h3 className='productscreen__name'> Name: {product.name}</h3>
            <p className='productscreen__price'> Price: {product.price}</p>
            <p className='productscreen__description'>
           Description: {product.description}
            </p>
      </div>
      <div className='productscreen__right'>
      <p className='productscreen__price'>Price: {product.price}</p>
      <p className='productscreen__status'>Status: {product.countInStock > 0 ? "In stock" : "Out of stock"}</p>
      <select  value={qty} onChange={(e) => setQty(e.target.value)}>
        {[...Array(product.countInStock).keys()].map(x => (
          <option key={x++} value={x++} >{x++}</option>
        )) }
      </select>
      <button className='productscreen__add' onClick={handleAddCart}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductScreen