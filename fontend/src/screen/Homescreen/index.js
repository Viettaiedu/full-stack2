
import React from 'react'
import './Homescreen.css'

import Product from '../../components/Product';
function Homescreen() {
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