
import React from 'react'
import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productAction';

import './Homescreen.css'

import Product from '../../components/Product';
function Homescreen() {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const {products , loading , error} = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  },[dispatch])
  
  return (
    <div className='homescreen'>
          <h3 className='homescreen__header'>Lastest Products</h3>
      
      <div className='homescreen__products'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
      </div>
    </div>
  )
}

export default Homescreen