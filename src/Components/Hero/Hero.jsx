import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/src/assets/images/salon.jpg',
  'salon3.jpg',
  'salon2.jpg',
  // Dodaj więcej URL-ów do zdjęć według potrzeb
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={prevSlide}>Poprzednie</button>
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </AnimatePresence>
      <button onClick={nextSlide}>Następne</button>
    </div>
  );
};

export default Hero;