import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import AS from '../assets/AS.jpeg';
const disciplines = [
  {
    science: 'Animal Science',
    engineering: 'Aeronautical Engineering',
    technology: 'Biotechnology',
  },
  {
    science: 'Applied Sciences',
    engineering: 'Aerospace Engineering',
    technology: 'Ceramic Technology',
  },
  {
    science: 'Astronomy',
    engineering: 'Agricultural Engineering',
    technology: 'Embedded System and Technology',
  },
  { science: 'Atmosphere', engineering: 'Applied Electronics', technology: 'Fashion Technology' },
  {
    science: 'Biochemistry',
    engineering: 'Aquaculture Engineering',
    technology: 'Food and Nutrition',
  },
  {
    science: 'Biological Sciences',
    engineering: 'Architecture & Planning',
    technology: 'Information Technology',
  },
  { science: 'Botany', engineering: 'Art and Architecture', technology: 'Multimedia Technology' },
  { science: 'Chemistry', engineering: 'Automotive Engineering', technology: 'Nanotechnology' },
  {
    science: 'Computer Applications',
    engineering: 'Biogenetics Engineering',
    technology: 'Pharmaceutical Technology',
  },
  {
    science: 'Computer Science',
    engineering: 'Bioinformatics Engineering',
    technology: 'Plastic Technology',
  },
  {
    science: 'Dental Science',
    engineering: 'Biological & Bio System Engineering',
    technology: 'Printing Technology',
  },
  { science: 'Ecology', engineering: 'Biomedical Engineering', technology: 'Polymer Technology' },
  { science: 'Economics', engineering: 'Chemical Engineering', technology: 'Rubber Technology' },
  { science: 'Entomology', engineering: 'Civil Engineering', technology: '' },
  { science: 'Environmental Science', engineering: 'Computer Engineering', technology: '' },
  { science: 'Forensic Science', engineering: 'Electrical Engineering', technology: '' },
  {
    science: 'Forestry',
    engineering: 'Electronics and Instrumentation Engineering',
    technology: '',
  },
  { science: 'Geography', engineering: 'Electromechanical System Engineering', technology: '' },
  { science: 'Geology', engineering: 'Engineering Management', technology: '' },
  {
    science: 'Health Sciences and Management',
    engineering: 'Engineering Mathematics',
    technology: '',
  },
  { science: 'Hospital Administration', engineering: 'Engineering Physics', technology: '' },
  { science: 'Human Biology', engineering: 'Engineering Sciences', technology: '' },
  { science: 'Information Science', engineering: 'Environmental Engineering', technology: '' },
  { science: 'Life Science', engineering: 'Food Safety and Quality Management', technology: '' },
  { science: 'Management Science', engineering: 'Geo Informatics Engineering', technology: '' },

  { science: 'Marine Science', engineering: 'Geo Technical Engineering', technology: '' },
  { science: 'Materials Sciences', engineering: 'Industrial Engineering ', technology: '' },
  {
    science: 'Media Sciences',
    engineering: 'Information Security and Cyber Forensics',
    technology: '',
  },
  { science: 'Medical Sciences', engineering: 'Integrated Engineering', technology: '' },
  {
    science: 'Mathematics',
    engineering: 'Instrumentation and Control Engineering',
    technology: '',
  },
  { science: 'Meteorology', engineering: 'Manufacturing Engineering', technology: '' },
  { science: 'Microbiology', engineering: 'Materials Engineering', technology: '' },
  { science: 'Oceanography', engineering: 'Marine and Ocean Engineering', technology: '' },
  { science: 'Pharmaceutical Science', engineering: 'Mechanical Engineering', technology: '' },
  { science: 'Physics', engineering: 'Mining Engineering', technology: '' },
  { science: 'Plant Biology & Biotechnology', engineering: 'Nuclear Engineering', technology: '' },
  { science: 'Political Science', engineering: 'Petro-Chemical Engineering', technology: '' },
  { science: 'Social sciences', engineering: '	Petroleum Engineering', technology: '' },
  { science: 'Sociology', engineering: 'Production Engineering', technology: '' },
  { science: 'Solar Physics', engineering: 'Remote Sensing and GIS', technology: '' },
  { science: 'Space Science', engineering: 'Robotics', technology: '' },
  { science: 'Statistics', engineering: 'Software Engineering', technology: '' },
  { science: 'Systems science', engineering: 'Structural Engineering', technology: '' },
  { science: 'Terrestrial Physics', engineering: 'System Engineering', technology: '' },
  { science: 'Veterinary science', engineering: 'Telecommunication Engineering', technology: '' },
  { science: 'Veterinary Medicine', engineering: 'Metallurgical Engineering', technology: '' },

  { science: 'Visual Communication', engineering: 'VLSI Design', technology: '' },
  { science: 'Zoology', engineering: '', technology: '' },
];
import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function AimScope() {
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
        <div className="bg-[#fff]  lg:h-[300px] h-[200px] w-full flex justify-center items-center">
          <img src={AS} alt="vision mission" className=" lg:h-[300px] h-[200px] w-fit" />
        </div>
        <div className="lg:p-10 p-3">
          <h1 className="lg:text-2xl text-xl font-lora font-semibold text-center">Aim & Scope </h1>
          <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-left py-3 pl-5">AIM </h1>
          <p className="lg:text-xl text-lg font-lora lg:font-semibold text-left py-3 lg:px-5 ">
            The primary aim of IJMRSET is to provide a platform for researchers, innovators,
            scholars, and students to share their research globally. We promote research across all
            disciplines and support the advancement of knowledge and understanding. This journal
            aims to be a high-quality, readable, and valuable resource for researchers while also
            supporting scholars in conducting and disseminating their research. Additionally, it
            seeks to aid in developing their reasoning and analytical skills.
          </p>
          <p className="lg:text-xl text-lg font-lora lg:font-semibold text-left py-3 lg:px-5 ">
            IJMRSET is a peer-reviewed journal dedicated to publishing high-quality original
            research articles, review articles, survey articles, case studies, technical notes, and
            short communications. Preference will be given to research articles that present
            advanced research concepts with significant societal impact.
          </p>

          <h1 className="lg:text-4xl text-2xl font-lora font-semibold text-left py-3 pl-5">
            SCOPE
          </h1>
          <p className="lg:text-xl text-lg font-lora lg:font-semibold text-left py-3 lg:px-5 ">
            The scope of the journal is to provide an academic medium and an important reference for
            the advancement and dissemination of research results that support high-level learning,
            teaching and research in the fields of Multidisciplinary Research in Science,
            Engineering & Technology. We bring together Scientists, Academician, Engineers, Scholars
            and Students of relevant fields within the following scope: (But are not limited to the
            following)
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:px-10 overflow-x-auto">
        <table className="table-auto w-full border-collapse border font-lora border-gray-300 text-sm text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-xs md:text-sm">Science</th>
              <th className="border border-gray-300 px-4 py-2 text-xs md:text-sm">Engineering</th>
              <th className="border border-gray-300 px-4 py-2 text-xs md:text-sm">Technology</th>
            </tr>
          </thead>
          <tbody>
            {disciplines.map((row, index) => (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                <td className="border border-gray-300 px-4 py-2 text-xs md:text-sm">
                  {row.science}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs md:text-sm">
                  {row.engineering}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-xs md:text-sm">
                  {row.technology}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
