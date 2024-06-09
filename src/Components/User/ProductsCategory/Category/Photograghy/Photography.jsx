import React, { useEffect, useState } from 'react'
import './Photography.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { photography } from '../../../../../Services/UserApi';

function Photography() {

  const [photographyData, setPhotographydata] = useState([]);

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
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-photography'>
        <div className='brand-photography-heading'>
          <h1>Category -High Camera Performance Phones</h1>
        </div>
        <ProductsPage products={photographyData} />
      </div>

    </>
  )
}

export default Photography
