import React from 'react' 
import {Route,Routes} from  "react-router-dom";
import UserHome from "../Pages/User/UserHome"
import UserLogin from "../Pages/User/UserLogin";
import UserSignup from "../Pages/User/UserSignup";
import UserProduct from "../Pages/User/UserProduct"

function UserRouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/signup" element={<UserSignup />}/> 
            <Route path='/product' element={<UserProduct />}/>
        </Routes>
       
    </div>
  )
}

export default UserRouters