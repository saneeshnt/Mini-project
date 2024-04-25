import React from 'react'
import "./Battery.css"
import ProductsPage from '../../../ProductsPage/ProductsPage'
import productsData from "../../../../../Datas/Products.json"


function Battery() {
    const battery = productsData.productsdata.filter(productsdata=>productsdata.category==="battery")
    return (
      <>
        <div className='category-battery'>
          <div className='category-battery-heading'>
            <h1>BEST BATTERY PERFORMANCE</h1>
            <p className='no-available'>CURRENTLY NO AVAILABLE</p>
          </div>
          <ProductsPage products={battery} />
        </div>
  
      </>
    )
}

export default Battery