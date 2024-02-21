import React from 'react' 
import {Route,Routes} from  "react-router-dom";
import UserHome from "../Pages/User/UserHome"
import UserLogin from "../Pages/User/UserLogin";
import UserSignup from "../Pages/User/UserSignup";
import UserNewArrivals from '../Pages/User/UserNewArrivals';
import UserCategories from '../Pages/User/UserCategories';
import UserBrands from '../Pages/User/UserBrands';
import UserSupport from '../Pages/User/UserSupport';

function UserRouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/signup" element={<UserSignup />}/> 
            <Route path='/new' element={<UserNewArrivals />}/>
            <Route path="/categories" element={<UserCategories/>}/>
            <Route path="/brands" element={<UserBrands/>}/>
            <Route path="/support" element={<UserSupport/>}/>


        </Routes>
       
    </div>
  )
}

export default UserRouters