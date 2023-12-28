import React from 'react';
import './style.css';
import images from './constant.js';
import { useState, useEffect } from 'react';

export default function App() {
  const [activeImage, setActiveImage] = useState(0);


  const nextSlide = () => {
    setActiveImage((activeImage + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  };

  return (
    <>
      <h1>Image Slide</h1>
      <div className="slider-container">
        <button onClick={nextSlide}> Next Slide </button>

        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            width="300px"
            height="auto"
            style={{
              display: activeImage === index ? 'block' : 'none',
            }}
            alt="slide image"
          />
        ))}

        <button onClick={prevSlide}> Previous Slide</button>
      </div>
    </>
  );
}
