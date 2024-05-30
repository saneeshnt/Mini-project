import React from 'react';
import '../AddProducts/AddProducts.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Products } from "../../../Services/AdminApi";

function AddProducts() {
  const initialValues = {
    name: '',
    brand: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    dateAdded:"",
    image: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    stock: Yup.number().required('Stock is required').min(0, 'Stock cannot be negative'),
    brand: Yup.string().required('Brand is required'),
    category: Yup.string().required('Category is required'),
    dateAdded: Yup.string().required("DateAdded is required"),
    image: Yup.string().url('Invalid URL').required('Image URL is required'),
  });

  const onSubmit = async (values) => {

    try {
      const response = await Products(values);
      const { data } = response;

      if (!data) {
        toast.error('Failed to add product');
      } else if (data.name) {
        toast.success(`${data.name} product added successfully`);
      } else {
        toast.success('Product has been added successfully');
      }
    } catch (error) {
      toast.error('An error occurred while adding the product');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="addProductSection">
          <div className="addProductInputDiv">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER NAME HERE..."
            />
            {formik.touched.name && formik.errors.name && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.name}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Description</label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="PRODUCT DESCRIPTION..."
            />
            {formik.touched.description && formik.errors.description && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.description}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER PRICE HERE ..."
            />
            {formik.touched.price && formik.errors.price && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.price}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER STOCK HERE ..."
            />
            {formik.touched.stock && formik.errors.stock && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.stock}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Brand</label>
            <select
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Brand</option>
              <option value="iphone">iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Motorola">Motorola</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Realme">Realme</option>

            </select>
            {formik.touched.brand && formik.errors.brand && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.brand}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Category</label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Category</option>
              <option value="Photography">Photgraphy</option>
              <option value="Gaming">Gaming</option>
              <option value="Battery">Battery</option>
             
            </select>
            {formik.touched.category && formik.errors.category && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.category}
              </p>
            )}
          </div>
          <br />
          <div className='addProductInputDiv'>
            <label>Date Added</label>
            <input
            type='text'
            name='dateAdded'
            value={formik.values.dateAdded}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='yyyy-mm-dd'
            />
            {formik.touched.dateAdded && formik.errors.dateAdded &&
            (
              <p 
              className='error-message'
              style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.dateAdded}
              </p>
            )}

            <br/>
          </div>
          <div className="addProductInputDiv">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER IMAGE URL HERE ..."
            />
            {formik.touched.image && formik.errors.image && (
              <p className="error-message" style={{ marginTop: '5px', color: 'red' }}>
                {formik.errors.image}
              </p>
            )}
          </div>
          <br />
          <button type="submit" id="AddProductBtn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
