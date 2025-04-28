import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import VM from '../assets/VM.jpeg';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function VisionMission() {
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

      <div className="py-5">
        <div className="bg-[#080808] h-[300px] w-full flex justify-center items-center">
          <img src={VM} alt="vision mission" className=" lg:h-[300px] h-[200px] w-fit" />
        </div>
        <div className="lg:p-10 p-3">
          <h1 className="lg:text-2xl text-xl font-lora font-semibold text-center">
            Vision & Mission
          </h1>
          <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-left py-3 pl-5">
            VISION
          </h1>
          <p className="lg:text-xl text-lg font-lora lg:font-semibold text-left py-3 lg:px-5 ">
            The vision of IJMRSET is to serve as an academic platform and a key reference for
            advancing and disseminating research findings that support high-level learning,
            teaching, and research in the fields of Science, Engineering, and Technology. It
            encourages original research, theoretical studies, and application-based investigations
            that contribute to a deeper understanding of these disciplines.
          </p>
          <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-left py-3 pl-5">
            MISSION
          </h1>
          <p className="lg:text-xl text-lg font-lora lg:font-semibold text-left py-3 lg:px-5 ">
            The mission of IJMRSET is to provide the worldwide community with a platform for the
            latest research and advancements in different disciplines of Science, Engineering and
            Technology. IJMRSET focuses on interdisciplinary techniques and state-of-the- art
            research among various disciplines and to serve diverse global communities by advancing,
            disseminating and applying engineering knowledge for improving the quality of life and
            communicating the excitement of engineering.
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
