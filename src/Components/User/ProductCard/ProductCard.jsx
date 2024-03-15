import React from 'react'
import '../ProductCard/ProductCard.css';
import { Link } from "react-router-dom"

function ProductCard({ product }) {

    return (

        <div class="pcard-container">
            <div class="product-card">
                <div className='product-img'>
                    <img src={product.image} alt="img" />
                </div>
                <div className="product-info">
                    <div className='product-title'>
                        <h1>{product.name}</h1>
                    </div>
                    <div className='product-price'>
                        <h3>{product.price}</h3>
                    </div>
                    <div className='product-description'>
                        <p>{product.description}</p>
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
            )
}

            export default ProductCard