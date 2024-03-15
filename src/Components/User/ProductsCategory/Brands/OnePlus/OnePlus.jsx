import React from 'react'
import './OnePlus.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function OnePlus() {
  const OnePlus = productsData.productsdata.filter(productsdata=>productsdata.brand==="OnePlus")
  return (
    <>
      <div className='brand-oplus'>
        <div className='brand-oplus-heading'>
          <h1>OnePlus</h1>
        </div>
        <ProductsPage products={OnePlus} />
      </div>

    </>
  )
}

export default OnePlus