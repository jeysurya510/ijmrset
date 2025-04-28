import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DOC_GIF from '../assets/doc.gif';

export default function IssuesSection({ LastDate }) {
  const [currentIssue, setCurrentIssue] = useState('');
  const [currentSpecialIssue, setSpecialCurrentIssue] = useState('');

  const [CommonData, setCommonData] = useState({});
  const [SpecialData, setSpecialData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/grouped');
        const data = await response.json();

        const commonData = {};
        const specialData = {};

        Object.keys(data).forEach((year) => {
          Object.keys(data[year]).forEach((volume) => {
            if (
              year.toLowerCase().includes('special') ||
              volume.toLowerCase().includes('special')
            ) {
              if (!specialData[year]) specialData[year] = {};
              specialData[year][volume] = data[year][volume];
            } else {
              if (!commonData[year]) commonData[year] = {};
              commonData[year][volume] = data[year][volume];
            }
          });
        });

        setCommonData(commonData);
        setSpecialData(specialData);

        // Set default current issues to the most recent available year
        const availableYears = Object.keys(commonData).sort((a, b) => b - a);
        if (availableYears.length > 0) {
          setCurrentIssue(availableYears[0]);
        }

        const specialYears = Object.keys(specialData).sort((a, b) => b - a);
        if (specialYears.length > 0) {
          setSpecialCurrentIssue(specialYears[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const IssueList = ({ issues, category }) => {
    return (
      <ul className="flex flex-col gap-4 py-4 min-h-32 pl-[5%]">
        {Object.keys(issues).map((volume, index) => (
          <li key={index} className="flex items-center">
            <img src={DOC_GIF} alt="document gif" className="w-[100px] h-[30px] object-cover" />

            {/* 🔹 Wrapped volume inside <Link> to pass category & subcategory */}
            <Link
              to={`/issues?category=${category}&subcategory=${volume}`}
              className="pt-2 -translate-x-6 text-black font-Libre_Baskerville"
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              {volume}
            </Link>
          </li>
        ))}
        {Object.keys(issues).length === 0 && (
          <li className="text-center text-black font-Libre_Baskerville">No issues available</li>
        )}
      </ul>
    );
  };

  const YearButtons = ({ years, onClick }) => (
    <ul className="flex gap-5 my-6 justify-center items-center flex-wrap">
      {years.map((year) => (
        <li key={year}>
          <button
            className="bg-[#000080] py-2 px-3 rounded-md text-white text-[14px] lg:text-[18px] font-medium"
            onClick={() => onClick(year)}
          >
            {year}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1 className="py-5 font-lora text-[18px] font-semibold text-center">
        Note: Last Date of Submission is <br />
        <span className="underline-offset-2 underline">{LastDate}</span>
      </h1>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-6">
        {/* Main Issues Section */}
        <div className="lg:w-[50%] w-full bg-white/25 rounded-xl shadow-xl min-h-[370px] border-black my-5 px-5">
          <h1 className="text-black font-lora text-[18px] font-semibold text-center">
            CURRENT ISSUES
          </h1>
          <YearButtons
            years={Object.keys(CommonData).sort((a, b) => b - a)}
            onClick={(year) => setCurrentIssue(year)}
          />
          <IssueList issues={CommonData[currentIssue] || {}} category={currentIssue} />
        </div>

        {/* Special Issues Section */}
        <div className="lg:w-[30%] w-full">
          <div className="bg-white/25 rounded-xl shadow-xl min-h-[370px]">
            <h1 className="text-black font-lora text-[18px] font-semibold text-center">
              SPECIAL ISSUES
            </h1>
            <YearButtons
              years={Object.keys(SpecialData).sort((a, b) => b - a)}
              onClick={(year) => setSpecialCurrentIssue(year)}
            />
            <IssueList
              issues={SpecialData[currentSpecialIssue] || {}}
              category={currentSpecialIssue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
