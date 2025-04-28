import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import line from '../assets/line.png';
import NagaRamesh from '../assets/NagaRamesh.png';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function Fellowship() {
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

      <div className=" p-5">
        <h1 className="lg:text-[34px] text-[20px] text-center py-5  font-semibold font-Inter ">
          IJMRSET FELLOWSHIP
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          Fellowship members of the International Journal of Multidisciplinary Research in Science,
          Engineering, and Technology (IJMRSET) typically enjoy several privileges and
          responsibilities that reflect their distinguished roles within the academic and research
          communities. Here are some key aspects of being a fellowship member of such a journal:
        </p>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          Academicians, scientists, management professionals, and research scholars have the
          opportunity to become IJMRSET® Fellow Members.
        </p>
        <h1 className="lg:text-[24px] text-[20px] text-left py-2 font-semibold font-Inter ">
          OBJECTIVE:
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          To create a practical environment where physicians in training can acquire knowledge,
          develop skills in manuscript peer-review, write and publish scientific articles, and
          understand journal management strategies and processes.
        </p>
        <h1 className="lg:text-[24px] text-[20px] text-left py-2  font-semibold font-Inter ">
          ELIGIBILITY CRITERIA:
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          Candidates must be Postgraduate Scholars, Research Scholars, PhD holders, or active
          researchers with at least 10 years of experience.
        </p>
        <h1 className="lg:text-[24px] text-[20px] text-left py-5  font-semibold font-Inter ">
          REQUIREMENTS:
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          Candidates must be able to dedicate a minimum of 5 hours per week to Editorial Fellowship
          activities with the International Journal of Innovative Research in Science, Engineering,
          and Technology for one year and be available for periodic teleconferences or virtual
          meetings with mentors.
        </p>
        <h1 className="lg:text-[24px] text-[20px] text-left py-2  font-semibold font-Inter ">
          ROLES AND RESPONSIBILITIES:
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          The responsibilities of Fellowship members of an International Journal, such as the
          International Journal of Multidisciplinary Research in Science, Engineering, and
          Technology, may include the following:
        </p>
        <ul className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          <li className="  font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">
                Peer Review and Editorial Contributions
              </p>
            </div>

            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Reviewing and providing constructive feedback on submitted manuscripts to ensure
                quality, accuracy, and relevance.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Participating in editorial discussions and decision-making processes related to
                the acceptance or rejection of submissions.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">Providing Expertise in Specific Areas</p>
            </div>
            <div className="lg:pl-20 ">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Offering specialized knowledge and insights to guide the journal’s direction,
                focusing on emerging trends and research topics within multidisciplinary fields.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Contributing to the development of special issues or thematic sections on current
                or innovative research areas.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">Mentorship and Guidance</p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Mentoring junior researchers, authors, and graduate students in their academic
                writing, research methodology, and publication processes.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Providing guidance to authors on how to improve their manuscripts for better
                quality and alignment with academic standards.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">Journal Promotion and Outreach</p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Promoting the journal within their professional network and at academic
                conferences or workshops.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Assisting in the expansion of the journal’s readership and impact in the global
                academic community.
              </p>
            </div>
          </li>

          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">Contributing to Journal Development</p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Actively participating in the development of the journal’s editorial policies,
                scope, and strategic objectives
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Collaborating with other fellowship members to improve the journal’s overall
                impact, visibility, and academic reputation.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">
                Attending and Participating in Meetings and Events
              </p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Attending regular editorial meetings, teleconferences, or virtual chats with the
                editorial board and mentors.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Participating in webinars, conferences, and events organized by the journal,
                sharing knowledge and expertise on relevant topics.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">Ensuring Ethical Standards</p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Upholding the highest ethical standards in the review, publication, and
                dissemination of research.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Ensuring that published work meets academic integrity, originality, and proper
                citation standards.
              </p>
            </div>
          </li>
          <li className=" font-lora  lg:pl-[5%]   font-semibold">
            <div className="lg:text-[18px] text-[15px] flex  gap-2">
              <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow " />
              <p className="underline underline-offset-2">
                Contributing to Capacity Building Initiatives
              </p>
            </div>
            <div className="lg:pl-20">
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Supporting the journal in training activities or workshops aimed at developing the
                skills of new researchers, authors, or reviewers.
              </p>
              <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora">
                - Encouraging interdisciplinary collaboration and fostering a culture of learning
                within the journal’s community.
              </p>
            </div>
          </li>
        </ul>
        <h1 className="lg:text-[24px] text-[20px] text-left py-2  font-semibold font-Inter ">
          BENEFITS FOR FELLOW MEMBERS:
        </h1>
        <p className="lg:text-[18px] text-[15px]  py-2  font-medium font-lora ">
          As a Fellow Member of the International Journal of Innovative Research in Science,
          Engineering and Technology (IJMRSET®), you will enjoy a range of prestigious privileges,
          including:
        </p>
        <ul className="lg:pl-[5%] space-y-3 py-5">
          <li className="font-lora lg:text-xl ">
            <h1>
              <span className="font-bold">Title of FIJMRSET: </span> Fellow Members are entitled to
              use the title &quot;FIJMRSET&quot; (Fellow, International Journal of Innovative
              Research in Science, Engineering, and Technology). For example: Dr. John Paul
              Robinson, Ph.D., FIJMRSET.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Certificate of Membership: </span> Fellow Members will
              receive an esteemed certificate recognizing their Fellow Membership, contributing to
              their academic recognition and professional growth.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Exemption from Conference Registration Fees: </span>Fellow
              Members are granted free registration for all National and International Conferences
              organized by IJMRSET®.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Leadership Opportunities: </span> Fellow Members may be
              appointed as Sectional President, Sectional Secretary, or Sectional Recorder for
              sessions during National/International Conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Judging Roles: </span>Fellow Members may be invited to
              serve as judges for poster presentations at National/International Conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Organizing Committee Involvement: </span>Fellow Members
              may be invited to join the organizing or apex committees of National/International
              Conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Keynote Speaking Opportunities: </span>Fellow Members may
              be invited to deliver keynote speeches at National/International Conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Special Lecture Invitations: </span>Fellow Members have
              the opportunity to present special lectures or talks at sectional programs during
              National/International Conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Conference Hosting Privileges: </span> Fellow Members can
              host National/International Conferences at their own location or country.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">State or Country Representation: </span> Fellow Members
              may be selected to represent their state or country as coordinators for IJMRSET®
              journals and conferences.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Editorial Board Membership: </span> Fellow Members are
              eligible to join the Editorial Board of any IJMRSET® International Peer-Reviewed
              Journal.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Reviewing Opportunities: </span> Fellow Members can be
              appointed as reviewers for any IJMRSET® International Peer-Reviewed Journal.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Discounted Publication Fees: </span> Fellow Members
              benefit from reduced manuscript processing charges when publishing their research
              papers/articles in IJMRSET® Journals.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">International Award Consideration: </span> Fellow Members
              are eligible for consideration for the prestigious IJMRSET® International Award.
            </h1>
          </li>
          <li className="font-lora lg:text-xl">
            <h1>
              <span className="font-bold">Sharing of Academic News: </span> Fellow Members can share
              their academic and research updates with the IJMRSET® Journal free of charge.
            </h1>
          </li>
        </ul>
        <h1 className="lg:text-[20px] text-[15px text-center py-2 font-medium  font-lora ">
          These privileges highlight the distinguished status of Fellow Members and provide them
          with valuable opportunities to contribute to and benefit from the academic and research
          community within IJMRSET®.
        </h1>
        <h1 className="lg:text-[20px] text-[15px] text-center py-2 font-medium  font-lora ">
          Interested candidates can complete the membership form and submit it along with their CV
          to editor@ijmrset.com by 31st May 2025.
        </h1>

        <h1 className="text-2xl pt-10 font-lora underline text-center font-semibold">
          FELLOWSHIP MEMBERS
        </h1>
        <div className="flex pt-10 flex-col w-full justify-center items-center gap-5 flex-wrap">
          <img src={NagaRamesh} alt="Naga Ramesh" className="w-40 h-40 " />
          <p className="text-xl pt-10 font-lora  text-center font-semibold">
            Membership ID:2024/IJMRSET-019 <br />
            Naga Ramesh Palakurti
            <br />
            Solution Architect, TCS-USA
            <br />
            Period: 5th Jan 2024 to 31st Dec 2024
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
