import React from 'react';
import './ProductCard.css'; // Adjusted the import to match the component file's location
import { Link } from "react-router-dom";

function ProductCard({ product, user }) {
    const baseURL = "http://localhost:8000";
    const imageURL = `${baseURL}/public/images/products/${product.image}`;

    return (
        <div className="pcard-container">
            <div className="product-card">
                <div className="product-img">
                    <img src={imageURL} alt={product.name} className='prdCrdImg' />
                </div>
                <div className="product-info">
                    <div className="product-title">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="product-price">
                        <h3>₹{product.price}</h3>
                    </div>
                    <div className="product-description">
                        <Link to={`/singlepage/${product._id}`}>
                            <p>{product.description}</p>
                        </Link>
                    </div>
                </div>
                <div className="addtocart-btn">
                    <button type="button">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
