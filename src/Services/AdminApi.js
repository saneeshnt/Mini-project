import {adminInstance} from '../axios/axiosInstance'

//post

export  const login=(value)=>{
    return adminInstance.post("/login",{...value})
}

export const Products =(value)=>{
    return adminInstance.post("/add",{...value})

}


//get

export const userList = () => {
    return adminInstance.get("/userlist");
};

export const viewProducts = () => {
    return adminInstance.get("/view");
};