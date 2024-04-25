import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../../User/Headers/Header1/Header.css'; 

function Header() {
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
    const toggleBrandDropdown = () => {
      setIsBrandOpen(!isBrandOpen);
      setIsCategoryOpen(false); // Close category dropdown when brand dropdown is toggled
    };

    const toggleCategoryDropdown = () => {
      setIsCategoryOpen(!isCategoryOpen);
      setIsBrandOpen(false); // Close brand dropdown when category dropdown is toggled
    };

    return (
      <div className='Header'>
        <div className='headerbrand'>
          <Link to="/">
            <h1 className='brand-name'>PHONE!X</h1>
          </Link>
        </div>
        <div className='header-options'>
          <ul>
            <li><Link to='/new'>NEW ARRIVALS</Link></li>
            <li className="dropdown">
              <li className="dropdown-btn" onClick={toggleBrandDropdown}>
                BRANDS
              </li>
              {isBrandOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li><Link to='/i'>Apple</Link></li>
                    <li><Link to='/samsung'>Samsung</Link></li>
                    <li><Link to='/oneplus'>OnePlus</Link></li>
                    <li><Link to='/motorola'>Motorola</Link></li>
                    <li><Link to='/realme'>Realme</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li className="dropdown">
              <li className="dropdown-btn" onClick={toggleCategoryDropdown}>
                CATEGORIES
              </li>
              {isCategoryOpen && (
                <div className="dropdown-menu">
                  <ul>
                  <li><Link to='/camera'>PHOTOGRAPHY</Link></li>
                    <li><Link to='/gaming'>GAMING</Link></li>
                    <li><Link to='/battery'>BATTERY</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to='/support'>SUPPORT</Link></li>
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
    );
}

export default Header;
