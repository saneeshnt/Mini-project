import React, { useEffect, useState } from 'react'
import './OnePlus.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { oneplus } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function OnePlus() {

  const [oneplusData, setOneplusdata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try{
      const {data} = await oneplus();
      if(data.status){
        setOneplusdata(data.OnePlus);
        console.log(data.OnePlus)
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

  if(oneplusData.length === 0){
    return <Empty message="No Products Available" />
  }

  return (
    <>
      <div className='brand-oplus'>
        <div className='brand-oplus-heading'>
          <h1>OnePlus</h1>
        </div>
        {loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={oneplusData} />
        )}
      </div>

    </>
  )
}

export default OnePlus