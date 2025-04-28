import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/IJMRSET-Logo.png';
import upload_gif from '../assets/upload.gif';
import Arrow from '../assets/RightArrow.png';
import Question_circle from '../assets/question-circle.svg';
import cross from '../assets/cross.svg';
import burger from '../assets/burger.svg';
import PDF from '../assets/SJIF_IJMRSET.pdf';

export default function NavBar({ NavColor, SubNavColor, Scroll }) {
  const [isSticky, setIsSticky] = useState(false);
  const [onMenu, setOnMenu] = useState(false);
  const [onNav, setOnNav] = useState('');

  // Function to handle scroll and toggle sticky class
  const handleScroll = () => {
    const stickyElement = document.getElementById(Scroll);
    if (stickyElement) {
      setIsSticky(window.scrollY >= stickyElement.offsetTop);
    }
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col gap-5 z-40 sticky top-0 transition-all duration-300 ease-in-out ${isSticky ? 'pt-0 mx-0' : 'pt-5 mx-5'}`}
      id="stickyNav"
    >
      <div className="relative">
        <div
          className={`${NavColor} px-5 flex justify-between items-center min-h-[50px] p-2 transition-all duration-300 ease-in-out relative ${isSticky ? '' : 'rounded-xl'}`}
          onMouseLeave={() => setOnNav('')}
        >
          <Link to="/" className="lg:w-[5%]">
            <img src={Logo} alt="Logo" className="lg:h-[60px] lg:w-[60px] h-[50px]" />
          </Link>

          <ul className="w-[65%] justify-between text-black font-lora text-[16px] font-semibold rounded-xl hidden lg:flex">
            <li
              onMouseEnter={() => setOnNav('About')}
              className="relative flex gap-2 items-center h-12"
            >
              About Us
              <img
                src={Arrow}
                alt="arrow"
                className={`h-3 mt-1 transition-all duration-300 ease-in-out ${onNav === 'About' ? 'rotate-180' : ''}`}
              />
              <div
                className={`${SubNavColor} absolute z-10 w-[150px] flex-col shadow-xl divide-y-2 rounded-md top-14 transition-all duration-300 ease-in-out ${onNav === 'About' ? 'flex' : 'hidden'}`}
              >
                <Link to="/vision-mission" className="text-center py-2">
                  Vision & Mission
                </Link>
                <Link to="/aim-scope" className="text-center py-2">
                  Aim & Scope
                </Link>
                <Link to="/peer-review" className="text-center py-2">
                  Peer Review
                </Link>
                <Link to="/conference-issue" className="text-center py-2">
                  Conference Issue
                </Link>
              </div>
            </li>
            <li
              onMouseEnter={() => setOnNav('EditorBoard')}
              className="relative flex gap-2 items-center h-12"
            >
              Editor Board
              <img
                src={Arrow}
                alt="arrow"
                className={`h-3 mt-1 transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'rotate-180' : ''}`}
              />
              <div
                className={`${SubNavColor} absolute z-10 w-[130px] flex-col shadow-xl divide-y-2 rounded-md top-14 transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'flex' : 'hidden'}`}
              >
                <Link to="/fellowship" className="text-center py-2">
                  Fellowship
                </Link>
                <Link to="/editor-desk" className="text-center py-2">
                  Editor Desk
                </Link>
                <Link to="/editor-board" className="text-center py-2">
                  Editor Board
                </Link>
              </div>
            </li>
            <li onMouseEnter={() => setOnNav('Impact Factor')} className="h-12 flex items-center">
              <a href={PDF}>Impact Factor</a>
            </li>
            <li onMouseEnter={() => setOnNav('Authors')} className="h-12 flex items-center">
              <Link to="/author">Author</Link>
            </li>
            <li onMouseEnter={() => setOnNav('topics')} className="h-12 flex items-center">
              <Link to="/topics">Topics</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Issues')} className="h-12 flex items-center">
              <Link to="/issues">Issues</Link>
            </li>
            <li onMouseEnter={() => setOnNav('policies')} className="h-12 flex items-center">
              <Link to="/policies">Policies</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
              <Link to="/faq" className="flex gap-2 justify-center items-center">
                <img src={Question_circle} alt="Question mark" className="h-6" />
                <p>FAQ</p>
              </Link>
            </li>
          </ul>
          <ul className="w-[20%] justify-around text-white font-lora text-[16px] hidden lg:flex font-semibold">
            <a
              href="mailto:ijmrset@gmail.com"
              className="bg-[#250a50] p-3 rounded-xl hidden gap-2 lg:flex"
            >
              <img src={upload_gif} alt="submit" className="w-[30px]" />
              <button type="button">Submit Paper via E-mail</button>
            </a>
          </ul>
          <div className="lg:hidden block">
            <div className={`${!onMenu ? 'block' : 'hidden'}`} onClick={() => setOnMenu(true)}>
              <img src={burger} alt="burger" className="w-5" />
            </div>
            <div
              className={`${onMenu ? 'block' : 'hidden'} transition-all border-2 border-black p-2`}
              onClick={() => setOnMenu(false)}
            >
              <img src={cross} alt="cross" className="w-3" />
            </div>
          </div>
        </div>
        <div
          className={`${NavColor} ${onMenu ? 'w-full min-h-fit pl-[10%] top-[70px] p-3 z-50 absolute' : 'max-h-0 hidden'} transition-all overflow-hidden`}
        >
          <ul className="w-full justify-around text-black  font-lora text-[16px] font-semibold rounded-xl flex-col flex lg:hidden">
            <li onMouseEnter={() => setOnNav('Home')} className="h-12 flex items-center">
              <Link to="/">Home</Link>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-2 items-center h-12" onMouseEnter={() => setOnNav('About')}>
                About US
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`h-3 mt-1 transition-all duration-300 ease-in-out ${onNav === 'About' ? 'rotate-180' : ''}`}
                />
              </div>
              <div
                className={`w-[130px] flex-col   transition-all duration-300 ease-in-out ${onNav === 'About' ? 'flex' : 'hidden'}`}
              >
                <Link to="/Vision-mission" className="text-center bg-transparent py-2">
                  Vison & Misson
                </Link>
                <Link to="/aim-scope" className="text-center bg-transparent py-2">
                  Aim & Scope
                </Link>
                <Link to="/peer-review" className="text-center bg-transparent py-2">
                  Peer Review
                </Link>
                <Link to="/conference-issue" className="text-center bg-transparent py-2">
                  Conference Issue
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <div
                className="flex gap-2 items-center h-12"
                onMouseEnter={() => setOnNav('EditorBoard')}
              >
                Editor Board
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`h-3 mt-1 transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'rotate-180' : ''}`}
                />
              </div>
              <div
                className={`w-[130px] flex-col   transition-all duration-300 ease-in-out ${onNav === 'EditorBoard' ? 'flex' : 'hidden'}`}
              >
                <Link to="/fellowship" className="text-center bg-transparent py-2">
                  Fellowship
                </Link>
                <Link to="/editor-desk" className="text-center bg-transparent py-2">
                  Editor Desk
                </Link>
                <Link to="/editor-board" className="text-center bg-transparent py-2">
                  Editor Board
                </Link>
              </div>
            </li>
            <li onMouseEnter={() => setOnNav('Impact Factor')} className="h-12 flex items-center">
              <a href={PDF}>Impact Factor</a>
            </li>
            <li onMouseEnter={() => setOnNav('Authors')} className="h-12 flex items-center">
              <Link to="/author">Author</Link>
            </li>
            <li onMouseEnter={() => setOnNav('topics')} className="h-12 flex items-center">
              <Link to="/topics">Topics</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Issues')} className="h-12 flex items-center">
              <Link to="/issues">Issues</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
              <Link to="/policies">Policies</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
              <Link to="/contact">Contact</Link>
            </li>
            <li onMouseEnter={() => setOnNav('Contact')} className="h-12 flex items-center">
              <Link to="/faq" className="flex gap-2 justify-center items-center">
                <img src={Question_circle} alt="Question mark" className="h-6" />
                <p>FAQ</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
