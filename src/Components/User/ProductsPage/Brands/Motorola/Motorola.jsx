import React from 'react'
import './Motorola.css'
import { Link } from 'react-router-dom'


function Motorola() {
  return (
    <div><div class="card-container">
    <div class="product-card">
      <div className='product-img'>
        <img src="https://i.postimg.cc/Wbw4Kkhh/81fxjeu8fd-L-SX679.jpg" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Motorola</h1>
        </div>
        <div className='product-price'>
          <h3>Price: $2900.00</h3>
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
        <img src="https://i.postimg.cc/8cZ66pjb/315o-Qlf-Q6-WL-SY445-SX342-QL70-FMwebp.webp" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Motorola</h1>
        </div>
        <div className='product-price'>
          <h3>Price: $2400.00</h3>
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
        <img src="https://i.postimg.cc/Wbw4Kkhh/81fxjeu8fd-L-SX679.jpg" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Motorola</h1>
        </div>
        <div className='product-price'>
          <h3>Price: $2900.00</h3>
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
        <img src="https://i.postimg.cc/Wbw4Kkhh/81fxjeu8fd-L-SX679.jpg" alt="" />
      </div>
      <div className="product-info">
        <div className='product-title'>
          <h1>Motorola</h1>
        </div>
        <div className='product-price'>
          <h3>Price: $2900.00</h3>
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
    </div>

</div>
  )
}

export default Motorola