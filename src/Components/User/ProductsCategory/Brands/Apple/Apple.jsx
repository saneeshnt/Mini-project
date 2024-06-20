import React, { useEffect, useState } from 'react'
import './Apple.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { apple } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"


function Apple() {

  const [appleData, setAppledata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


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
    finally {
      // Set loading to false after a delay of 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  if(appleData.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className='brand-apple'>
        <div className='brand-apple-heading'>
          <h1>Iphones</h1>
        </div> {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={appleData} />
        )}
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