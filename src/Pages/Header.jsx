import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import userImg from "../assets/avatar-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  return (
    <>
      <div className="shadow-md w-full main_container bg-[#F0F8FF]" ref={headerRef}>
        <div className="flex justify-between  items-center  px-7 md:px-9">
        
          <div className="flex items-center sm:text-lg md:text-2xl">
            <img src={logo} alt="Logo" className="h-[3rem] w-[3rem] " />
            <p>AlumniNexus</p>
          </div>

     
          <div className="w-[100px] flex md:mr-40">
          <h1 className=" text-2xl md:text-7xl  font-bold justify-center text-center text-[#c2410c] drop-shadow-md hover:drop-shadow-x transition-all duration-300 ease-in-out transform hover:scale-110 font-serif ">VVIT</h1>
          <div className=" hidden md:block  md:space-y-[6px] md:mx-1 md:h-[20px] md:pt-1">
            <h5 className="h-[8px] font-serif drop-shadow-md">vasireddy</h5>
            <h5 className="h-[8px] font-serif drop-shadow-md" >venkatadri</h5>
            <h5 className="h-[8px] font-serif drop-shadow-md">institute of</h5>
            <h5 className="h-[8px] font-serif drop-shadow-md">technology</h5>
          </div>
          </div>

          <div className="md:hidden ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-8 h-8 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

 
          <div className="hidden md:flex items-center gap-4">
            <div>
              <Link to="/body">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="User" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button className="bg-black py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-green-600 hover:text-black">
                Login
              </button>
            </Link>
          </div>
        </div>

 
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col text-lg text-white px-6 py-4 space-y-4 bg-black">
            <Link to="/"><li>Home</li></Link>
            <Link to='/aboutpage'><li>About</li></Link>
            <Link to='/donations'><li>Donations</li></Link>
            <Link to='/mentor'><li>Mentors</li></Link>
            <Link to="/learning"><li>Learning Path</li></Link>
            <Link to='/jobs'><li>Jobs</li></Link>
            <Link to='/events'><li>Events</li></Link>
            <Link to='newsMain'><li>News</li></Link>
            <li>IdeaRoom</li>
            <li>Contact</li>
            <Link to="/login">
              <button className="bg-black py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] mt-4">
                Login
              </button>
            </Link>
          </ul>
        </div>

  
        <div className="hidden list-none md:flex justify-between mx-6 my-2 p-4 text-lg">
        <Link to="/">
              <li className="relative no-underline cursor-pointer group">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full "></span>
              </li>
            </Link>

            <Link to='/aboutpage'>
            <li className="relative no-underline cursor-pointer group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            </Link>

            <Link to='/donations'>
            <li className="relative no-underline cursor-pointer group">
              Donations
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            </Link>
          <Link to='/mentor'>
          
          <li className="relative no-underline cursor-pointer group">
              Mentors
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li></Link>

            <Link to="/learning">
              <li className="relative no-underline cursor-pointer group">
                Learning Path
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>

            <Link to='/jobs'>
            <li className="relative no-underline cursor-pointer group">
              Jobs
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            </Link>

            <Link to='/events'>
            <li className="relative no-underline cursor-pointer group">
              Events
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li></Link>

           <Link to='newsMain'>
           <li className="relative no-underline cursor-pointer group">
              News
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
           </Link>

            <li className="relative no-underline cursor-pointer group">
              IdeaRoom
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>

           <Link to='/contact'>
           <li className="relative no-underline cursor-pointer group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
           </Link>

        </div>
      </div>
    </>
  );
};

export default Header;
