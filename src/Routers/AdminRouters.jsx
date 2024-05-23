import React from 'react'
import { Route,Routes } from 'react-router-dom';
import AdminHome from "../Pages/Admin/AdminHome";
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminUserList from '../Pages/Admin/AdminUserList';
import AdminViewProducts from '../Pages/Admin/AdminViewProducts';
import AdminAddProducts from '../Pages/Admin/AdminAddProduct';
import AdminEditProducts from '../Pages/Admin/AdminEditProducts';



function AdminRouters() {
  return (
    <div>
        <Routes>
            <Route  path="/" element={<AdminLogin/>}/>
            <Route path="/home" element={<AdminHome/>}/>
            <Route path="/userlists" element={<AdminUserList/>}/>
            <Route path="/viewproducts" element={<AdminViewProducts/>}/>
            <Route path="/addproducts" element={<AdminAddProducts/>}/>
            <Route path="/editproducts" element={<AdminEditProducts/>}/>
            

            
        </Routes>
    </div>
  )
}

export default AdminRouters