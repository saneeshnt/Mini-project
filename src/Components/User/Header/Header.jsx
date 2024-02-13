import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
      <div className='headerbrand'>
        <h1 >phoen!X</h1>
        
        <img className='pic'
          src="https://i.postimg.cc/ZYLcyrDf/Photo-1707834659325.png"
          alt="img" />

      </div>
      <div className='headerlinks'>
        <ul><li><a>Latest</a></li>
          <li><a>Brands</a></li>
          <li><a>Categories</a></li>
          <li><a>Support</a></li>

        </ul>

      </div>
      <div className='headerbuttons'>

        <button className='Bag'>Bag</button>
        <button className='favourite'>Fav</button>
      </div></div>

      )

}

      export default Header