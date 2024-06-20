import { userInstance } from "../axios/axiosInstance"


//post

export const createOrder = (orderData) => {
    return userInstance.post("/createorder", { ...orderData });
  };
  


export const signup=(value)=>{
    return userInstance.post("/signup",{...value})
}


export const login=(value)=>{
    return userInstance.post('/login', {...value})
}

export const AddToWishlist = (productId) => {
  return userInstance.post("/wishlist", { productId });
};

//get methods

export const latestArrivals = () => {
    return userInstance.get("/newarrivals");
  };
  






  export const userStatus = () => {
    return userInstance
      .get("/auth/status")
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching user status:", error);
        return { user: null };
      });
  };




  export const getProductDetails = (productId) => {
    return userInstance.get(`/product/${productId}`);
  };
  
  export const getUser = () => {
    return userInstance.get("/user");
  };

  export const apple = () => {
    return userInstance.get("/apple");
  }

  export const samsung = () => {
    return userInstance.get("/samsung");
  }

  export const oneplus = () => {
    return userInstance.get("/oneplus");
  }

  export const realme = () => {
    return userInstance.get("/realme");
  }

  export const motorola = () => {
    return userInstance.get("/motorola");
  }

  export const battery=()=>{
    return userInstance.get("/battery")
  }

  export const gaming=()=>{
    return userInstance.get("/gaming")
  }

  export const photography=()=>{
    return userInstance.get("/photography")
  }

  export const checkProductInWishlist = (productId) => {
    return userInstance.get(`/wishlist/check/${productId}`);
  }