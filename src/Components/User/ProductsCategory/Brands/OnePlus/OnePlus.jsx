import React, { useEffect, useState } from 'react'
import './OnePlus.css'
// import { Link } from 'react-router-dom'
import ProductsPage from  '../../../ProductsPage/ProductsPage'
import { oneplus } from '../../../../../Services/UserApi';

function OnePlus() {

  const [oneplusData, setOneplusdata] = useState([]);

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
    } 
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='brand-oplus'>
        <div className='brand-oplus-heading'>
          <h1>OnePlus</h1>
        </div>
        <ProductsPage products={oneplusData} />
      </div>

    </>
  )
}

export default OnePlus