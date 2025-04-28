import { useState } from 'react';
import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';
import Arrow from '../assets/RightArrow.png';

const FAQs = () => {
  const faqData = [
    {
      id: 1,
      question: 'How can we publish our conference special issue with IJMRSET?',
      answer:
        'The conference organizers should email a request to editor@ijmrset.com The conference shall be evaluated by IJMRSET authority. Once approval is granted by the authority, the conference organizers shall be asked to submit the conference papers to IJMRSET . The special issue shall be published online either on the day of conference or after 10 days from the day of conference.',
    },
    {
      id: 2,
      question: 'Are you providing only online publication of the Special Issue?',
      answer:
        'Along with the online publication, we can provide well packaged CD / Hard Copy of special issue / hard copy of certificates to distribute delegates in your conference.',
    },
    {
      id: 3,
      question: 'How much time needed for approval?',
      answer:
        'If all the information is furnished duly, the notifications shall be informed within 3-4 working days.',
    },
    {
      id: 4,
      question: 'How much time is needed to publish the special issue?',
      answer:
        'IJMRSET typesetting teams shall require a minimum of 20 days (from the date of submission of the papers) to complete the publication process in both print and online formats.',
    },
    {
      id: 5,
      question: 'Is there any particular paper format?',
      answer:
        'IJMRSET recommends the conference organizers to accept the final papers according to the IJMRSET guideline. The set of papers should be submitted to IJMRSET Single column MS word format only.',
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col justify-center my-5 items-center gap-5  px-[10px]">
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
            <p className=" text-[18px] font-Inter transition-all duration-500">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default function ConferenceIssue() {
  return (
    <div className="bg-color3 min-h-screen ">
      <NavBar SubNavColor={'bg-slate-200'} NavColor={'bg-slate-200'} Scroll={'contact-section-1'} />
      <section id="contact-section-1" className="pt-10 text-black overflow-hidden">
        <p className="lg:text-[34px] text-[14px]  text-center font-Libre_Baskerville leading-relaxed font-medium ">
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

      <div className="lg:p-10 p-3">
        <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-center py-3 pl-5">
          Conference Issue
        </h1>
        <p className="lg:text-xl text-lg font-lora text-left py-3 lg:px-5 ">
          As a multi-disciplinary journal, IJMRSET heartily welcomes conference organizers of
          diverse academic interests to publish their proceedings as a special issue. We provide a
          low-cost quality service to promote research, awareness and compatibility. We aspire to
          take the somber charge of publishing all the papers, presented or discussed in your
          conference. It will be a mutually beneficial approach to magnetize more contributors to
          your conference, sharing and utilizing the worldwide reputation of our esteemed journal.
          For further query, please mail us at
          <span>
            <a href="mailto:editor@ijmrset.com" className="text-blue-800">
              editor@ijmrset.com.
            </a>
          </span>
        </p>
      </div>

      <div className="py-5">
        <FAQs />
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
