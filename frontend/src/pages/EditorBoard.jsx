import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import AnimatedText from '../utils/Animationtext';
import individuals from './Data';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function EditorBoard() {
  return (
    <div className="bg-color3 min-h-screen">
      <NavBar
        SubNavColor={'bg-slate-200'}
        NavColor={'bg-slate-200'}
        Scroll={'editorboard-section-1'}
      />

      <section id="editorboard-section-1" className="pt-10 text-black overflow-hidden">
        <p className="lg:text-[34px] text-[14px] text-center font-Libre_Baskerville leading-relaxed font-medium ">
          International Journal of Multidisciplinary Research in <br />
          <span className=" font-Libre_Baskerville italic ">
            <AnimatedText text={'Science, Engineering, and Technology'} />
          </span>
        </p>
        <div className="font-semibold hidden lg:flex items-center justify-center text-center font-lora">
          <img src={Email} className="w-7 h-7 mr-2" alt="Email" />
          <p className="mr-4">ijmrset@gmail.com</p>

          <img src={Impactfactor} className="w-7 h-7 mr-2" alt="Impact Factor" />
          <p className="mr-4">Impact Factor: 7.521</p>

          <img src={Check} className="w-7 h-7 mr-2" alt="Check" />
          <p>Compliant with UGC CARE Journal Norms and Guidelines</p>
        </div>
        <EmailImpactCheck theme={'dark'} />
      </section>

      <div className="py-5">
        <h1 className="lg:text-[34px] text-[20px] text-center py-5  font-semibold font-Inter ">
          EDITOR BOARD
        </h1>
        <div>
          <p className="text-center text-[18px] font-lora font-medium">Dr. Suresh Kumar</p>
          <p className="text-center text-base font-lora font-medium">India</p>

          <div>
            <h1 className="text-left lg:text-[18px] text-[15px] font-lora mx-5 pb-5 font-semibold">
              Editorial Board Members:
            </h1>
            <ul className="mx-10 text-[18px]  font-lora  flex justify-between flex-wrap gap-2 font-medium">
              {individuals.map((each) => (
                <li
                  key={each.id}
                  className={`lg:w-[47%] w-full min-h-[250px] flex flex-col justify-center  rounded-lg p-5   space-y-1 ${each.color === 'purple' ? 'bg-color text-white' : ' md:bg-slate-300 bg-purple-950  lg:text-black text-white'}`}
                >
                  <h1 className="text-[18px] text-center">{each.name.toUpperCase()}</h1>
                  {each.degree !== '' && (
                    <p className="lg:text-[18px] text-[16px] text-center">{each.degree}</p>
                  )}
                  {each.position !== '' && (
                    <p className="lg:text-[18px] text-[16px] text-center pt-1 ">{each.position}</p>
                  )}
                  {each.institution !== '' && (
                    <p className="lg:text-[18px] text-[16px] text-center pt-1 ">
                      {each.institution}
                    </p>
                  )}
                  {each.country !== '' && (
                    <p className="lg:text-[18px] text-[16px] text-center pt-1 ">{each.country}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <div className="bg-color3 py-4 flex w-full px-5">
        <p className="text-md text-black mx-auto font-Inter">
          Copyright © 2024 IJMRSET All Rights Reserved
        </p>
      </div>
    </div>
  );
}
