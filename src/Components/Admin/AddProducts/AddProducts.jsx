import React, { useState } from 'react';
import '../AddProducts/AddProducts.css';

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    brand: ''  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to submit product data to the backend
    console.log('Product data:', productData);
    // Reset form after submission
    setProductData({
      name: '',
      description: '',
      price: '',
      stock: '',
      image: '',
      brand: ''
    });
  };

  return (
    
    <div className='add-product-container'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={productData.description} onChange={handleChange} required></textarea>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} required />
        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" name="stock" value={productData.stock} onChange={handleChange} required />
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" value={productData.brand} onChange={handleChange} required />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={productData.image} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
