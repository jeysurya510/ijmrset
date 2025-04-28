import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import IssuesSection from '../components/Issues.jsx';
import RecentPapers from '../components/RecentPapers.jsx';
import IndexingLogos from '../components/Indexing.jsx';
import Benfits from '../components/Benifits.jsx';
import Author from '../assets/Author.png';
import line from '../assets/line.png';
import FAQs from '../components/faq.jsx';
import Footer from '../components/Footer.jsx';
import EmailImpactCheck from '../components/EmailImpactCheck.jsx';

import NavBar from '../components/NavBar_1.jsx';
import CircularItems from '../utils/CircularItems.jsx';
import Impactfactor from '../assets/Impactfactor.gif';
import Check from '../assets/Check.gif';
import Email from '../assets/Email.gif';
import Arrow from '../assets/Arrow.gif';
import clock from '../assets/clock.gif';
import upload from '../assets/upload.gif';
import file from '../assets/file_white.gif';
import ArrowAnimation from '../assets/ArrowAnimation.gif';
import GoogleAnimation from '../assets/GoogleAnimation.gif';
import FileAnimation from '../assets/FileAnimation.gif';
import MoneyAnimation from '../assets/MoneyAnimation.gif';
import ArrowAnimation_2 from '../assets/Animation-7.gif';
import Animation1 from '../assets/Animation-1.gif';
import Animation2 from '../assets/Animation-6.gif';
import Animation3 from '../assets/Animation-3.gif';
import Animation4 from '../assets/Animation-8.gif';

import CertificateAnimation from '../assets/CertificateAnimation.gif';
import ImpactFactorAnimation from '../assets/ImpactFactorAnimation.gif';

import Albert_Einstein from '../assets/Albert_Einstein.jpg';
import ISO from '../assets/ISO.png';
import DOI from '../assets/DOI.png';
import Exp from '../assets/Experience.png';

import NewOne from '../assets/Man.png';

import ContentChanger from '../utils/useRotatingContent.jsx';
import AnimatedText from '../utils/Animationtext.jsx';

