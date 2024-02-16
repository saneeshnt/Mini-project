import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
       <img className='brand-name' src="https://i.postimg.cc/KcNq30wK/Screenshot-2024-02-16-161534-removebg-preview.png"
        alt="brand-name" />
      </div>
      <div className='headerlinks'>
        <ul><li><a>Latest</a></li>
          <li><a>Brands</a></li>
          <li><a>Categories</a></li>
          <li><a>Support</a></li>

        </ul>

      </div>

      <div className='headersearch'>
        <input type="text" placeholder="Search..." />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      
      <div className='header-icons'>
      <FontAwesomeIcon icon={faShoppingCart} />
        <FontAwesomeIcon className='heart-icon' icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />

        
      </div>
      </div></>

  )

}

export default Header