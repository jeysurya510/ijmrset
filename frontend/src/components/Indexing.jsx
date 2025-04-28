import React from 'react';
import L1 from '../assets/indexlogo/L1.png';
import L2 from '../assets/indexlogo/L2.png';
import L3 from '../assets/indexlogo/L3.png';
import L4 from '../assets/indexlogo/L5.png';
import L5 from '../assets/indexlogo/L6.png';
import L6 from '../assets/indexlogo/L7.png';
import L7 from '../assets/indexlogo/L8.png';
import L8 from '../assets/indexlogo/L9.svg';
import L9 from '../assets/indexlogo/L10.svg';
import L10 from '../assets/indexlogo/L11.svg';
import L11 from '../assets/indexlogo/L12.svg';

export default function IndexingLogos() {
  const list = [
    { id: 1, img: L1 },
    { id: 2, img: L2 },
    { id: 3, img: L3 },
    { id: 4, img: L4 },
    { id: 5, img: L5 },
    { id: 6, img: L6 },
    { id: 7, img: L7 },
    { id: 8, img: L8 },
    { id: 9, img: L9 },
    { id: 10, img: L10 },
    { id: 11, img: L11 },
  ];

  return (
    <div
      className="slider py-10 flex justify-center items-center bg-color3"
      style={{
        '--width': '200px',
        '--height': '100px',
        minHeight: '120px',
        '--quantity': list.length,
      }}
    >
      <div className="list flex justify-center  items-center gap-x-96 ">
        {list.map((eachList) => (
          <div
            id="index"
            className="item flex justify-center  items-center  w-full h-full"
            key={eachList.id}
            style={{ '--position': eachList.id }}
          >
            <img
              src={eachList.img}
              alt=""
              className="object-contain   h-[100px] max-w-[200px]"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
