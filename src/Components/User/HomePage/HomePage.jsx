import React from 'react'
import "./HomePage.css"

function HomePage() {
  return (
    <><div className='HomePage'>
      <div className='ads'>
        <img className='img1' src="https://i.postimg.cc/cCBypXZg/FB-WEBSITE-BANNER-i-Phone-600x940-03.jpg"
          alt="ads1" />
        <img className='img2' src="https://i.postimg.cc/tRzvmPR8/One-Plus-Open-Foldable-Phone-Set-To-Launch-In-India-On.jpg"
          alt="ads2" />
        <img className='img3' src="https://i.postimg.cc/MK1sjFvk/Realme-X2-Pro-rear-quad-camera-assembly.jpg"
          alt="ads3" />
      </div>
      <div className='contents'>
        <h2 className='welcome'>WELCOME TO</h2>
        <h1 className='cartname'>phoen!X</h1>
      </div>

    </div></>
  )
}

export default HomePage