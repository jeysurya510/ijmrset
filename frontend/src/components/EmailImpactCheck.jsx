import React from 'react';

import ImpactfactorDark from '../assets/impactFactor-black.gif';
import CheckDark from '../assets/check-black.gif';
import EmailDark from '../assets/email_black.gif';

import ImpactfactorLight from '../assets/Impactfactor.gif';
import CheckLight from '../assets/Check.gif';
import EmailLight from '../assets/Email.gif';

export default function EmailImpactCheck({ theme = 'dark' }) {
  const isDarkMode = theme === 'dark';

  const EmailImpactCheckList = [
    { id: 1, img: isDarkMode ? EmailDark : EmailLight, text: 'ijmrset@gmail.com' },
    { id: 2, img: isDarkMode ? ImpactfactorDark : ImpactfactorLight, text: 'Impact Factor: 7.521' },
    {
      id: 3,
      img: isDarkMode ? CheckDark : CheckLight,
      text: 'Compliant with UGC CARE Journal Norms and Guidelines',
    },
  ];

  return (
    <div
      className="slider  flex lg:hidden pb-5 justify-center items-center"
      style={{
        '--width': '400px',
        '--height': '150px',
        minHeight: '40px',
        '--quantity': EmailImpactCheckList.length,
      }}
    >
      <div className="list flex gap-3">
        {EmailImpactCheckList.map((each) => (
          <div
            key={each.id}
            className={`item text-[14px] ${isDarkMode ? 'text-black' : 'text-white'}`}
            style={{ '--position': each.id }}
          >
            <div className="flex justify-start items-center gap-2">
              <img src={each.img} className="!h-4 !w-4  " alt={`Icon ${each.id}`} />
              <p className="w-fit">{each.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
