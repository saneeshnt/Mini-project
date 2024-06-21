import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { useNavigate } from "react-router-dom";
import { AddToWishlist, checkProductInWishlist } from "../../../Services/UserApi";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function ProductCard({ product }) {
    const baseURL = "http://localhost:8000";
    const imageURL = `${baseURL}/public/images/products/${product.image}`;
    const navigate = useNavigate();
    const [inWishlist, setInWishlist] = useState(false);

    useEffect(() => {
        const checkWishlistStatus = async () => {
            try {
                const response = await checkProductInWishlist(product._id);
                if (response.status === 200) {
                    setInWishlist(response.data.inWishlist);
                }
            } catch (error) {
                console.error("Error checking wishlist status", error);
            }
        };

        checkWishlistStatus();
    }, [product._id]);

    const handleAddToWishlist = async () => {
        try {
            const productId = product._id;
            const response = await AddToWishlist(productId);

            if (response.status === 200) {
                toast.success("Product added to wishlist");
                setInWishlist(true);
            } else if (response.status === 201) {
                toast.success("Product removed from wishlist");
                setInWishlist(false);
            }
        } catch (error) {
            console.error("Error adding/removing product to wishlist", error);
        }
    };

    const viewproduct = () => {
        navigate(`/singlepage/${product._id}`);
    };

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
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="addtocart-btn">
                    <button onClick={handleAddToWishlist} className="wishlist-btn">
                        <FontAwesomeIcon icon={inWishlist ? solidHeart : regularHeart} />
                    </button>
                    <button type="button" onClick={viewproduct}>
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
