import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
        <Link to="/">
      <h1 className='brand-name'>PHONE!X</h1>
      </Link>
      </div>
      <div className='headerlinks'>
        <ul>
          <Link to='/new'><li>NEW ARRIVALS</li></Link>
          <Link to='/brands'><li>BRANDS</li></Link>
          <Link to='/categories'><li>CATEGORIES</li></Link>
          <Link to='/support'><li>SUPPORT</li></Link>

        </ul>

      </div>

      <div className='headersearch'>
        <input type="text" placeholder="Search..." />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      
      <div className='header-icons'>
      <Link to="/cart" className="action-link">
      <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      </div>
      <div className='signup-button'>
      <Link to="/signup" className="action-link">
           <button className='btn'>SignUp</button>
      </Link>
      </div>
      </div>
      </>

  )

}

export default Header