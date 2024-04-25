import React from 'react'

import './Photography.css'
import ProductsPage from '../../../ProductsPage/ProductsPage'
import productsData from '../../../../../Datas/Products.json'

function Photography() {
    const photography= productsData.productsdata.filter(productsdata=>productsdata.category==="photography")
    return (
      <>
        <div className='category-photography'>
          <div className='category-photography-heading'>
            <h1>PHOTOGRAPHY & VIDEOGRAPHY</h1>
          </div>
          <ProductsPage products={photography} />
        </div>
  
      </>
    )
}

export default Photography