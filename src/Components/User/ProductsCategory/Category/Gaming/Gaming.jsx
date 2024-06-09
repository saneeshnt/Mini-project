import React, { useEffect, useState } from 'react'
import './Gaming.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { gaming } from '../../../../../Services/UserApi';

function Gaming() {

  const [gamingData, setGamingdata] = useState([]);

  const fetchData = async () => {
    try{
      const {data} = await gaming();
      if(data.status){
        setGamingdata(data.gaming);
        console.log(data.gaming)
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
      <div className='brand-gaming'>
        <div className='brand-gaming-heading'>
          <h1>Category -High Gaming Performance Phones</h1>
        </div>
        <ProductsPage products={gamingData} />
      </div>

    </>
  )
}

export default Gaming
