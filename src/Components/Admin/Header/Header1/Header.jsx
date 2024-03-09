import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Admin/Header/Header1/Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
        <Link to="/admin/home">
      <h1 className='brand-name'>PHONE!X</h1>
      </Link>
      </div>
      <div className='admin-headerlinks'>
        <ul>
          <Link to='/admin/userlists'><li>USER LISTS</li></Link>
          <Link to='/admin/viewproducts'><li>VIEW PRODUCTS</li></Link>
          <Link to='/admin/addproducts'><li>ADD PRODUCTS</li></Link>

        </ul>

      </div>

      </div>
      
      </>

  )

}

export default Header