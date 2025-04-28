import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import AnimatedText from '../utils/Animationtext';
import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';
import line from '../assets/line.png';
import FLOW from '../assets/FLOW.png';

export default function Author() {
  const list1 = [
    { id: 6, text: 'Research articles' },
    { id: 1, text: 'Review articles' },
    { id: 2, text: 'Informative articles' },
    { id: 3, text: 'Case Studies' },
    { id: 4, text: 'Comparative Studies' },
    { id: 5, text: 'Extended version of conference papers' },
  ];

  return (
    <div className="bg-color3 min-h-screen">
      <NavBar SubNavColor={'bg-slate-200'} NavColor={'bg-slate-200'} Scroll={'author-section-1'} />
      <div>
        <section id="author-section-1" className="pt-10 text-black overflow-hidden">
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
        <div className="lg:py-10 py-5 space-y-5">
          <h1 className="font-Inter text-black text-[34px] font-bold text-center">AUTHORS</h1>

          <div className=" lg:mx-5 mx-1">
            <ul className=" rounded-lg text-black lg:p-10 p-4">
              <li className="lg:text-[22px] text-[18px] text-center lg:pt-10  font-semibold font-Inter underline underline-offset-2">
                A. PAPER SUBMISSION
              </li>
              <p className="lg:text-[18px] text-[15px] font-medium font-lora text-center py-2 ">
                IJMRSET invites authors to submit articles in multidisciplinary areas of Science,
                Engineering, Technology, and their applications in business, industry, and other
                relevant fields. We welcome the following types of contributions:
              </p>
              <li>
                <ul className="lg:py-5 py-2">
                  {list1.map((each) => (
                    <li
                      key={each.id}
                      className="flex gap-2 font-lora items-center lg:pl-[40%] pl-5 lg:text-[18px] text-[15px] font-medium"
                    >
                      <img src={line} alt="dots" className="lg:h-7 h-5 animate-spin-slow" />
                      <p>{each.text}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-center lg:text-[18px] text-[15px] font-medium font-lora ">
                  Authors can submit their papers year-round to ijmrset@gmail.com. Submissions must
                  adhere to the following guidelines:
                </p>
                <ul className="lg:pl-[25%] pl-5 lg:text-[18px] text-[15px] font-medium font-lora space-y-2 my-2">
                  <li className=" ">1. Papers must be original and not previously published.</li>
                  <li className="">
                    
                    2. Papers should not be under consideration for publication elsewhere during the
                    evaluation process.
                  </li>
                </ul>
                <p className="text-center lg:text-[18px] text-[15px] font-medium font-lora underline underline-offset-1">
                  Review and Publication Process:
                </p>
                <ul className="lg:pl-[20%] pl-5 lg:text-[18px] text-[15px] font-medium font-lora space-y-2 my-2">
                  <li className=" ">
                    Notifications of acceptance or rejection will be sent to the corresponding
                    author only.
                  </li>
                  <li className="">
                    Accepted papers, after undergoing a thorough review process, will be published
                    online immediately.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className=" rounded-lg text-black lg:p-10 p-5">
              <li className="lg:text-[22px] text-[18px]  text-center lg:pt-10 pt-5 font-semibold font-Inter underline underline-offset-2">
                B. STRUCTURE OF AN ARTICLE
              </li>
              <p className="lg:text-[18px] text-[15px] font-medium font-lora text-center py-2 ">
                The article should follow the structure outlined below:
              </p>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className="lg:text-[18px] text-[15px] font-semibold py-2">
                  I . TITLE (Maximum 120 Characters)
                </h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6 lg:text-[18px] text-[15px]">
                    The title should be specific, informative, and easy to understand.
                  </li>
                  <li className="pl-6 lg:text-[18px] text-[15px]">
                    It must clearly reflect the objective of the research paper.
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  lg:text-[18px] text-[15px] py-2">
                  II . AUTHOR INFROMATION
                </h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6 lg:text-[18px] text-[15px]">
                    Include the Name, Designation, Department, Institute Name, Location (City,
                    State, Country), Email ID, and Mobile Number of each author.
                  </li>
                  <li className="pl-6 lg:text-[18px] text-[15px]">
                    It must clearly reflect the objective of the research paper.
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold lg:text-[18px] text-[15px] py-2">III . ABSTRACT</h1>
                <ul className="space-y-2 ">
                  <li className="pl-6 list-inside list-disc lg:text-[18px] text-[15px]">
                    A concise summary of the research, not exceeding 100 words.
                  </li>
                  <li className="pl-6 ">
                    <li className="py-2 list-inside list-disc">It should highlight:</li>
                    <ul className="space-y-2 list-inside list-disc lg:text-[18px] text-[15px]">
                      <li className="pl-6">The research question or problem.</li>
                      <li className="pl-6">Methods or approach used.</li>

                      <li className="pl-6">Key results and main conclusions.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold  lg:text-[18px] text-[15px] py-2">IV . KEYWORDS</h1>
                <ul className="space-y-2 list-inside list-disc lg:text-[18px] text-[15px]">
                  <li className="pl-6">
                    Include five key terms that define the research domain and specific problem
                    area.
                  </li>
                </ul>
                <ul className="space-y-2 text-left text-md font-medium lg:ml-10 ml-5 font-lora py-2">
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold lg:text-[18px] text-[15px] py-2 underline">
                      1. INTRODUCTION
                    </h1>
                    <ul className="space-y-2 list-inside list-disc lg:text-[18px] text-[15px]">
                      <li className="pl-6">
                        Provide a brief overview (not more than one page) that explains the
                        relevance of your research
                      </li>
                      <li className="pl-6">Set the context for your study and its objectives. </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  lg:text-[18px] text-[15px] py-2 underline">
                      2. LITERATURE SURVEY
                    </h1>
                    <ul className="space-y-2 list-inside list-disc lg:text-[18px] text-[15px]">
                      <li className="pl-6">
                        Present a short history and background of your research area.
                      </li>
                      <li className="pl-6">
                        Summarize significant work done by other researchers, identifying gaps that
                        your study addresses.
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold  lg:text-[18px] text-[15px] py-2 underline">
                      3. METHODOLOGY/APPROACH
                    </h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Explain the methodology or approach used to address the research problem.
                      </li>
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Include details of tools, techniques, or models employed.
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold lg:text-[18px] text-[15px] py-2 underline">
                      4. RESULT & DISCUSSION
                    </h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Present the findings of your research.
                      </li>
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Use tables, graphs, or figures (where applicable) to illustrate results.
                      </li>
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Compare your results with previous research and provide interpretations.
                      </li>
                    </ul>
                  </li>
                  <li className="text-left text-md font-medium font-lora py-2">
                    <h1 className=" font-semibold lg:text-[18px] text-[15px] py-2 underline">
                      5. CONCLUSION
                    </h1>
                    <ul className="space-y-2 list-inside list-disc">
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Summarize the key findings and their implications concisely.
                      </li>
                      <li className="pl-6 lg:text-[18px] text-[15px]">
                        Highlight the overall impact or contribution of your research.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-left text-md font-medium font-lora py-2">
                <h1 className=" font-semibold lg:text-[18px] text-[15px] py-2">V . REFERENCES</h1>
                <ul className="space-y-2 list-inside list-disc">
                  <li className="pl-6 lg:text-[18px] text-[15px] ">
                    Cite all external sources referred to in your paper.
                  </li>
                  <li className="pl-6 lg:text-[18px] text-[15px]">
                    Use a standardized referencing style to ensure proper credit to original
                    contributors.
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className="lg:text-[22px] text-[18px] text-center pt-10  font-semibold font-Inter underline underline-offset-2">
                C. PAPER PUBLICATION FLOW
                <div className="py-5 ">
                  <img src={FLOW} alt="flow" className="h-fit w-fit" />
                </div>
              </li>
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
