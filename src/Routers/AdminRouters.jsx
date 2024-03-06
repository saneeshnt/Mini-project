import React from 'react'
import { Route,Routes } from 'react-router-dom';
import AdminHome from "../Pages/Admin/AdminHome";
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminEditProducts from "../Pages/Admin/AdminEditProducts";


function AdminRouters() {
  return (
    <div>
        <Routes>
            <Route  path="/admin/*" element={<AdminHome />}/>
            <Route exact path="/login" element={<AdminLogin />}/>
            <Route path="/editProduct" element={<AdminEditProducts/>}/>
            <Route path="/home" element={<AdminHome/>}/>

        </Routes>
    </div>
  )
}

export default AdminRouters