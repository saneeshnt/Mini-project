import React, { useEffect, useState } from 'react'
import './Motorola.css'
// import { Link } from 'react-router-dom'
import ProductsPage from '../../../ProductsPage/ProductsPage'
import { motorola } from '../../../../../Services/UserApi';

function Motorola() {
  const [motorolaData, setMotoroladata] = useState([]);

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
    }
  };

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <>
      <div className='brand-moto'>
        <div className='brand-moto-heading'>
          <h1>Motorola</h1>
        </div>
        <ProductsPage products={motorolaData} />
      </div>

    </>
  )
}

export default Motorola