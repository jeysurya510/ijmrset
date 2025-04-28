import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import pdf from '../assets/pdf.png';
import parse from 'html-react-parser';
import DOC_GIF from '../assets/doc.gif';
import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';
import AnimatedText from '../utils/Animationtext';
import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';

export default function Issues() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState('');
  const [data, setData] = useState({});
  const [commonData, setCommonData] = useState({});
  const [specialData, setSpecialData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/grouped');
        const result = await response.json();

        const common = {};
        const special = {};

        Object.keys(result).forEach((year) => {
          Object.keys(result[year]).forEach((volume) => {
            if (
              year.toLowerCase().includes('special') ||
              volume.toLowerCase().includes('special')
            ) {
              if (!special[year]) special[year] = {};
              special[year][volume] = result[year][volume];
            } else {
              if (!common[year]) common[year] = {};
              common[year][volume] = result[year][volume];
            }
          });
        });

        setCommonData(common);
        setSpecialData(special);
        setData(result);

        // Read URL query parameters
        const queryParams = new URLSearchParams(location.search);
        const categoryFromUrl = queryParams.get('category');
        const subCategoryFromUrl = queryParams.get('subcategory');

        // Set default values
        const firstCategory =
          categoryFromUrl || Object.keys(common)[0] || Object.keys(special)[0] || '';
        const firstSubCategory =
          subCategoryFromUrl ||
          (result[firstCategory] ? Object.keys(result[firstCategory])[0] : '');

        setActiveCategory(firstCategory);
        setActiveSubCategory(firstSubCategory);

        // Update URL if parameters are missing
        if (!categoryFromUrl || !subCategoryFromUrl) {
          navigate(`?category=${firstCategory}&subcategory=${firstSubCategory}`, { replace: true });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location.search, navigate]);

  // Handle category change and update URL
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const firstSubCategory = data[category] ? Object.keys(data[category])[0] : '';
    setActiveSubCategory(firstSubCategory);
    navigate(`?category=${category}&subcategory=${firstSubCategory}`, { replace: true });
  };

  // Handle subcategory change and update URL
  const handleSubCategoryChange = (subcategory) => {
    setActiveSubCategory(subcategory);
    navigate(`?category=${activeCategory}&subcategory=${subcategory}`, { replace: true });
  };

  return (
    <div className="bg-color3 min-h-screen max-w-full overflow-hidden">
      <NavBar
        SubNavColor={'bg-slate-200'}
        NavColor={'bg-slate-200'}
        Scroll={'editordesk-section-1'}
      />

      <section id="editordesk-section-1" className="pt-10 text-black overflow-hidden ">
        <p className="lg:text-[34px] text-[14px] text-center font-Libre_Baskerville leading-relaxed font-medium ">
          International Journal of Multidisciplinary Research in <br />
          <span className="font-Libre_Baskerville italic ">
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

      <div className="py-5 ">
        <h1 className="lg:text-[34px] text-[20px] text-center py-5 font-semibold font-Inter ">
          ISSUES
        </h1>
        <div className="flex lg:flex-row flex-col w-full overflow-hidden gap-10 lg:mx-10">
          {/* Left Sidebar */}
          <div className="lg:w-[30%] h-fit lg:min-h-screen bg-white/25 rounded-xl shadow-2xl border-purple-950 my-5 px-5">
            {/* Common Issues */}
            <h1 className="text-white bg-purple-950 py-4 font-lora text-[18px] font-semibold text-center">
              CURRENT ISSUE
            </h1>
            <div className="p-5">
              {Object.keys(commonData).map((year) => (
                <div key={year} className="flex flex-col gap-2">
                  <h1
                    onClick={() => handleCategoryChange(year)}
                    className={`py-4 font-lora text-[18px] font-semibold text-center cursor-pointer ${activeCategory === year ? 'bg-purple-600 text-white' : 'text-black'}`}
                  >
                    {year}
                  </h1>
                  <div
                    className={`${activeCategory === year ? 'block space-y-3' : 'hidden'} transition-all`}
                  >
                    {Object.keys(commonData[year]).map((volume) => (
                      <div
                        key={volume}
                        onClick={() => handleSubCategoryChange(volume)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src={DOC_GIF}
                          alt="document gif"
                          className="w-[100px] h-[30px] object-cover"
                        />
                        <p
                          className={`text-black font-Libre_Baskerville ${activeSubCategory === volume && activeCategory === year ? 'underline' : ''}`}
                        >
                          {volume}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Special Issues */}
            <h1 className="text-white bg-purple-950 py-4 font-lora text-[18px] font-semibold text-center">
              SPECIAL ISSUE
            </h1>
            <div className="p-5">
              {Object.keys(specialData).map((year) => (
                <div key={year} className="flex flex-col gap-2">
                  <h1
                    onClick={() => setActiveCategory(year)}
                    className={`py-4 font-lora text-[18px] font-semibold text-center cursor-pointer ${activeCategory === year ? 'bg-purple-600 text-white' : 'text-black'}`}
                  >
                    {year}
                  </h1>
                  <div
                    className={`${activeCategory === year ? 'block ' : 'hidden'} transition-all`}
                  >
                    {Object.keys(specialData[year]).map((volume) => (
                      <div
                        key={volume}
                        onClick={() => setActiveSubCategory(volume)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src={DOC_GIF}
                          alt="document gif"
                          className="w-[100px] h-[30px] object-cover"
                        />
                        <p
                          className={`text-black font-Libre_Baskerville ${activeSubCategory === volume && activeCategory === year ? 'underline' : ''}`}
                        >
                          {volume}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="lg:w-[60%]  flex-1 p-5 bg-white rounded-xl shadow-lg">
            {data[activeCategory] && data[activeCategory][activeSubCategory] ? (
              <div className="max-w-full lg:p-5 ">
                <h2 className="py-4 font-lora text-[18px] font-semibold text-center">
                  {activeSubCategory}
                </h2>
                <div flex flex-col>
                  {data[activeCategory][activeSubCategory].map((issue, index) => (
                    <div
                      className="flex lg:flex-row flex-col mb-5 min-h-fit bg-white rounded-lg shadow-lg overflow-hidden  gap-5"
                      key={index}
                    >
                      <div className="lg:w-[100px] w-full lg:block  hidden bg-purple-950 relative">
                        <div className="lg:h-5 w-3 h-3 lg:w-5 rounded-full bg-white absolute z-30 top-5 left-5"></div>
                        <div className="lg:-rotate-90  text-center absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <h1 className=" font-Inter text-2xl font-bold text-white">IJMRSET</h1>
                        </div>
                      </div>
                      <div className="lg:w-[100px] w-full lg:hidden block h-[80px]  bg-purple-950 relative">
                        <div className="lg:h-5 w-3 h-3 lg:w-5 rounded-full bg-white absolute z-30 top-5 left-5"></div>
                        <div className="lg:-rotate-90  text-center absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <h1 className=" font-Inter text-2xl font-bold text-white">IJMRSET</h1>
                        </div>
                      </div>
                      <div className="w-full">
                        <h1 className="py-4 font-lora text-[15px] lg:text-[20px] text-black font-semibold text-center ">
                          {issue.title}
                        </h1>
                        <div className="p-5 w-full  lg:text-xl text-[15px] font-lora text-gray-700">
                          {parse(issue.description)}
                          <a
                            href={`/upload/${issue.pdf}`}
                            className="  px-3 py-2 mt-3 rounded-md flex gap-2 justify-center  items-center"
                          >
                            <img src={pdf} alt="pdf" className="lg:w-10 lg:h-10 h-5 w-5" />
                            <h1 className="font-Inter text-black">Download PDF</h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No data available</p>
            )}
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
