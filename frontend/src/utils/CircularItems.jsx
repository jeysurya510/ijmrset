import React, { useState, useEffect } from 'react';
import C1 from '../assets/C1.jpeg';
import C2 from '../assets/C2.jpeg';
import C3 from '../assets/C3.jpeg';
import C4 from '../assets/C4.jpeg';
import C5 from '../assets/C5.jpeg';
import C6 from '../assets/C6.jpeg';
import C7 from '../assets/C7.jpeg';
import C8 from '../assets/C8.jpeg';

const CircularItems = () => {
  const images = [C1, C2, C3, C4, C5, C6, C7, C8];
  const [currentImages, setCurrentImages] = useState([...images]);

  const positions = [
    { left: '50%', top: '-10px' }, // Top Center
    { right: '40px', top: '20px' }, // Top Right
    { right: '-120px', top: '60%' }, // Center Right
    { right: '40px', bottom: '-90px' }, // Bottom Right
    { left: '50%', bottom: '-125px' }, // Bottom Center
    { left: '110px', bottom: '-90px' }, // Bottom Left
    { left: '70px', top: '60%' }, // Center Left
    { left: '110px', top: '20px' }, // Top Left
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[800px] h-[600px]">
      {currentImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`C${index + 1}`}
          className={`circle-item  ${index === 2 || index === 6 ? 'large' : ''}`}
          style={{
            ...positions[index],
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default CircularItems;
