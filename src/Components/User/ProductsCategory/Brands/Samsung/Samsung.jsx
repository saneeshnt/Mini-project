import React from 'react'
import './Samsung.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Samsung() {
  const samsung = productsData.productsdata.filter(productsdata=>productsdata.brand==="Samsung")
  return (
    <>
      <div className='brand-samsung'>
        <div className='brand-samsung-heading'>
          <h1>Samsung</h1>
        </div>
        <ProductsPage products={samsung} />
      </div>

    </>
  )
}

export default Samsung