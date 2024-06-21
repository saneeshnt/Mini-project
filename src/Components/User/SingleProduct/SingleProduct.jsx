// import React, { useEffect, useState } from "react";
// import "./SingleProduct.css";
// import { useParams } from "react-router-dom";
// import { getProductDetails, createOrder,addToCart } from "../../../Services/UserApi";



// function SingleProduct() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Fetch product details
//   const fetchProductDetails = async (productId) => {
//     try {
//       const response = await getProductDetails(productId);
//       const { status, product, message } = response.data;
//       if (status) {
//         setProduct(product);
//       } else {
//         setError(message || "Failed to load product details.");
//       }
//     } catch (error) {
//       setError("An error occurred while fetching the product details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate total price based on quantity and product price
//   const calculateTotalPrice = () => {
//     if (product) {
//       const total = product.price * quantity;
//       setTotalPrice(total);
//     }
//   };

//   // Update total price whenever quantity changes
//   useEffect(() => {
//     calculateTotalPrice();
//   }, [quantity, product]);

//   useEffect(() => {
//     if (productId) {
//       fetchProductDetails(productId);
//     }
//   }, [productId]);

//   // Handle quantity change
//   const handleQuantityChange = (amount) => {
//     setQuantity((prevQuantity) => {
//       const newQuantity = prevQuantity + amount;
//       return newQuantity > 0 ? newQuantity : 1;
//     });
//   };

//   // Handle buy now button click
//   const handleBuyNow = async () => {
//     try {
//       const orderData = {
//         productId,
//         quantity,
//       };
//       const response = await createOrder(orderData);
//       const { status, message } = response.data;
//       if (status) {
//         alert("Order placed successfully!");
//       } else {
//         alert(message || "Failed to place order.");
//       }
//     } catch (error) {
//       alert("An error occurred while placing the order.");
//     }
//   };


//   //add to cart


//   const handleAddToCart = async () => {
//     try {
//       const response = await addToCart(productId, quantity);
//       const { status, message } = response.data;
//       if (status) {
//         toast.success("Product added to cart successfully!");
//       } else {
//         toast.error("Failed to add product to cart.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while adding the product to the cart.");
//     }
//   };

  


//   // If still loading, show loading message
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // If there's an error, display the error message
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Build image URL
//   const baseURL = "http://localhost:8000"; // Replace with your actual base URL
//   const imageURL = `${baseURL}/public/images/products/${product.image}`;

//   // Render the component
//   return (
//     <div className="singleProduct">
//       <div className="singleProduct__top">
//         <div className="singleProduct__image">
//           <img src={imageURL} alt={product.name} />
//         </div>
//         <div className="singleProduct__details">
//           <h1 className="singleProduct__name">{product.name}</h1>
//           <h3 className="singleProduct__brand">{product.brand}</h3>
//           <p className="singleProduct__description">{product.description}</p>
//           <div className="sinPrdQuantity">
//             <button onClick={() => handleQuantityChange(-1)}>-</button>
//             <span>{quantity}</span>
//             <button onClick={() => handleQuantityChange(1)}>+</button>
//           </div>
//           <div className="singleProduct__price">₹{product.price}</div>
//           <div className="singleProduct__totalPrice">Total Price: ₹{totalPrice}</div>
//           <button className="sinPrdBtn" id="sinPrdBtn2" onClick={handleBuyNow}>
//             Buy Now
//           </button>
//           <button
//                 className="sinPrdBtn"
//                 id="sinPrdBtn1"
//                 onClick={handleAddToCart} // Use the handleAddToCart function
//               >
//                 Add To Cart
//               </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./SingleProduct.css";
import { getProductDetails, createOrder, addToCart } from "../../../Services/UserApi";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch product details
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

  // Calculate total price based on quantity and product price
  const calculateTotalPrice = () => {
    if (product) {
      const total = product.price * quantity;
      setTotalPrice(total);
    }
  };

  // Update total price whenever quantity changes
  useEffect(() => {
    calculateTotalPrice();
  }, [quantity, product]);

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  // Handle quantity change
  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + amount;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  // Handle buy now button click
  const handleBuyNow = async () => {
    try {
      const orderData = {
        productId,
        quantity,
      };
      const response = await createOrder(orderData);
      const { status, message } = response.data;
      if (status) {
        toast.success("Order placed successfully!");
      } else {
        toast.error(message || "Failed to place order.");
      }
    } catch (error) {
      toast.error("An error occurred while placing the order.");
    }
  };

  // Handle add to cart
  const handleAddToCart = async () => {
    try {
      const response = await addToCart(productId, quantity);
      const { status, message } = response.data;
      if (status) {
        toast.success("Product added to cart successfully!");
      } else {
        toast.error(message || "Failed to add product to cart.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product to the cart.");
    }
  };

  // If still loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Build image URL
  const baseURL = "http://localhost:8000"; // Replace with your actual base URL
  const imageURL = `${baseURL}/public/images/products/${product.image}`;

  // Render the component
  return (
    <div className="singleProduct">
      <ToastContainer />
      <div className="singleProduct__top">
        <div className="singleProduct__image">
          <img src={imageURL} alt={product.name} />
        </div>
        <div className="singleProduct__details">
          <h1 className="singleProduct__name">{product.name}</h1>
          <h3 className="singleProduct__brand">{product.brand}</h3>
          <p className="singleProduct__description">{product.description}</p>
          <div className="sinPrdQuantity">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <div className="singleProduct__price">₹{product.price}</div>
          <div className="singleProduct__totalPrice">Total Price: ₹{totalPrice}</div>
          <button className="sinPrdBtn" id="sinPrdBtn2" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="sinPrdBtn" id="sinPrdBtn1" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
