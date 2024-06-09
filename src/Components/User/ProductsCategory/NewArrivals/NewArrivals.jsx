// import React from 'react'
// import './NewArrivals.css';
// import ProductsPage from '../../ProductsPage/ProductsPage';
// import productsData from '../../../../Datas/Products.json'

// function NewArrivals() {
//   const newarrival = productsData.productsdata.sort((a,b)=>new  Date(b.date) - new Date(a.date))
//   return (
//     <>
//       <div className='new-arrivals'>
//         <div className='new-arrival-heading'>
//           <h1>NEW ARRIVALS</h1>
//         </div>
//         <ProductsPage products={newarrival} />
//       </div>

//     </>
//   )
// }

// export default NewArrivals



import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import ProductPage from "../../ProductsPage/ProductsPage";
import { latestArrivals } from "../../../../Services/UserApi";
import Loader from "../../Loader/Loader";
import Empty from '../../Empty/Empty';



function NewArrivals() {
  const [latestarrival, setLatestarrival] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchData = async () => {
    try {
      const { data } = await latestArrivals();
      if (data.status) {
        setLatestarrival(data.LatestArrival);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Set loading to false after a delay of 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(latestarrival.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className="latestArrival">
        <div className="latestArrivalHeading">
          <h1>Latest Arrivals</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
          <ProductPage products={latestarrival} />
        )}
      </div>
    </>
  );
}
export default NewArrivals