import { adminInstance } from '../axios/axiosInstance'

//post

export const login = (value) => {
    return adminInstance.post("/login", { ...value })
}

export const Products = (formData) => {
    return adminInstance.post("/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  

//get

export const userList = () => {
    return adminInstance.get("/userlists");
    
}


export const viewProducts = () => {
    return adminInstance.get("/view");
  };

  
export const getProductById = (id) => {
    return adminInstance.get(`/products/${id}`);
  };
  
//put

export const blockUser = (userId) => {
    return adminInstance.put(`/users/${userId}/block`);
}

export const disableProduct = (productId) => {
    return adminInstance.put(`/products/${productId}/disable`);
  };
  
  export const updateProduct = (id, productData) => {
    return adminInstance.put(`/products/${id}`, productData);
  };
  

  //delete

  export const deleteProduct = (productId) => {
    return adminInstance.delete(`/products/${productId}/delete`);
  };
  