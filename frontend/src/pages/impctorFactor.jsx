import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import PDF from '../assets/SJIF_IJMRSET.pdf';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function ImpactFactor() {
  return (
    <div className="bg-color3 min-h-screen">
      <NavBar SubNavColor="bg-slate-200" NavColor="bg-slate-200" Scroll="contact-section-1" />

      <section id="contact-section-1" className="pt-10 text-black overflow-hidden">
        <p className="lg:text-[34px] text-[14px] text-center font-Libre_Baskerville leading-relaxed font-medium">
          International Journal of Multidisciplinary Research in <br />
          <span className="font-Libre_Baskerville italic">
            <AnimatedText text="Science, Engineering, and Technology" />
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

        <EmailImpactCheck theme="dark" />
      </section>

      <Footer />

      <div className="bg-color3 py-4 flex w-full px-5">
        <p className="text-md text-black mx-auto font-Inter">
          Copyright © 2024 IJMRSET All Rights Reserved
        </p>
      </div>
    </div>
  );
}
