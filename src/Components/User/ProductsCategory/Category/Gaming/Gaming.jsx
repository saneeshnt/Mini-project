import React from 'react'
import "../Gaming/Gaming.css"
import ProductsPage from '../../../ProductsPage/ProductsPage'
import productsData from "../../../../../Datas/Products.json"

function Gaming() {
    const gaming = productsData.productsdata.filter(productsdata=>productsdata.category==="gaming")
    return (
      <>
        <div className='category-gaming'>
          <div className='category-gaming-heading'>
            <h1>For Gaming</h1>
          </div>
          <ProductsPage products={gaming} />
        </div>
  
      </>
    )
}

export default Gaming