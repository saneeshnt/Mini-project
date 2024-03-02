import React from 'react'
import './Samsung.css'
import { Link } from 'react-router-dom'


function Samsung() {
  return (
    <div> <div class="card-container">
    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/QtbJ8pxg/in-galaxy-s24-s928-sm-s928bzkcins-thumb-539573221.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Samsung S24 Ultra</h1>
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

    {/* card2 */}

    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/5tD6gCR5/in-galaxy-s24-plus-sm-s926bzvbins-thumb-539572979.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Samsung S24+</h1>
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

    {/* card3 */}

    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/HLJsKLGp/in-galaxy-s23-s918-sm-s918bzgcins-thumb-534863401.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Samsung S23 Ultra</h1>
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

    {/* card4 */}

    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/W1YfzNdq/in-galaxy-s23-fe-s711-479553-sm-s711bzpcins-thumb-538356069.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Samsung S23 FE</h1>
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

    {/* card5 */}

    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/R0DYqMbb/in-galaxy-s24-492654-sm-s921bzkcins-thumb-539572764.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Samsung S24</h1>
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
    </div></div>
   
  )
}

export default Samsung