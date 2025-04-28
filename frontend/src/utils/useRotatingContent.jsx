import React, { useState, useEffect } from 'react';
import Science from '../assets/ScienceImg.png';
import Engineering from '../assets/ENG.png';
import Bulb from '../assets/bulb.png';

import upload_gif from '../assets/upload_black.gif';
import file_gif from '../assets/file.gif';

const content = [
  {
    heading:
      'Welcome to IJMRSET—Your Premier Destination for Groundbreaking Multidisciplinary Research and Innovation.',
    paragraph:
      'The International Journal of Multidisciplinary Research in Science, Engineering, and Technology (IJMRSET) is a global platform for fostering innovation and excellence across diverse fields. By bridging the gap between academia and industry, we inspire advancements that address global challenges. Our mission is to empower researchers to pioneer breakthroughs that shape the future of science and technology.',
    image: Bulb,
    imgCSS: 'rotate-12', // Image CSS class
    imgContainerCSS: 'radial_yellow', // Container CSS class (you can add more styles here)
  },
  {
    heading: 'Science: Exploring the Vast Frontiers of Knowledge',
    paragraph:
      'Science forms the foundation of innovation and discovery, offering insights through observation and analysis. At IJMRSET, we prioritize groundbreaking research that uncovers new phenomena and addresses real-world problems through interdisciplinary collaboration. Our mission is to bridge the gap between knowledge and application, driving progress for a better tomorrow.',
    image: Science,
    imgCSS: 'scale-110', // Example of another custom CSS class
    imgContainerCSS: 'radial_blue', // Example of container styling
  },
  {
    heading: 'Engineering: Crafting Solutions to Transform Ideas into Reality',
    paragraph:
      'Engineering bridges the gap between science and application, creating solutions that enhance our daily lives. At IJMRSET, we emphasize cutting-edge advancements across engineering disciplines, promoting sustainable and efficient designs. Our focus is on fostering revolutionary innovations that redefine the future and meet the challenges of tomorrow.',
    image: Engineering,
    imgCSS: 'rotate-6',
    imgContainerCSS: 'radial_black',
  },
  {
    heading: 'Technology: Driving Innovation for a Smarter, Connected Tomorrow',
    paragraph:
      'Technology drives progress by transforming vision into reality through innovative tools and systems. At IJMRSET, we showcase breakthroughs that empower industries and enhance connectivity, fostering collaboration across sectors. Our goal is to inspire sustainable development and shape a smarter, more interconnected world for future generations.',
    image: Science,
    imgCSS: 'scale-105',
    imgContainerCSS: 'radial_white',
  },
];

const ContentChanger = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 10000); // Change content every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentContent = content[currentIndex];

  return (
    <div
      className=" lg:min-h-[300px] lg:my-0  my-5  flex py-[10px] items-center px-[5%]"
      key={currentIndex}
    >
      {/* Content Section */}
      <div className="lg:w-[60%] flex flex-col gap-2 justify-center h-[350px]">
        <h1 className="text-white font-lora text-center lg:text-[30px] text-[15px] animate-fadeIn">
          {currentContent.heading}
        </h1>
        <p className="text-white lg:text-[18px] text-[14px] font-sans text-center italic animate-fadeIn">
          {currentContent.paragraph}
        </p>

        <ul className="flex lg:flex-row flex-col justify-center items-center pb-4 gap-3 animate-fadeIn">
          <a
            href="mailto:ijmrset@gmail.com"
            className="bg-[#fff] p-3 rounded-lg flex gap-2 justify-center w-fit lg:text-[20px] text-[15px] text-black font-semibold font-lora"
          >
            <img src={upload_gif} alt="Book Now" className="lg:w-[30px] w-[20px]" />

            <button type="button">Submit Paper via Email</button>
          </a>
          <a
            href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fijmrset.com%2FIJMRSET_Paper%2520Template.docx&wdOrigin=BROWSELINK"
            className="bg-[#fff] p-3 rounded-lg flex gap-2 justify-center w-fit  text-black font-semibold font-lora"
          >
            <img src={file_gif} alt="format" className="lg:w-[30px] w-[20px]" />
            <button type="button">Paper Format</button>
          </a>
        </ul>
      </div>

      {/* Image Section */}
      <div className={`w-[40%] lg:flex hidden justify-center ${currentContent.imgContainerCSS}`}>
        <img
          src={currentContent.image}
          className={`max-h-[400px] animate-fadeIn ${currentContent.imgCSS}`}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default ContentChanger;
