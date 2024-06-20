import React, { useEffect, useState } from 'react'
import './Realme.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { realme } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Realme() {

  const [realmeData, setRealmedata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try{
      const {data} = await realme();
      if(data.status){
        setRealmedata(data.Realme);
        console.log(data.Realme)
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

  if(realmeData.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className='brand-realme'>
        <div className='brand-realme-heading'>
          <h1>Realme</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={realmeData} />
        )}
      </div>

    </>
  )
}

export default Realme