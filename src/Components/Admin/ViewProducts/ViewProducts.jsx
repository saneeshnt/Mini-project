import React, { useState, useEffect } from 'react';
import '../ViewProducts/ViewProducts.css'; 
import productsdata from '../../../Datas/Products.json'; 

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsdata.productsdata);
  }, []);

  const handleEditProduct = (productId) => {
    console.log('Editing product with ID:', productId);
  };

  const handleDeleteProduct = (productId) => {
    console.log('Deleting product with ID:', productId);
  };

  return (
    <div className="product-table-container">
      <h2>Product Table</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th> {/* New column for product images */}
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.image} alt={product.name} className="product-image" /></td> {/* Display product image */}
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProducts;
