import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./AddProducts.css";

import { Products } from "../../../Services/AdminApi"; // Correct import path



function AddProducts() {
  const initialValues = {
    name: "",
    brand: "",
    description: "",
    price: "",
    stock:"",
    // dateAdded: "",
    category: "photography",
    image: null, // Add image field to initial values
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    brand: Yup.string().required("Brand name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required"),
    stock: Yup.number().required("stock is required"),
    category: Yup.string().required("category is required"),



    // dateAdded: Yup.string().required("Date Added is required"),
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("brand", values.brand);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("stock", values.stock);
    // formData.append("dateAdded", new Date(values.dateAdded).toISOString());
    formData.append("category", values.category);
    formData.append("image", values.image); // Append image to form data

    const response = await Products(formData);
    console.log(response);

    const { data, error } = response;
    if (error) {
      toast.error(error);
    } else if (data) {
      toast.success(`${data.name || "Product"} has been added`);
    } else {
      toast.error("Failed to add product");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleFileChange = (e) => {
    formik.setFieldValue("image", e.currentTarget.files[0]);
  };

  return (
    <div className="addProduct">
      <h1>Add Product</h1>
      <div className="addProductSection">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="addProductInputDiv">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER NAME HERE..."
            />
            {formik.touched.name && formik.errors.name && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.name}
              </p>
            )}
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ENTER BRAND HERE..."
            />
            {formik.touched.brand && formik.errors.brand && (
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.brand}
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
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
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
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
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
              <p
                className="error-message"
                style={{ marginTop: "5px", color: "red" }}
              >
                {formik.errors.stock}
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
              <option value="photograpgy">Photography</option>
              <option value="battery">Battery</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>
          <br />
          <div className="addProductInputDiv">
            <label>Image</label>
            <input type="file" name="image" onChange={handleFileChange} />
          </div>
          <br />
          <button type="submit" id="AddProductBtn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}


export default AddProducts