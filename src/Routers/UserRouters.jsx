import React from 'react' 
import {Route,Routes} from  "react-router-dom";
import UserHome from "../Pages/User/UserHome";
import UserLogin from "../Pages/User/UserLogin";
import UserSignup from "../Pages/User/UserSignup";
import UserNewArrivals from '../Pages/User/UserNewArrivals';
import UserSupport from '../Pages/User/UserSupport';
import UserCart from '../Pages/User/UserCart';
import UserSamsung from '../Pages/User/UserBrands/UserSamsung';
import UserApple from '../Pages/User/UserBrands/UserApple';
import UserOnePlus from '../Pages/User/UserBrands/UserOnePlus';
import UserRealme from '../Pages/User/UserBrands/UserRealme';
import UserMotorola from '../Pages/User/UserBrands/UserMotorola';
import UserGaming from "../Pages/User/userCategories/userGaming";
import UserBattery from "../Pages/User/userCategories/userBattery";
import UserPhotography from '../Pages/User/userCategories/userPhotography';
import UserSingleProduct from "../Pages/User/UserSingleProduct";




function UserRouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserHome />}/>
            <Route path="/login" element={<UserLogin />}/>
            <Route path="/signup" element={<UserSignup />}/> 
            <Route path='/new' element={<UserNewArrivals />}/>
            <Route path="/samsung" element={<UserSamsung/>}/>
            <Route path="/i" element={<UserApple/>}/>
            <Route path="/realme" element={<UserRealme/>}/>
            <Route path="/oneplus" element={<UserOnePlus/>}/>
            <Route path="/motorola" element={<UserMotorola/>}/>
            <Route path="/support" element={<UserSupport/>}/>
            <Route path="/cart" element={<UserCart/>}/>
            <Route path="/gaming" element={<UserGaming/>}/>
            <Route path="/battery" element={<UserBattery/>}/>
            <Route path="/camera" element={<UserPhotography/>}/>
            <Route path="/singlepage/:productId"  element={<UserSingleProduct/>}/>
          

        </Routes>
       
    </div>
  )
}

export default UserRouters