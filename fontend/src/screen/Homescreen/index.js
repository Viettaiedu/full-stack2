
import React from 'react'
import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productAction';

import './Homescreen.css'

import Product from '../../components/Product';
function Homescreen() {
  const dispatch = useDispatch();
  const arrProduct = useSelector((state) => state.getProducts);
  const {products , loading , error} = arrProduct;
  useEffect(() => {
    dispatch(listProducts());
  },[dispatch])
  console.group()
  console.log("Product :" , products);
  console.log("Loading :" , loading);
  console.log("Error :" , error);
  console.groupEnd();
  return (
    <div className='homescreen'>
         {loading ? "Loading..." : error ? "Error" :  <h3 className='homescreen__header'>Lastest Products</h3>}
      
      <div className='homescreen__products'>
        {loading  ? "" :  error ? "" : products.map((product,index) => (
          <Product key={index} item={product}/>
        )) }
      </div>
    </div>
  )
}

export default Homescreen