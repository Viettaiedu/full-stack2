
import React from 'react'
import './ProductScreen.css'
function ProductScreen() {
  // name: "PlayStation 5",",
  // description:
  //   "",
  // price: 499,
  // countInStock: 15,
  return (
    <div className='productscreen'>
        <img className='productscreen__left'  src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt="Produc1"/>
      <div className='productscreen__middel'>
            <h3 className='productscreen__name'> PlayStation 5</h3>
            <p className='productscreen__price'> $499</p>
            <p className='productscreen__description'>
            PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.
            </p>
      </div>
      <div className='productscreen__right'>
      <p className='productscreen__price'> $499</p>
      <p className='productscreen__status'> In stock</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
        </div>
    </div>
  )
}

export default ProductScreen