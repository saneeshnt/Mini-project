import React from 'react';
import AdvertisementSlider from './AdvertisementSlider';

const Advertisements = () => {
  // Dummy advertisement data
  const advertisements = [
    { imageUrl: 'https://example.com/ad1.jpg' },
    { imageUrl: 'https://example.com/ad2.jpg' },
    { imageUrl: 'https://example.com/ad3.jpg' },
  ];

  return (
    <div>
      <h1>Welcome to Our Smartphone Store</h1>
      <AdvertisementSlider advertisements={advertisements} />
    </div>
  );
};

export default Advertisements;
