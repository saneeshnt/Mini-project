import React,{useState}from 'react'
import "./Div1.css"

function Div1() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        'https://i.postimg.cc/DzPKH8RN/cheerful-attractive-charismatic-european-redhead-girl-curly-hairstyle-show-smartphone-screen-smiling.jpg',
        'https://i.postimg.cc/N0yx0jhj/ads5.jpg',
        'https://i.postimg.cc/fbsbV3Xz/ads3.jpg',
        ' https://i.postimg.cc/bY00FbYP/ads4.jpg',
        'https://i.postimg.cc/q7nCYhVy/ads6.jpg'
    ];
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    
  return (
    <div className="homepage">
      <button className="gesture-btn prev" onClick={prevImage}>
        &lt;
      </button>
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <button className="gesture-btn next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

 

export default Div1