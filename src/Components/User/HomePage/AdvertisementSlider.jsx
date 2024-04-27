import React, { useState, useEffect } from 'react';
import './AdvertisementSlider.css'; // Import CSS file

const AdvertisementSlider = ({ advertisements }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [advertisements.length]);

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="advertisement-slider">
      <button className="gesture-btn prev" onClick={prevAd}>
        &lt;
      </button>
      <div className="slider">
        {advertisements.map((ad, index) => (
          <div
            key={index}
            className={`slide ${index === currentAdIndex ? 'active' : ''}`}
          >
            <img src={ad.imageUrl} alt={`Ad ${index}`} />
          </div>
        ))}
      </div>
      <button className="gesture-btn next" onClick={nextAd}>
        &gt;
      </button>
    </div>
  );
};

export default AdvertisementSlider;
