import React, { useEffect, useState } from 'react'
import './Realme.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { realme } from '../../../../../Services/UserApi';

function Realme() {

  const [realmeData, setRealmedata] = useState([]);

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
    } 
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-realme'>
        <div className='brand-realme-heading'>
          <h1>Realme</h1>
        </div>
        <ProductsPage products={realmeData} />
      </div>

    </>
  )
}

export default Realme