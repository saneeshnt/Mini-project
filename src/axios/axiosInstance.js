import axios from "axios"
const userInstance =axios.create({
    baseURL:"http://localhost:8080/"
});
const adminInstance = axios.create({
    baseURL:"http://localhost:8080/admin/"

}) 

export {userInstance,adminInstance}