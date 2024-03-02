import React from 'react'
import './OnePlus.css'
import { Link } from 'react-router-dom'

function OnePlus() {
  return (
  <div><div class="card-container">
    <div class="product-card">
          <div className='product-img'>
            <img src="https://i.postimg.cc/qMYgcFZh/unnamed.webp" alt="" />
          </div>
          <div className="product-info">
            <div className='product-title'>
              <h1>OnePlus 11R</h1>
            </div>
            <div className='product-price'>
              <h3>Price: $1900.00</h3>
            </div>
            <div className='product-description'>
              <p></p>
            </div>

          </div>
          <div className="addtocart-btn">
            <Link to="#">
               <button type="submit">
                Add to Cart
               </button>
             </Link>
           </div>
        </div>

        {/* card7 */}

        <div class="product-card">
          <div className='product-img'>
            <img src="https://i.postimg.cc/mgvvS3sy/unnamed-1.webp" alt="" />
          </div>
          <div className="product-info">
            <div className='product-title'>
              <h1>OnePlus 10 Pro</h1>
            </div>
            <div className='product-price'>
              <h3>Price: $1900.00</h3>
            </div>
            <div className='product-description'>
              <p></p>
            </div>

          </div>
          <div className="addtocart-btn">
            <Link to="#">
               <button type="submit">
                Add to Cart
               </button>
             </Link>
           </div>

        </div>

        {/* card8 */}

        <div class="product-card">
          <div className='product-img'>
            <img src="https://i.postimg.cc/pdXndj9R/unnamed-2.webp" alt="" />
          </div>
          <div className="product-info">
            <div className='product-title'>
              <h1>One Plus 10R</h1>
            </div>
            <div className='product-price'>
              <h3>Price: $1900.00</h3>
            </div>
            <div className='product-description'>
              <p></p>
            </div>

          </div>
          <div className="addtocart-btn">
            <Link to="#">
               <button type="submit">
                Add to Cart
               </button>
             </Link>
           </div></div>
   </div>
   </div>
  )
}

export default OnePlus