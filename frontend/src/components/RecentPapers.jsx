import React from 'react';

import Author from '../assets/author.png';

export default function RecentPapers({ SlideData }) {
  return (
    <div
      className="slider py-10 "
      style={{
        '--width': '300px',
        '--height': '350px',
        '--minheight': '400px',
        '--quantity': SlideData.length,
      }}
    >
      <div className="list">
        {SlideData.map((eachList, index) => (
          <div
            className="item bg-color py-10 px-2 flex flex-col justify-center items-center gap-5"
            key={eachList.id}
            style={{ '--position': index + 1 }}
          >
            <div className=" bg-white h-[100px] w-[100px] rounded-full mx-auto flex justify-center items-center">
              <img src={Author} alt="Avatar" className="mx-auto" />
            </div>
            <h1 className="text-md font-lora text-white text-center">{eachList.title}</h1>
            <div className="flex gap-2 mt-auto mb-0">
              <a
                href={`/upload/${eachList.pdf}`}
                className="bg-white shadow-lg text-black p-3 rounded-md space-y-2 font-semibold font-lora"
              >
                View Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
