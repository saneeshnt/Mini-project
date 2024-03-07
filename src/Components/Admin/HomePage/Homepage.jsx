import React from 'react'
import  '../../../Components/Admin/HomePage/HomePage.css';
import {Link} from 'react-router-dom'

function Homepage() {
  return (
  <>
  <div className='admin-homepage'>

    <div className='admin-options'>

     < div className='option'>
      <h2>VIEW PRODUCTS</h2>
      </div>

      <div className='go-button'>
        <Link to="/admin/viewproducts">
      <button type="submit" className=''>Go</button>
      </Link>
      </div>

      </div>
      <div className='admin-options'>

     < div className='option'>
      <h2>USER LISTS</h2>
      </div>

      <div className='go-button'>
        <Link to="/admin/userlist">
      <button type="submit" className=''>Go</button>
      </Link>
      </div>

      </div>
      <div className='admin-options'>

     < div className='option'>
      <h2>ADD PRODUCTS</h2>
      </div>

      <div className='go-button'>
        <Link to="/admin/editproduct">
      <button type="submit" className=''>Go</button>
      </Link>
      </div>

      </div>
      <div className='admin-options'>

     < div className='option'>
      <h2>DELETE PRODUCTS</h2>
      </div>

      <div className='go-button'>
        <Link to="/admin/editproduct">
      <button type="submit" className=''>Go</button>
      </Link>
      </div>

      </div>
      
      </div>
    

    


    </>
  )
}

export default Homepage