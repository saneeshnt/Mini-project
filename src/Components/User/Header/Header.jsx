import React from 'react'
import './Header.css'

function Header() {
  return (
    <><div className='Header'>
      <div className='headerbrand'>
        <h1 >phone!X</h1>

        <img className='brandlogo'
          src="https://i.postimg.cc/ZYLcyrDf/Photo-1707834659325.png"
          alt="brandlogo" />

      </div>
      <div className='headerlinks'>
        <ul><li><a>Latest</a></li>
          <li><a>Brands</a></li>
          <li><a>Categories</a></li>
          <li><a>Support</a></li>

        </ul>

      </div>
      <div className='headerbuttons'>

        <button className='wishlist' >WishList</button>
        <button className='favourite' >Fav</button>
      </div></div></>

  )

}

export default Header