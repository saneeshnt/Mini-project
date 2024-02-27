import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
       <img className='brand-name' src="https://i.postimg.cc/KcNq30wK/Screenshot-2024-02-16-161534-removebg-preview.png"
        alt="brand-name" />
      </div>
      <div className='headerlinks'>
        <ul><li><a href='/new'>New Arrivals</a></li>
          <li><a href='/brands'>Brands</a></li>
          <li><a href='/categories'>Categories</a></li>
          <li><a href='/support'>Support</a></li>

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
           <button>SignUp</button>
      </Link>
      </div>
      </div></>

  )

}

export default Header