import React from 'react';
import { Link } from 'react-router-dom';

import '../../Header/Header2/Header.css'; 

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
      <Link to="/admin/home">
      <h1 className='brand-name'>PHONE!X</h1>
      </Link>
      </div>
      
      
    
      </div>
      </>

  )

}

export default Header