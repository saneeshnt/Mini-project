import React, { useEffect, useState } from 'react'
import './Photography.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { photography } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Photography() {

  const [photographyData, setPhotographydata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try{
      const {data} = await photography();
      if(data.status){
        setPhotographydata(data.photography);
        console.log(data.photography)
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

  if(photographyData.length === 0){
    return <Empty message="No Products Available" />
  }
  return (
    <>
      <div className='brand-photography'>
        <div className='brand-photography-heading'>
          <h1>Category -High Camera Performance Phones</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={photographyData} />
        )}
      </div>

    </>
  )
}

export default Photography
