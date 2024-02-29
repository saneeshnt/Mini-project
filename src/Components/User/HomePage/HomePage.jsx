import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className='HomePage'>
      <div className='ads'>
        <img className='img1' src="https://i.postimg.cc/cCBypXZg/FB-WEBSITE-BANNER-i-Phone-600x940-03.jpg"
          alt="ads1" />
        <img className='img2' src="https://i.postimg.cc/tRzvmPR8/One-Plus-Open-Foldable-Phone-Set-To-Launch-In-India-On.jpg"
          alt="ads2" />
        <img className='img3' src="https://i.postimg.cc/LXC10HH1/istockphoto-1302676710-2048x2048-result.png"
          alt="ads3" />
          {/* <img className='img4' src="https://i.postimg.cc/hGyxxtHw/istockphoto-1163987892-170667a.webp" 
          alt="ads4" /> */}
      </div>
      <div className='contents'>
        <h2>Welcome to phone!X<br/> "your ultimate destination for the latest in smartphones!"</h2>
       
      </div>
      <div  className='buttons'>
        <Link to='/new'>
        <button className='explore-button' >explore now</button>
        </Link>
      </div>

    </div>
  )
}

export default HomePage