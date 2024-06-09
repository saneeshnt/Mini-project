import React, { useEffect, useState } from 'react'
import './Battery.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { battery } from '../../../../../Services/UserApi';

function Battery() {

  const [batteryData, setBatterydata] = useState([]);

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
    } 
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-battery'>
        <div className='brand-battery-heading'>
          <h1>Category -High Battery Performance Phones</h1>
        </div>
        <ProductsPage products={batteryData} />
      </div>

    </>
  )
}

export default Battery
