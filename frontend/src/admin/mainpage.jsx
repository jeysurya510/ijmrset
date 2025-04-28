import { useState, useEffect } from 'react';
import Logo from '../assets/IJMRSET-Logo.png';
import AnimatedText from '../utils/Animationtext';
import CommonIssues from './commonissues';

export default function MainPage() {
  const [totalEntries, setTotalEntries] = useState(0);
  const [totalCommonEntries, setTotalCommonEntries] = useState(0);
  const [totalSpecialEntries, setTotalSpecialEntries] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/grouped");
        const data = await response.json();
  
        let total = 0;
        let specialCount = 0;
  
        Object.entries(data).forEach(([year, subcategories]) => {
          Object.entries(subcategories).forEach(([volume, papers]) => {
            total += papers.length;
  
            // Count special issues
            if (
              year.toLowerCase().includes("special") ||
              volume.toLowerCase().includes("special")
            ) {
              specialCount += papers.length;
            }
          });
        });
  
        // Common entries = total - special
        const commonCount = total - specialCount;
  
        // Update state
        setTotalEntries(total);
        setTotalSpecialEntries(specialCount);
        setTotalCommonEntries(commonCount);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-5 w-full">
      {/* Header Section */}
      <div className="min-h-[200px] flex flex-col lg:flex-row items-center justify-between">
        <img src={Logo} alt="IJMRSET Logo" className="h-[100px] lg:h-[120px]" />
        <div className="text-center mx-auto">
          <p className="lg:text-[34px] text-[18px] font-Libre_Baskerville leading-relaxed font-medium">
            International Journal of Multidisciplinary Research in <br />
            <span className="font-Libre_Baskerville italic">
              <AnimatedText text={'Science, Engineering, and Technology'} />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-5">
        {[
          { title: 'Total Entries', subtitle: '(Common+Special) Entries',count:totalEntries },
          { title: 'Total Common Entries',count:totalCommonEntries  },
          { title: 'Total Special Entries',count:totalSpecialEntries  },
        ].map((item, index) => (
          <div
            key={index}
            className="h-[150px] w-[300px] flex flex-col items-center p-5 rounded-lg bg-blue-600 text-white shadow-xl"
          >
            <h1 className="font-Inter font-medium text-xl">{item.title}</h1>
            {item.subtitle && <h1 className="font-Inter font-medium text-lg">{item.subtitle}</h1>}
            <p className='font-Inter text-3xl font-bold mt-auto'>{item.count}</p>
          </div>
        ))}
        <CommonIssues />
      </div>
    </div>
  );
}
