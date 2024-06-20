import React, { useEffect, useState } from 'react'
import './Motorola.css'
// import { Link } from 'react-router-dom'
import ProductsPage from '../../../ProductsPage/ProductsPage'
import { motorola } from '../../../../../Services/UserApi';
import Loader from "../../../Loader/Loader";
import Empty from "../../../Empty/Empty"

function Motorola() {
  const [motorolaData, setMotoroladata] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading


  const fetchData = async () => {
    try {
      const { data } = await motorola();
      if (data.status) {
        setMotoroladata(data.Motorola);
      } else {
        console.log("error");
      }
    } catch (error) {
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

  if(motorolaData.length === 0){
    return <Empty message="No Products Available" />
  }


  return (
    <>
      <div className='brand-moto'>
        <div className='brand-moto-heading'>
          <h1>Motorola</h1>
        </div>{loading ? ( // Render spinner if loading is true
          <Loader/>
        ) : (
        <ProductsPage products={motorolaData} />
        )}
      </div>

    </>
  )
}

export default Motorola