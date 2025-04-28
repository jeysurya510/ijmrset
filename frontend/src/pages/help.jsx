import React, { useState } from 'react';
import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import Arrow from '../assets/RightArrow.png';
import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';



const FAQs = () => {
  const faqData = [
    {
      "id": 1,
      "question": "What is the Impact Factor of IJMRSET?",
      "answer": "Impact Factor is 7.54"
    },
    {
      "id": 2,
      "question": "In which country is IJMRSET based?",
      "answer": "India"
    },
    {
      "id": 3,
      "question": "Is this journal Peer Reviewed?",
      "answer": "Yes"
    },
    {
      "id": 4,
      "question": "Is this journal UGC approved?",
      "answer": "Not Yet"
    },
    {
      "id": 5,
      "question": "What is the ISSN of IJMRSET?",
      "answer": "ISSN: 2582-7219"
    },
    {
      "id": 6,
      "question": "What kind of papers does IJMRSET publish?",
      "answer": "IJMRSET aims to publish research papers in all the areas of Science, Engineering, Technology & Management. The research paper publication process starts with the submission of your research paper via email. And the peer review process usually completes within 2 days, depending upon the number of research papers in the pipeline."
    },
    {
      "id": 7,
      "question": "How do I submit an article for publication?",
      "answer": "Authors can submit the manuscripts to the email id ijmrset@gmail.com. Your paper must be in IJMRSET MS Word Single Column Format. The paper acceptance/rejection notification will be sent within 2 days from the date of paper submission."
    },
    {
      "id": 8,
      "question": "How does the review process work?",
      "answer": "The review of articles is done through a blind peer review. All the articles received by IJMRSET are sent to the Review Committee after removing the author's name to have an unbiased opinion about the research."
    },
    {
      "id": 9,
      "question": "How many authors are permitted per article?",
      "answer": "IJMRSET permits up to 6 authors per article."
    },
    {
      "id": 10,
      "question": "Does each author receive a soft copy of the certificate?",
      "answer": "Yes. Each author of the paper shall receive a Digitally Signed E-Certificate of publication free of cost immediately after publication."
    },
    {
      "id": 11,
      "question": "How long does it take for an accepted paper to be published?",
      "answer": "All the accepted articles will be published in 4 to 5 hours after the completion of registration."
    },
    {
      "id": 12,
      "question": "Do you have a hard copy journal publication?",
      "answer": "No. IJMRSET publishes an online version only."
    },
    {
      "id": 13,
      "question": "Is the Journal published at regular intervals?",
      "answer": "The journal is published every month, i.e., twelve issues per year."
    },
    {
      "id": 14,
      "question": "Is it possible to publish either National or International conference papers as a SPECIAL ISSUE?",
      "answer": "The conference papers will be published as a SPECIAL ISSUE within 15 days from the day of the conference."
    },
    {
      "id": 15,
      "question": "Is there any restriction on the number of pages and a fee for extra pages?",
      "answer": "Yes. We accept articles with any number of pages, and extra charges will be collected if it exceeds 8 pages. (Rs.100 / 5 USD for each additional page)"
    },
    {
      "id": 16,
      "question": "What is the Processing Charge for an accepted article?",
      "answer": "Indian Authors: INR 800 per paper. Foreign Authors: 50 USD only."
    },
    {
      "id": 17,
      "question": "Do you provide DOI for each article?",
      "answer": "Yes, IJMRSET provides DOI allocation for each article. However, the author shall pay Rs.250 as extra charges to activate the DOI."
    },
    {
      "id": 18,
      "question": "How do I pay the publication fee?",
      "answer": "Indian authors can pay the fees through Google Pay / Phone Pe / Paytm / Net Banking. Foreign authors can pay the fees through PAYPAL, Western Union Money Transfer, or Wired Banking Transfer."
    },
    {
      "id": 19,
      "question": "Is it possible for Indian Authors to pay the fees through the IJMRSET website?",
      "answer": "No. It is not possible to pay the fees through our website using either a credit card or a debit card."
    }
  ]
  
  

 

 

  return (
    <div className="flex flex-col  justify-center my-5 items-center gap-5  px-[10px]">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="bg-gray-400/15 w-full lg:p-[50px] p-[10px] space-y-6 shadow-xl rounded-md"
        >
          <div className="flex items-center justify-between">
            <h3
              onClick={() => toggleFaq(faq.id)}
              className=" font-Libre_Baskerville font-bold lg:text-[18px] text-[14px] cursor-pointer"
            >
              {faq.question}
            </h3>
            
          </div>
          
            <p className=" text-[18px] font-Inter transition-all duration-500">
              {faq.answer}
            </p>
          
        </div>
      ))}
    </div>
  );
};




export default function Help() {
  return (
    <div className="bg-color3 min-h-screen">
      <NavBar
        SubNavColor={'bg-slate-200'}
        NavColor={'bg-slate-200'}
        Scroll={'editordesk-section-1'}
      />

      <section id="editordesk-section-1" className="pt-10 text-black overflow-hidden ">
        <p className=" lg:text-[34px] text-[14px]  text-center font-Libre_Baskerville leading-relaxed font-medium ">
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
        <h1 className="lg:text-[34px] text-[20px] text-center py-5  font-semibold font-lora ">
          FAQ
        </h1>
        <div>
          <FAQs/>
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
