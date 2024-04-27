import React from 'react';
import "./SingleProduct.css";
import { useParams } from 'react-router-dom';
import productData from "../../../Datas/Products.json";

function SingleProduct() {
    const { productId } = useParams();
    // Ensure productId is parsed as an integer
    const product = productData.Products.find(productdatas => productdatas.id === parseInt(productId, 10));

    // Check if product exists before rendering
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="singleproduct">
            <div className="topsection">
                <div className="img-section">
                    {/* Assuming you'll put image here */}
                    <div className="img" id="img"></div>
                </div>
                <div className="details-section">
                    <div className="details-name">
                        <h1>{product.name}</h1>
                        <h3>{product.brand}</h3>
                        <p>{product.description}</p>
                        <div className="buttons">
                            <button className="btn" id="btn1">Add to Cart</button>
                            <button className="btn" id="btn2">Buy Now</button>
                        </div>
                    </div>
                    <div className="details-price">
                        <h2>₹{product.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
