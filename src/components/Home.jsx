import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex flex-col justify-center items-center">
        <div className="w-full md:w-4/5 lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-gray-800">
            Hi, I&#39;m <span className="text-[#5651e5]">PRATIK</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2 text-gray-800">
            A MERN Developer
          </h1>
          <p className="py-4 text-gray-700 text-base sm:text-lg max-w-[90%] md:max-w-[80%] lg:max-w-[70%] m-auto">
            Full-stack developer with proven experience in building modern web
            applications using the MERN stack. Combining strong technical skills
            with a passion for creating intuitive user experiences, I've
            successfully delivered scalable solutions that drive business
            growth. Looking to bring my expertise in React, Node.js, and cloud
            technologies to a dynamic team where I can continue to grow while
            making meaningful contributions to impactful projects.
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 m-auto py-6">

              href="https://www.linkedin.com/in/pratik-mane-09s09/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-sm sm:text-base md:text-lg" />
              </div>
            </a>

              href="https://github.com/PratikMane09"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-sm sm:text-base md:text-lg" />
              </div>
            </a>
            <Link to="contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-sm sm:text-base md:text-lg" />
              </div>
            </Link>

              href="https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonFill className="text-sm sm:text-base md:text-lg" />
              </div>
            </a>

              href="https://medium.com/@Pratik_Mane_9"
              target="_blank"
              rel="noreferrer"
              aria-label="Medium Profile"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaMediumM className="text-sm sm:text-base md:text-lg" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
