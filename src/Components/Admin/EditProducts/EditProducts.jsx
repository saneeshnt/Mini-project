import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../../../Datas/Products.json'
import './EditProducts.css'

function EditProduct() {
  const [product, setProduct] = useState({ id: '', name: '', stock: '', brand: '', description: '', price: 0, category: '' });
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the product with the matching productId
    const foundProduct = productsData.Products.find(item => item.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the edited product details
    console.log("Updated Product:", product);
    // Redirect or perform any necessary actions after submission
    navigate('/admin/view'); // For example, navigate to the products page
  };

  return (
    <div className='adminEditProduct'>
      <h1>Edit Product</h1>
      <div className="editProductSection">
        <form onSubmit={handleSubmit}>
          <div className="editProductInputDiv">
            <label>ID</label>
            <input
              type="number"
              name="id"
              value={product.id}
              onChange={handleInputChange}
              placeholder="ENTER PRODUCT ID..."
              id="input"
            />
          </div>
          <br />
          <div className="editProductInputDiv">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              placeholder="ENTER NAME HERE..."
              id="input"
            />
          </div>

          <br />
          <div className="editProductInputDiv">
            <label>Brand</label>
            <select
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              id="input"
            >
              <option value="iphone">iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Motoorla">Motorola</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Realme">Realme</option>

            </select>
          </div>

          <br />
          <div className="editProductInputDiv">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              placeholder="PRODUCT DESCRIPTION..."
              id="input"
            />
          </div>

          <br />
          <div className="editProductInputDiv">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="ENTER PRICE HERE ..."
              id="input"
            />
          </div>



          <br />
          <div className="editProductInputDiv">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleInputChange}
              id="input"
            >
              <option value="photgraphy">Photography</option>
              <option value="gaming">Gaming</option>
              <option value="battery">Battery</option>
            </select>
          </div>

          <br />
          <button type="submit" id="editProductBtn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProduct;