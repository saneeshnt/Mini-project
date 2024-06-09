import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../Services/UserApi";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await getProductDetails(productId);
      const { status, product, message } = response.data;
      if (status) {
        setProduct(product);
      } else {
        setError(message || "Failed to load product details.");
      }
    } catch (error) {
      setError("An error occurred while fetching the product details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  const baseURL = "http://localhost:8000"; // Replace with your actual base URL
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  return (
    <div className="singleProduct">
      <div className="singleProduct__top">
        <div className="singleProduct__image">
          <img src={imageURL} alt={product.name} />
        </div>
        <div className="singleProduct__details">
          <h1 className="singleProduct__name">{product.name}</h1>
          <h3 className="singleProduct__brand">{product.brand}</h3>
          <p className="singleProduct__description">{product.description}</p>
          <div className="singleProduct__price">₹{product.price}</div>
          <button className="singleProduct__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
