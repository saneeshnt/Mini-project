import React, { useEffect, useState } from 'react'
import './Battery.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { battery } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Battery() {

  const [batteryData, setBatterydata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try{
      const {data} = await battery();
      if(data.status){
        setBatterydata(data.battery);
        console.log(data.battery)
      } else {
        console.log("error");
      }
    } catch(error){
      console.log("Error fetching data : ", error);
    }  finally {
      // Set loading to false after a delay of 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  if(batteryData.length === 0){
    return <Empty message="No Products Available" />
  }
  return (
    <>
      <div className='brand-battery'>
        <div className='brand-battery-heading'>
          <h1>Category -High Battery Performance Phones</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={batteryData} />
        )}
      </div>

    </>
  )
}

export default Battery
