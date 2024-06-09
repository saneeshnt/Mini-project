import React, { useEffect, useState } from 'react'
import './Apple.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { apple } from '../../../../../Services/UserApi';

function Apple() {

  const [appleData, setAppledata] = useState([]);

  const fetchData = async () => {
    try{
      const {data} = await apple();
      if(data.status){
        setAppledata(data.Apple);
        console.log(data.Apple)
      } else {
        console.log("error");
      }
    } catch(error){
      console.log("Error fetching data : ", error);
    } 
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-apple'>
        <div className='brand-apple-heading'>
          <h1>Iphones</h1>
        </div>
        <ProductsPage products={appleData} />
      </div>

    </>
  )
}

export default Apple


// import React, { useEffect, useState } from "react";
// import "./Apple.css";
// import ProductsPage from "../../ProductsPage/ProductsPage";
// import { apple } from "../../../../../Services/UserApi";


// function Apple() {
//   const [apple, setApple] = useState([]);

//   const fetchData = async () => {
//     try {
//       const { data } = await apple();
//       if (data.status) {
//         setApple(data.apple);
//       } else {
//         console.log("Error");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } 
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);



//   return (
//   <div className='new-arrivals'>
//          <div className='new-arrival-heading'>
//            <h1>iPHONES</h1>
//          </div>
//          <ProductsPage products={apple} />
//        </div>  )
// }

// export default Apple