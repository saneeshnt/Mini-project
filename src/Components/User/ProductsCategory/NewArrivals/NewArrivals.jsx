import React from 'react'
import './NewArrivals.css';
import ProductsPage from '../../ProductsPage/ProductsPage';
import productsData from '../../../../Datas/Products.json'

function NewArrivals() {
  const newarrival = productsData.productsdata.sort((a,b)=>new  Date(b.date) - new Date(a.date))
  return (
    <>
      <div className='new-arrivals'>
        <div className='new-arrival-heading'>
          <h1>NEW ARRIVALS</h1>
        </div>
        <ProductsPage products={newarrival} />
      </div>

    </>
  )
}

export default NewArrivals