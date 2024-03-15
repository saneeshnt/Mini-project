import React from 'react'
import './Realme.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Realme() {
  const realme = productsData.productsdata.filter(productsdata=>productsdata.brand==="Realme")
  return (
    <>
      <div className='brand-realme'>
        <div className='brand-realme-heading'>
          <h1>Realme</h1>
        </div>
        <ProductsPage products={realme} />
      </div>

    </>
  )
}

export default Realme