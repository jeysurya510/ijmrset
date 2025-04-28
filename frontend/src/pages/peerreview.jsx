import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';
import line from '../assets/line.png';

export default function PeerReview() {
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
        <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-left py-3 pl-5">
          Peer Review Process
        </h1>
        <p className="lg:text-xl text-lg font-lora text-left py-3 lg:px-5 ">
          IJMRSET follows a quick evaluation method in order to substantially reduce the time to
          publication. Submit the original article without any plagiarism with copyright material.
        </p>
        <p className="lg:text-xl text-lg font-lora text-left py-3 lg:px-5 ">
          After initial evaluation, the manuscripts are sent to two reviewers which are determined
          by editor and / or editorial board. If necessary the number of reviewers can be increased
          by editor or editorial board. The reviewers are chosen from referee board according to
          their expertise. The submitted papers will be blind reviewed by two experts out of whom
          one expert will be an international expert. One positive report from the reviewers is
          necessary.
        </p>

        <p className="lg:text-xl text-lg font-lora  text-left py-3 lg:px-5 ">
          Reviewers are asked to evaluate the manuscript originality, methodology, and contribution
          to the literature, presentation of results and support for the conclusions and future work
          as well as appropriate referencing of previous relevant studies. Reviewers might accept
          the manuscript, reject the manuscript or might require a revision for style and/or
          content. Reviewers will return the review comments within 7 days after receiving the
          paper. The final decision for each submission will be made once the review report is
          received by Editor-in-Chief.
        </p>

        <p className="lg:text-xl text-lg font-lora  text-left py-3 lg:px-5 ">
          When a revision is required by the reviewer, the author(s) are to consider the criticism
          and suggestions offered by the reviewer and they should be sent back the revised version
          of manuscript within 7 days or requested time by the Editor. Revised manuscripts returned
          after one month will be considered as a new submissions and peer review process is started
          from the beginning. Reviewer may request more than one revision of a manuscript.
        </p>
      </div>

      <div className="m-10 bg-white shadow-2xl rounded-2xl p-10 ">
        <h1 className="lg:text-xl text-lg font-lora text-center py-3 lg:px-5">Join As Reviewer</h1>
        <div className="pt-5  lg:text-[18px] text-[15px] font-medium font-lora space-y-3">
          <p>Dear Professors/Research Associates,</p>
          <p>You can join with us as a Reviewer.,</p>
          <p>
            IJMRSET welcomes proficient academicians to join us as Reviewers. Being a reviewer is a
            matter of prestige and personnel achievement. IJMRSET follows a strict set of guidelines
            while accepting the applicant as a reviewer. The minimum sets of qualifications for
            being a reviewer of IJMRSET are listed below:
          </p>
          <ul className="flex flex-col justify-start gap-4 w-full">
            <li className="flex gap-2 justify-start font-lora items-center ] pl-5 lg:text-[18px] text-[15px] font-medium">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow" />
              <p>Should be a PhD degree holder from a recognized university.</p>
            </li>
            <li className="flex gap-2 justify-start font-lora items-center ] pl-5 lg:text-[18px] text-[15px] font-medium">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow" />
              <p>Should have a minimum of 10 years of experience who doesn’t have a PhD degree.</p>
            </li>
            <li className="flex gap-2 justify-start font-lora items-center ] pl-5 lg:text-[18px] text-[15px] font-medium">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow" />
              <p>Should be an author with a minimum of 8 publications in reputed journals.</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="lg:text-[18px] pb-10 text-[15px] font-medium font-lora space-y-3 text-center">
        Applications for Reviewer ship can be sent to
        <span>
          <a href="mailto:ijmrset@gmail.com" className="text-blue-800 underline-offset-2 underline">
            ijmrset@gmail.com.
          </a>
        </span>
      </p>

      <Footer />
      <div className="bg-color3 py-4 flex w-full px-5">
        <p className="text-md text-black mx-auto font-Inter">
          Copyright © 2024 IJMRSET All Rights Reserved
        </p>
      </div>
    </div>
  );
}
