import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaMediumM } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto  min-[500px]:pt-96 min-[320px]:pt-70  p-2 sm:pt-12 lg:pt-2 flex justify-center items-center">
        <div>
          {/* <p className="uppercase text-sm tracking-widest text-gray-700"></p> */}
          <h1 className="py-4 text-gray-800">
            Hi, I&#39;m <span className="text-[#5651e5]">PRATIK</span>
          </h1>
          <h1 className="py-4 text-gray-800">A MERN Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            Full-stack developer with proven experience in building modern web
            applications using the MERN stack. Combining strong technical skills
            with a passion for creating intuitive user experiences, I’ve
            successfully delivered scalable solutions that drive business
            growth. Looking to bring my expertise in React, Node.js, and cloud
            technologies to a dynamic team where I can continue to grow while
            making meaningful contributions to impactful projects.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/pratik-mane-09s09/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/PratikMane09"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link to={"contact"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a href="https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonFill />
              </div>
            </a>
            <a href="https://medium.com/@Pratik_Mane_9">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaMediumM />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
