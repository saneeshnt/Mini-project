import React from 'react'
import './Apple.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Apple() {
  const apple = productsData.productsdata.filter(productsdata=>productsdata.brand==="apple")
  return (
    <>
      <div className='brand-apple'>
        <div className='brand-apple-heading'>
          <h1>Iphones</h1>
        </div>
        <ProductsPage products={apple} />
      </div>

    </>
  )
}

export default Apple