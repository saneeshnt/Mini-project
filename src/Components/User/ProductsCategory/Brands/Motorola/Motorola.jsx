import React from 'react'
import './Motorola.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Motorola() {
  const motorola = productsData.productsdata.filter(productsdata=>productsdata.brand==="motorola")
  return (
    <>
      <div className='brand-moto'>
        <div className='brand-moto-heading'>
          <h1>Motorola</h1>
        </div>
        <ProductsPage products={motorola} />
      </div>

    </>
  )
}

export default Motorola