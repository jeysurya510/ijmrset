import React, { useState } from 'react';
import Arrow from '../assets/RightArrow.png';

const FAQs = () => {
  const faqData = [
    {
      id: 1,
      question: 'What is the Impact Factor of IJMRSET?',
      answer: 'Impact Factor is 7.54',
    },
    {
      id: 2,
      question: 'In which country IJMRSET is based?',
      answer: 'India',
    },
    {
      id: 3,
      question: 'Is this journal Peer Reviewed?',
      answer: 'Yes',
    },
    {
      id: 4,
      question: 'Is this journal UGC approved?',
      answer: 'Not Yet',
    },
    {
      id: 5,
      question: 'What is ISSN of IJMRSET?',
      answer: 'ISSN: 2582-7219',
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col justify-center my-5 items-center gap-5 lg:px-[20%] px-[10px]">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="bg-gray-400/15 w-full lg:p-[20px] p-[10px] space-y-6 shadow-xl rounded-md"
        >
          <div className="flex items-center justify-between">
            <h3
              onClick={() => toggleFaq(faq.id)}
              className="text-center font-Libre_Baskerville font-bold lg:text-[18px] text-[14px] cursor-pointer"
            >
              {faq.question}
            </h3>
            <img
              src={Arrow}
              alt="arrow"
              onClick={() => toggleFaq(faq.id)}
              className={`${
                activeId === faq.id ? 'rotate-180' : ''
              } h-5 ml-auto transition-all duration-1000`}
            />
          </div>
          {activeId === faq.id && (
            <p className="text-center text-[18px] font-Inter transition-all duration-500">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
