import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../../../Services/AdminApi";
import "./EditProducts.css";


function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    stock:"",
    category: "Photography",
    disableProduct: false,
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error); // Debugging statement
        setError("There was an error fetching the product!");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove the 'image' field from the product object
    const { image, ...updatedProduct } = product;
    updateProduct(id, updatedProduct)
      .then((response) => {
        navigate("/admin/viewproducts"); // Redirect to the products list page
      })
      .catch((error) => {
        setError("There was an error updating the product!");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="editProduct">
      <h1>Edit Product</h1>
      <div className="editProductSection">
      <form onSubmit={handleSubmit}>
        <div className="editProductInputDiv">
          <label htmlFor="name" className="label">
           Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="editProductInputDiv">
          <label htmlFor="brand" className="label">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="editProductInputDiv">
          <label htmlFor="description" className="label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="editProductInputDiv">
          <label htmlFor="price" className="label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="editProductInputDiv">
          <label htmlFor="stock" className="label">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        <div className="editProductInputDiv">
          <label htmlFor="category" className="label">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="input-field"
          >
            <option value="photography">Photography</option>
            <option value="battery">Battery</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>
        <button type="submit" id="editProductBtn">
          Save Changes
        </button>
      </form>
      </div>
    </div>
  );
};


export default EditProducts