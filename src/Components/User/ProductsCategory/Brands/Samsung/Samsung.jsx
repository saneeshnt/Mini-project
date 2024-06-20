import React, { useEffect, useState } from 'react'
import './Samsung.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { samsung } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Samsung() {

  const [samsungData, setSamsungdata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try{
      const {data} = await samsung();
      if(data.status){
        setSamsungdata(data.Samsung);
        console.log(data.Samsung)
      } else {
        console.log("error");
      }
    } catch(error){
      console.log("Error fetching data : ", error);
    } finally {
      // Set loading to false after a delay of 1.5 seconds
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  if(samsungData.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className='brand-samsung'>
        <div className='brand-samsung-heading'>
          <h1>Samsung</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={samsungData} />
        )}
      </div>

    </>
  )
}

export default Samsung