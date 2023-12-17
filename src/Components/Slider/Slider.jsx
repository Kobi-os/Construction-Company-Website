import React from 'react'
import "./slider.scss"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react";

const Slider = () => {
  const images = [
    "/src/assets/images/carouselBG.jpg",
    "/src/assets/images/carouselBG2.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className='gallery'>
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="carousel image"
            className={`gallery_image ${index === currentImage ? 'active' : ''}`}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x:0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ duration: 1 }}
            onClick={handleClick}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Slider