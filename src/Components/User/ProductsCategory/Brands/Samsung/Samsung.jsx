import React, { useEffect, useState } from 'react'
import './Samsung.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { samsung } from '../../../../../Services/UserApi';

function Samsung() {

  const [samsungData, setSamsungdata] = useState([]);

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
    } 
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-samsung'>
        <div className='brand-samsung-heading'>
          <h1>Samsung</h1>
        </div>
        <ProductsPage products={samsungData} />
      </div>

    </>
  )
}

export default Samsung