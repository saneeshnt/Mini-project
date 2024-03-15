import React from 'react'
import './Motorola.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Apple() {
  const moto = productsData.productsdata.filter(productsdata=>productsdata.brand==="motorola")
  return (
    <>
      <div className='brand-moto'>
        <div className='brand-moto-heading'>
          <h1>Iphones</h1>
        </div>
        <ProductsPage products={moto} />
      </div>

    </>
  )
}

export default Apple