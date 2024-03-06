import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch,faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; 

function Header() {
  return (
    <><div className='Header2'>
      <div className='headerbrand'>
      <Link to="/">
      <h1 className='brand-name'>PHONE!X</h1>
      </Link>
      </div>
      
      
      {/* <div className='headerlinks2'>
        <ul>
       
          <Link to='/new'><li>NEW ARRIVALS</li></Link>
          <Link to='/brands'><li>BRANDS</li></Link>
          <Link to='/categories'><li>CATEGORIES</li></Link>
          <Link to='/support'><li>SUPPORT</li></Link>

        </ul>

      </div> */}

      
     
      {/* <div className='signup-button'>
      <Link to="/signup" className="action-link">
           <button className='btn'>SignUp</button>
      </Link>
      </div> */}
      </div>
      </>

  )

}

export default Header