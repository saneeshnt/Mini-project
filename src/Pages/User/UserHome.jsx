import React from 'react'
import Header from '../../Components/User/Headers/Header1/Header'
import HomePage from '../../Components/User/HomePage/HomePage'
import Footer from '../../Components/User/Footer/Footer'
import Div1 from '../../Components/User/HomePage/Div1'
// import Advertisements from '../../Components/User/HomePage/Advertisements'

function UserHome() {
  return (
    <div>
    <Header/>
    {/* <Advertisements/> */}
    <HomePage/>
    <Div1/>
    <Footer/>
    </div>
  )
}

export default UserHome