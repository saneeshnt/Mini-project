import React, { useEffect, useState } from 'react'
import './Gaming.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { gaming } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Gaming() {

  const [gamingData, setGamingdata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


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

  if(gamingData.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className='brand-gaming'>
        <div className='brand-gaming-heading'>
          <h1>Category -High Gaming Performance Phones</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={gamingData} />
        )}
      </div>

    </>
  )
}

export default Gaming
