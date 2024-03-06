import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
        <Link to="/">
      <h1 className='brand-name'>PHONE!X</h1>
      </Link>
      </div>
      <div className='admin-headerlinks'>
        <ul>
          <Link to='/view'><li>VIEW PRODUCTS</li></Link>
          <Link to='/add'><li>ADD PRODUCTS</li></Link>
          <Link to='/delete'><li>DELETE PRODUCTS</li></Link>
          <Link to='/support'><li>SUPPORT</li></Link>

        </ul>

      </div>

      </div>
      
      </>

  )

}

export default Header