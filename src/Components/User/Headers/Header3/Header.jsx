import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch,faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../../../User/Headers/Header3/Header.css';

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
        <Link to="/">
          <h1 className='brand-name'>PHONE!X</h1>
        </Link>
      </div>
      <div className="header-links">
        <ul>
          <li><Link to='/i'>Apple</Link></li>
          <li><Link to='/samsung'>Samsung</Link></li>
          <li><Link to='/oneplus'>OnePlus</Link></li>
          <li><Link to='/motorola'>Motorola</Link></li>
          <li><Link to='/realme'>Realme</Link></li>
        </ul>
      </div>



    </div>
    </>

  )

}

export default Header