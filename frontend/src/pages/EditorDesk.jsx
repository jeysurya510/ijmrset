import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function EditorDesk() {
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
        <h1 className="lg:text-[34px] text-[20px] text-center py-5  font-semibold font-Inter ">
          EDITOR DESK
        </h1>

        <div className="w-[90%]  mx-auto min-h-[700px] rounded-lg bg-white/85 shadow-xl font-lora lg:text-[18px] text-[15px] font-medium p-5">
          <h2>Dear Students, Faculty, and Researchers,</h2>
          <p className="pt-5">
            We are pleased to announce the launch of the International Journal of Modern Research in
            Science, Engineering, and Technology (IJMRSET). This journal has been developed with the
            mission to support researchers at all levels, including research scholars, scientists,
            professors, post-doctoral fellows, and students, by providing a platform to publish
            their research work.
          </p>
          <p className="pt-5">
            IJMRSET is committed to publishing a broad spectrum of open-access research. It offers:
          </p>
          <ul className="space-y-2 list-inside list-disc ml-10 pt-5">
            <li>Fast and efficient online submission</li>
            <li>Rapid publication process</li>
            <li>High visibility for published works</li>
            <li>Expert peer-reviewed evaluations</li>
          </ul>
          <p className="pt-5">
            The journal strives to create and disseminate innovative knowledge that addresses
            societal needs while upholding its international reputation. IJMRSET is proud to be
            registered, abstracted, and indexed by esteemed international platforms for online
            journals and publications.
          </p>
          <p className="pt-5">
            IJMRSET is particularly focused on multidisciplinary research in Science, Engineering,
            and Technology, as well as industrial perspectives. Special emphasis is placed on
            interdisciplinary and collaborative fields to foster innovation.
          </p>
          <p className="pt-5">
            Our editors have long-standing, distinguished careers in their respective fields. The
            editorial board members and external reviewers are dedicated to providing unbiased,
            thorough, and rapid evaluations of submitted manuscripts, ensuring a smooth and
            efficient publishing experience. Authors can expect a professional, intellectual
            collaboration throughout the process.
          </p>
          <p className="pt-5">
            In conclusion, we believe there is a strong need for open-access platforms worldwide to
            facilitate the sharing of global ideas. We encourage you to take this opportunity to
            engage with IJMRSET and contribute to the dissemination of innovative research.
          </p>
          <p className="pt-5 pl-5 text-base">Editor In Chief</p>
          <p className="pt-2 pl-5 text-base">Dr.P.Suresh</p>
          <p className="pt-2 pl-5 text-base">
            International Journal of Multidisciplinary Research in Science, Engineering and
            Technology.
          </p>
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
