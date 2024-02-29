import React from 'react' 
import {Route,Routes} from  "react-router-dom";
import UserHome from "../Pages/User/UserHome";
import UserLogin from "../Pages/User/UserLogin";
import UserSignup from "../Pages/User/UserSignup";
import UserNewArrivals from '../Pages/User/UserNewArrivals';
import UserCategories from '../Pages/User/UserCategories';
import UserSupport from '../Pages/User/UserSupport';
import UserCart from '../Pages/User/UserCart';
import UserSamsung from '../Pages/User/UserBrands/UserSamsung';
import UserApple from '../Pages/User/UserBrands/UserApple';
import UserOnePlus from '../Pages/User/UserBrands/UserOnePlus';
import UserRealme from '../Pages/User/UserBrands/UserRealme';
import UserMotorola from '../Pages/User/UserBrands/UserMotorola';



function UserRouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/signup" element={<UserSignup />}/> 
            <Route path='/new' element={<UserNewArrivals />}/>
            <Route path="/categories" element={<UserCategories/>}/>
            <Route path="/samsung" element={<UserSamsung/>}/>
            <Route path="/i" element={<UserApple/>}/>
            <Route path="/realme" element={<UserRealme/>}/>
            <Route path="/oneplus" element={<UserOnePlus/>}/>
            <Route path="/motorola" element={<UserMotorola/>}/>
            <Route path="/support" element={<UserSupport/>}/>
            <Route path="/cart" element={<UserCart/>}/>



        </Routes>
       
    </div>
  )
}

export default UserRouters