export default function Home() {
  const fields = [
    'Arts',
    'Humanities',
    'Science',
    'Engineering',
    'Technology',
    'Management',
    'Pharmacy',
    'Ayurveda',
    'Siddha',
    'Dental',
  ];

  const [lastDate, setLastDate] = useState('');
  const [SlideData, setSlideData] = useState([]);

  const getFormattedLastDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const lastDay = new Date(year, month + 1, 0).getDate(); // Get last day of the current month
    const formattedDate = `${lastDay} ${today.toLocaleString('en-US', { month: 'long' }).toUpperCase()} @${year}`;

    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log(data);

        // Sort by ID in descending order (highest to lowest)
        const sortedData = data.sort((a, b) => b.id - a.id);

        // Take only the first 10 items
        const limitedData = sortedData.slice(0, 10);

        setSlideData(limitedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log(SlideData);
    fetchData();

    setLastDate(getFormattedLastDate());
  }, []);

  return (
    <div className="bg-color min-h-screen ">
      <NavBar SubNavColor={'bg-white'} NavColor={'bg-white'} Scroll={'home-section'} />
      <section id="home-section" className="overflow-hidden">
        <section id="section1" className="">
          <p className="text-white pt-5 lg:text-[34px] text-[14px] text-center font-Libre_Baskerville leading-relaxed font-medium ">
            International Journal of Multidisciplinary Research in <br />
            <span className=" font-Libre_Baskerville italic ">
              <AnimatedText text={'Science, Engineering, and Technology'} />
            </span>
          </p>
          <div className="text-white px-5  lg:flex  hidden lg:gap-3 gap-1 lg:text-[16px] text-[14px] items-center justify-center text-center font-lora">
            <div className="flex items-center justify-center gap-1">
              <img src={Email} className="lg:w-7 lg:h-7 h-4 w-4" alt="Email" />
              <p className="">ijmrset@gmail.com</p>
            </div>

            <div className="flex items-center justify-center gap-1">
              <img src={Impactfactor} className="lg:w-7 lg:h-7 h-4 w-4 " alt="Impact Factor" />
              <p className="">Impact Factor: 7.521</p>
            </div>

            <div className="flex items-start justify-center gap-1-center">
              <img src={Check} className="lg:w-7 lg:h-7 h-4 w-4 " alt="Check" />
              <p className="-mr-4">Compliant with UGC CARE Journal Norms and Guidelines</p>
            </div>
          </div>
          <EmailImpactCheck theme={'white'} />
          <ContentChanger />
        </section>
        <section id="section2" className="bg-white min-h-screen lg:pt-16  lg:p-10 p-5">
          <h1 className="text-center lg:text-[70px] text-[30px] pb-5 lg:leading-8 leading-none font-Inter font-bold">
            IJMRSET <br />
            <span className="lg:text-[30px] text-[15px] text-wrap">
              (Open Access, Double Blind Peer-Reviewed, Refereed, & Scholarly Indexed Journal)
            </span>
          </h1>
          <div className="flex gap-4">
            <div className="lg:w-[70%]">
              <p className="pb-10 font-Inter font-semibold lg:text-[18px] italic text-[13px]">
                IJMRSET is a well-established, multidisciplinary, open-access, peer-reviewed journal
                with an Impact Factor of 7.521 (calculated by Google Scholar and Semantic Scholar |
                AI-Powered Research Tool). Published monthly in multiple languages, it is indexed in
                all major databases and repositories, ensuring widespread visibility of the research
                it publishes. The journal assigns a Digital Object Identifier (DOI) to every article
                and includes a Citation Generator. It follows COPE Guidelines for ethical publishing
                and is an ISSN Approved Journal. The journal aims to provide an efficient and
                transparent peer-review process. Authors can expect a swift and reliable experience
                from submission to publication.
                <br />
                <br />
                IJMRSET offers affordable processing charges, with a fee of ₹1000 INR for Indian
                authors and $30 for international authors. The journal is committed to maintaining
                low costs while ensuring quality. With its global reach and indexing in major
                databases, the journal maximizes the impact of the research it publishes. IJMRSET
                provides scholars a platform to share their work with a wider audience, while
                ensuring high ethical standards. Authors can trust the journal for a timely and
                rigorous peer-review process. The journal remains a reliable and valuable resource
                for scholars in various disciplines.
              </p>
            </div>
            <div className="lg:w-[30%] hidden lg:flex justify-center ">
              <img
                src={Albert_Einstein}
                alt="Albert_Einstein"
                className="h-[400px] rounded-3xl rotate-6 drop-shadow-xl"
              />
            </div>
          </div>
          <div className=" text-black flex flex-col lg:flex-row  items-center gap-5 justify-start px-[2%]">
            <div className="lg:w-[60%] w-full  min-h-[600px] px-5 border-[20px]   bg-gray-300/15 flex flex-col gap-4 py-5 items-center  border-y-gray-800 border-x-black text-center ">
              <h1 className="font-Inter font-bold lg:text-[34px] text-[15px] underline underline-offset-4">
                CALL OF PAPERS
              </h1>

              <div className=" bg-white/50 p-4  font-Inter rounded-sm font-semibold shadow-xl">
                <h1> Volume 7.ISSUE 12, DECEMEBER @2024</h1>
              </div>
              <div className="space-x-3 lg:space-x-1 font-Inter">
                <h2 className="lg:text-[22px] text-[15px] font-semibold">Submission Deadline</h2>

                <p>{lastDate}</p>
              </div>

              <div className="flex lg:flex-row flex-col gap-5 px-3 justify-between items-center">
                <div className="bg-white  lg:w-[30%] w-[200px] lg:h-[150px] h-[100px] max-h-[150px] flex flex-col items-center   shadow-2xl rounded-md  p-3 font-Inter font-semibold">
                  <img src={clock} alt="clock" className="  lg:h-14 lg:w-14 w-12" />

                  <h1 className="text-[14px]">Fast Tracking Notification</h1>
                  <p className="text-[14px]">12 to 24 hrs</p>
                </div>
                <img
                  src={Arrow}
                  alt="arrow"
                  className="lg:w-[50px]  lg:rotate-0 rotate-90 lg:h-[30px] h-[30px]"
                />
                <div className="bg-white  lg:w-[30%] w-[200px] lg:h-[150px] h-[100px] max-h-[150px] flex flex-col justify-center items-center  shadow-2xl rounded-md p-3  font-Inter font-semibold">
                  <img src={clock} alt="clock" className=" clock lg:h-14 lg:w-14 w-12" />

                  <h1 className="text-[14px]">Publications</h1>
                  <p className="text-[14px]">12 to 24 hrs</p>
                </div>
                <img
                  src={Arrow}
                  alt="arrow"
                  className="lg:w-[50px]  lg:rotate-0 rotate-90 lg:h-[30px] h-[30px]"
                />
                <div className="bg-white   lg:w-[30%] w-[200px] lg:h-[150px] max-h-[150px] h-[100px] flex flex-col justify-center items-center  shadow-2xl rounded-md p-3  font-Inter font-semibold">
                  <img src={clock} alt="clock" className="clock lg:h-14 lg:w-14 w-12" />

                  <h1 className="text-[14px]">E-certficate</h1>
                  <p className="text-[14px]">2 hrs</p>
                </div>
              </div>
              <div className="font-Inter font-semibold py-3 space-y-3">
                <h1>Submit Paper As Per Single Column Format</h1>
                <ul className="flex lg:flex-row flex-col justify-center items-center gap-3 lg:text-[20px] text-[15px]">
                  <a
                    href="mailto:ijmrset@gmail.com"
                    className="bg-[#000] w-fit p-3 rounded-lg flex gap-2 text-white font-semibold font-lora"
                  >
                    <img src={upload} alt="login" className="lg:w-[30px] min-h-[22.5px] w-[20px]" />
                    <button type="button">Submit Paper via Email</button>
                  </a>
                  <a
                    href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fijmrset.com%2FIJMRSET_Paper%2520Template.docx&wdOrigin=BROWSELINK"
                    className="bg-[#000] w-fit p-3 rounded-lg flex gap-2  text-white font-semibold font-lora"
                  >
                    <img src={file} alt="login" className="lg:w-[30px] w-[20px]" />
                    <button type="button">Paper Format</button>
                  </a>
                </ul>
                <p>Email:ijmrset@gmail.com</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-3 lg:-mt-10">
              <h1 className="font-Inter lg:text-[30px] text-[20px] font-bold text-center lg:text-right pb-2 ">
                Why Choose US ?
              </h1>
              <div className="flex gap-2">
                <div className=" bg-purple-900 shadow-xl lg:h-[150px] h-[110px] lg:w-[70%] w-[60%] rounded-xl ">
                  <div className="h-full w-full p-5  flex flex-col justify-center items-center">
                    <img src={GoogleAnimation} alt="Google" className="lg:h-14 h-10" />
                    <h1 className="text-white text-center font-Inter lg:text-[18px] text-[14px] font-bold">
                      Indexed in Google Scholar and Other Reputed Databases
                    </h1>
                  </div>
                </div>
                <div className="bg-yellow-500 lg:h-[150px] h-[110px] lg:w-[30%] w-[40%] rounded-xl ">
                  <div className="h-full w-full p-5  flex flex-col justify-center items-center">
                    <img src={ImpactFactorAnimation} alt="Google" className="lg:h-14 h-10" />
                    <h1 className="text-black text-center font-Inter lg:text-[18px] text-[14px]  font-bold">
                      High Impact Factor
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className=" h-[400px] lg:w-[35%] w-[30%] flex flex-col gap-2">
                  <div className="bg-teal-500 lg:h-[33.33%] h-[120px] w-full  rounded-xl">
                    <div className="h-full w-full p-5  flex flex-col justify-center items-center">
                      <img src={FileAnimation} alt="Google" className="lg:h-14 h-10" />
                      <h1 className="text-white text-center font-Inter text-md font-bold lg:text-[18px] text-[12px]">
                        Strict Policy against Plagiarism
                      </h1>
                    </div>
                  </div>
                  <div className="bg-green-500 lg:h-[33.33%] h-[120px] w-full rounded-xl">
                    <div className="h-full w-full p-2 flex flex-col justify-center items-center">
                      <img src={MoneyAnimation} alt="Google" className="lg:h-16 h-10" />
                      <h1 className="text-white text-center font-Inter text-md font-bold lg:text-[18px] text-[12px]">
                        Low Processing Charges
                      </h1>
                    </div>
                  </div>
                  <div className="bg-orange-500 lg:h-[33.33%] h-[120px] w-full rounded-xl">
                    <div className="h-full w-full p-5  flex flex-col justify-center items-center">
                      <img src={CertificateAnimation} alt="Google" className="lg:h-14 h-10" />
                      <h1 className="text-white text-center font-Inter text-md font-bold lg:text-[18px] text-[12px]">
                        Free Digitally Signed E-Certificates
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-500 sapce-y-3 flex flex-col p-2 justify-evenly  lg:h-[410px] h-[375px] lg:w-[65%] w-[70%] rounded-xl">
                  <div className="flex gap-1 items-center ">
                    <img src={ArrowAnimation} alt="Google" className="h-14 w-14" />
                    <h1 className="text-black  font-Inter lg:text-[18px] text-[14px] font-bold">
                      Best Peer-Reviewed Journal
                    </h1>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={ArrowAnimation} alt="Google" className="h-14 w-14" />
                    <h1 className="text-black  font-Inter lg:text-[18px] text-[14px] font-bold">
                      Easy and Quick Processing and Publication
                    </h1>
                  </div>
                  <div className="flex gap-1  items-center">
                    <img src={ArrowAnimation} alt="Google" className="h-14 w-14" />
                    <h1 className="text-black  font-Inter lg:text-[18px] text-[14px] font-bold">
                      Authors Queries Resolved Immediately
                    </h1>
                  </div>
                  <div className="flex gap-1  items-center">
                    <img src={ArrowAnimation} alt="Google" className="h-14 w-14" />
                    <h1 className="text-black  font-Inter lg:text-[18px] text-[14px] font-bold">
                      Best Multidisciplinary Journal
                    </h1>
                  </div>
                  <div className="flex gap-1  items-center">
                    <img src={ArrowAnimation} alt="Google" className="h-14 w-14" />
                    <h1 className="text-black  font-Inter lg:text-[18px] text-[14px] font-bold">
                      24 X 7 Customer Support
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section3" className="bg-color min-h-screen py-10 px-3">
          <div className="text-[34px] font-semibold font-Inter text-white text-center">
            <h1>
              <span className="font-Inter text-white lg:text-[34px] text-[26px] font-bold ">
                <AnimatedText text={'OUR ACHIEVEMENTS'} />
              </span>
            </h1>
            <div className="flex lg:flex-row flex-col justify-center  py-10 gap-2 text-black">
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-xl flex justify-center items-center mx-auto shadow-xl lg:h-[410px] h-[200px] w-1/2 lg:w-[300px]">
                  <img src={Exp} alt="experience" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="lg:flex hidden  gap-2">
                  <div className="bg-white flex flex-col  shadow-xl justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[200px]">
                    <CountUp
                      start={0.0}
                      end={7.521}
                      duration={10}
                      decimals={3}
                      className="lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Impact Factor
                    </h1>
                  </div>
                  <div className="bg-white flex shadow-xl  flex-col justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <CountUp
                      start={0}
                      end={12000}
                      duration={10}
                      suffix="+"
                      className=" lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Google Scholar Citations
                    </h1>
                  </div>

                  <div className="bg-white flex flex-col justify-center pt-10 items-center rounded-xl shadow-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <CountUp
                      start={0}
                      end={8000}
                      duration={20}
                      suffix="+"
                      className="lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Articles Published
                    </h1>
                  </div>
                </div>
                <div className="lg:flex   gap-2 hidden ">
                  <div className="bg-white flex flex-col shadow-xl  justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[200px]">
                    <h1 className='"text-black -ml-4 font-Inter font-bold lg:text-[22px] text-[16px]'>
                      H <br />
                      INDEX-59
                    </h1>
                  </div>
                  <div className="bg-white rounded-xl shadow-xl flex flex-col justify-center  items-center  lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <img src={DOI} alt="DOI" className="lg:h-28 h-[50px] " />

                    <h1 className='"text-black -ml-4 font-Inter font-bold lg:text-[22px] text-[16px]'>
                      UNIQUE <br /> DOI FOR EACH ARTICLE
                    </h1>
                  </div>
                  <div className="bg-white flex flex-col justify-center  shadow-xl  items-center  rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <img src={ISO} alt="ISO" className="lg:h-28 h-[50px] " />
                    <h1 className="text-black  font-Inter font-bold lg:text-[22px] text-[16px]">
                      Certified Organization
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center items-center w-full gap-2 lg:hidden ">
                  <div className="bg-white flex flex-col  shadow-xl justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[200px]">
                    <CountUp
                      start={0.0}
                      end={7.521}
                      duration={10}
                      decimals={3}
                      className="lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Impact Factor
                    </h1>
                  </div>
                  <div className="bg-white flex shadow-xl  flex-col justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <CountUp
                      start={0}
                      end={12000}
                      duration={10}
                      suffix="+"
                      className=" lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Google Scholar Citations
                    </h1>
                  </div>

                  <div className="bg-white flex flex-col justify-center pt-10 items-center rounded-xl shadow-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <CountUp
                      start={0}
                      end={8000}
                      duration={20}
                      suffix="+"
                      className="lg:text-[48px] text-[30px] text-black  font-Inter font-bold"
                    />
                    <h1 className="text-black font-Inter font-semibold lg:text-[22px] text-[16px]">
                      Articles Published
                    </h1>
                  </div>
                  <div className="bg-white flex flex-col shadow-xl  justify-center items-center rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[200px]">
                    <h1 className='"text-black -ml-4 font-Inter font-bold lg:text-[22px] text-[16px]'>
                      H <br />
                      INDEX-59
                    </h1>
                  </div>
                  <div className="bg-white rounded-xl shadow-xl flex flex-col justify-center  items-center  lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <img src={DOI} alt="DOI" className="lg:h-28 h-[50px] " />

                    <h1 className='"text-black -ml-4 font-Inter font-bold lg:text-[22px] text-[16px]'>
                      UNIQUE <br /> DOI FOR EACH ARTICLE
                    </h1>
                  </div>
                  <div className="bg-white flex flex-col justify-center  shadow-xl  items-center  rounded-xl lg:h-[200px] h-[150px] w-[150px] lg:w-[400px]">
                    <img src={ISO} alt="ISO" className="lg:h-28 h-[50px] " />
                    <h1 className="text-black  font-Inter font-bold lg:text-[22px] text-[16px]">
                      Certified Organization
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h1 className="text-center pb-10">
              <span className="font-Inter text-white lg:text-[34px]  text-[26px] font-bold ">
                <AnimatedText text={'PUBLICATION PROCESS'} />
              </span>
            </h1>
            <div className="flex gap-1 justify-center flex-wrap">
              <div className="bg-purple-700 h-[400px] lg:scale-100 scale-75 text-white w-[300px] rounded-xl outline-white outline-2 shadow-lg p-4">
                <div className="flex items-center gap-2 ">
                  <h1 className="font-Inter text-[70px] font-bold  drop-shadow-lg ">01</h1>
                  <img
                    src={ArrowAnimation_2}
                    alt="Arrow"
                    className="rotate-[270deg] h-[100px] ml-auto"
                  />
                </div>
                <div className=" mx-auto h-32 w-32 bg-white rounded-full">
                  <img src={Animation3} alt="Animation" />
                </div>
                <h1 className="font-Inter text-[18px] text-center font-semibold py-2 text-purple-200 underline underline-offset-4">
                  Paper Submission
                </h1>
                <p className="text-md text-center italic drop-shadow">
                  Submit your manuscript via email to [email protected], adhering to the journal’s
                  format
                </p>
              </div>
              <div className="bg-purple-700 h-[400px] lg:scale-100 scale-75 text-white w-[300px] rounded-xl outline-white outline-2 shadow-lg p-4">
                <div className="flex items-center gap-2 ">
                  <h1 className="font-Inter text-[70px] font-bold  drop-shadow-lg ">02</h1>
                  <img
                    src={ArrowAnimation_2}
                    alt="Arrow"
                    className="rotate-[270deg] h-[100px] ml-auto"
                  />
                </div>
                <div className="mx-auto h-32 w-32 bg-white rounded-full">
                  <img src={Animation1} alt="Animation" />
                </div>

                <h1 className="font-Inter text-[18px] text-center font-semibold py-2 text-purple-200 underline underline-offset-4">
                  Notification
                </h1>
                <p className="text-md text-center italic drop-shadow">
                  Acceptance or rejection is communicated within 24 hours
                </p>
              </div>
              <div className="bg-purple-700 h-[400px] lg:scale-100 scale-75 text-white w-[300px] rounded-xl outline-white outline-2 shadow-lg p-4">
                <div className="flex items-center gap-2 ">
                  <h1 className="font-Inter text-[70px] font-bold drop-shadow-lg ">03</h1>
                  <img
                    src={ArrowAnimation_2}
                    alt="Arrow"
                    className="rotate-[270deg] h-[100px] ml-auto"
                  />
                </div>
                <div className="flex justify-center items-center mx-auto h-32 w-32 bg-white rounded-full">
                  <img src={Animation2} alt="Animation" className="scale-150" />
                </div>

                <h1 className="font-Inter text-[18px] text-center font-semibold py-2 text-purple-200 underline underline-offset-4">
                  Registration
                </h1>
                <p className="text-md text-center italic drop-shadow">
                  Pay the processing fee (₹1000 for Indian authors or $30 for foreign authors) to
                  confirm publication
                </p>
              </div>
              <div className="bg-purple-700 h-[400px] lg:scale-100 scale-75 text-white  w-[300px] rounded-xl outline-white outline-2 shadow-lg p-4">
                <div className="flex items-center gap-2 py-4">
                  <h1 className="font-Inter text-[70px] font-bold  drop-shadow-lg ">04</h1>
                </div>
                <div className=" mx-auto h-32 w-32 bg-white rounded-full overflow-hidden">
                  <img src={Animation4} alt="Animation" />
                </div>
                <h1 className="font-Inter text-[18px] text-center font-semibold py-2 text-purple-200 underline underline-offset-4">
                  E-Certificates & Publication
                </h1>
                <p className="text-md text-center italic drop-shadow">
                  Accepted papers are published online with digital certificates provided for
                  authors
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="section4" className="section3 min-h-screen py-10 ">
          <div className="flex gap-4 min-h-[700px] max-w-screen overflow-hidden">
            <div className="lg:w-[30%]  hidden lg:block  mt-5 px-4 text-white space-y-3 relative">
              <div className="absolute top-10  -translate-x-[70%] w-[800px] h-[600px] z-10 rounded-full border-2 border-dashed border-black bg-transparent">
                <CircularItems />
              </div>
            </div>
            <div className="lg:w-[40%] w-full flex flex-col justify-center items-center gap-5 ">
              <h1 className="font-Inter text-black lg:text-[34px] text-[26px] font-bold ">
                RESEARCH AREAS
              </h1>
              <div className="lg:h-[250px] h-[200px] lg:w-[200px] w-[150px] bg-black rounded-xl  flex flex-col gap-10 justify-center items-center">
                <img src={NewOne} alt="newOne" className="lg:h-[150px] h-[100px]" />
              </div>
              <h1 className="font-Libre_Baskerville lg:text-[18px] text-[16px] font-semibold py-2 text-center">
                Start today with IJMRSET – be the next to make an impact
              </h1>
              <ul className="flex mt-5 flex-wrap justify-center items-center gap-2">
                {fields.map((each, index) => (
                  <li
                    key={index}
                    className="bg-black text-white font-Inter lg:text-[18px] text-[14px] font-semibold p-3 rounded-full"
                  >
                    {each}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-[30%]  hidden lg:block  mt-5 px-4 text-white space-y-3 relative">
              <div className="absolute  top-10 right-0  translate-x-[70%] w-[800px] h-[600px] z-10 rounded-full border-2 border-dashed border-black bg-transparent">
                <CircularItems />
              </div>
            </div>
          </div>
          <div className="py-5">
            <h1 className="lg:text-left pl-10 font-Inter text-black lg:text-[34px] text-center text-[26px] font-bold ">
              ISSUES
            </h1>
            <div>
              <IssuesSection LastDate={lastDate} />
            </div>
          </div>
          <div className="py-5 overflow-hidden ">
            <h1 className="text-right pr-10 font-Inter  text-black lg:text-[34px] text-[26px] font-bold ">
              RECENT PAPERS
            </h1>
            <div className="min-h-400px">
              <RecentPapers SlideData={SlideData} />
            </div>
          </div>
        </section>
        <section id="section5" className="bg-color min-h-[500px] py-10">
          <h1 className="text-center pr-10 font-Inter text-white lg:text-[34px] text-[26px] font-bold">
            CHARGES
          </h1>

          <div className="flex flex-wrap gap-10 justify-center items-center py-10 font-Inter">
            <div className=" bg-white min-h-[400px] lg:w-[350px] w-[200px ] p-5 rounded-3xl rounded-tl-none lg:space-y-5 space-y-2">
              <div className="bg-slate-400 flex justify-center items-center h-[150px] w-[150px] rounded-full mx-auto">
                <img src={Author} alt="author" className="lg:h-[150px] h-[100px]" />
              </div>
              <h1 className="font-lora lg:text-[22px] text-[16px] text-center font-extrabold">
                INDIAN AUTHOR
              </h1>
              <p className="lg:text-[34px] text-[26px] text-center  font-bold">INR 800/-</p>
              <ul className="space-y-3 py-3 pl-5">
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">Acceptance Notification</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">E-Certificate to each author</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">Publication Link</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">DOI Allocation</p>
                </li>
              </ul>
              <a
                href="mailto:ijmrset@gmail.com"
                className="bg-[#000] mx-auto w-[250px] p-3 rounded-lg flex gap-2  text-white font-semibold font-lora"
              >
                <img src={upload} alt="login" className="w-[30px]" />
                <button type="button">Submit Paper via Email</button>
              </a>
              <a
                href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fijmrset.com%2FIJMRSET_Paper%2520Template.docx&wdOrigin=BROWSELINK"
                className="bg-[#000] mx-auto w-[250px] p-3 rounded-lg flex gap-2 justify-center text-white font-semibold font-lora"
              >
                <img src={file} alt="login" className="w-[30px]" />
                <button type="button">Paper Format</button>
              </a>
            </div>
            <div className=" bg-white min-h-[400px] lg:w-[350px] w-[200px ] p-5 rounded-3xl rounded-br-none lg:space-y-5 space-y-2">
              <div className="bg-slate-400 flex justify-center items-center h-[150px] w-[150px] rounded-full mx-auto">
                <img src={Author} alt="author" className="lg:h-[150px] h-[100px]" />
              </div>
              <h1 className="font-lora text-[22px] text-center font-extrabold">FOREIGN AUTHOR</h1>
              <p className="lg:text-[34px] text-[26px] text-center  font-bold">USD 50/-</p>
              <ul className="space-y-3 py-3 pl-5">
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">Acceptance Notification</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">E-Certificate to each author</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">Publication Link</p>
                </li>
                <li className="flex gap-2">
                  <img src={line} alt="dots" className="h-7 animate-spin-slow" />
                  <p className="">DOI Allocation</p>
                </li>
              </ul>
              <a
                href="mailto:ijmrset@gmail.com"
                className="bg-[#000] mx-auto w-[250px] p-3 rounded-lg flex gap-2  text-white font-semibold font-lora"
              >
                <img src={upload} alt="login" className="w-[30px]" />
                <button type="button">Submit Paper via Email</button>
              </a>
              <a
                href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fijmrset.com%2FIJMRSET_Paper%2520Template.docx&wdOrigin=BROWSELINK"
                className="bg-[#000] mx-auto w-[250px] p-3 rounded-lg flex gap-2 justify-center text-white font-semibold font-lora"
              >
                <img src={file} alt="login" className="w-[30px]" />
                <button type="button">Paper Format</button>
              </a>
            </div>
          </div>
          <div className="my-5 overflow-hidden">
            <IndexingLogos />
          </div>

          <div className="py-10">
            <h1 className="text-center lg:pr-10 font-Inter text-white lg:text-[34px] text-[26px] font-bold ">
              Benefits of Publishing in IJMRSET
            </h1>
            <Benfits />
          </div>
        </section>
        <section className="min-h-96 bg-color3 py-10 ">
          <h1 className="text-center lg:pr-10 font-Inter text-black lg:text-[34px] text-[26px] font-bold ">
            Frequently Asked Question (FAQ)
          </h1>

          <FAQs />
        </section>

        <section className="">
          <Footer />
        </section>
        <div className="bg-color3 py-4 flex w-full px-5">
          <p className="text-md text-center text-black mx-auto font-Inter">
            Copyright © 2024 IJMRSET All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}
