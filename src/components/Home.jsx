import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="relative w-full min-h-screen flex items-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1240px] px-4 py-8 md:py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/5 lg:w-3/4 space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                  Hi, I&#39;m <span className="text-[#5651e5]">PRATIK</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  A MERN Developer
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
                Full-stack developer with proven experience in building modern web
                applications using the MERN stack. Combining strong technical skills
                with a passion for creating intuitive user experiences, I've
                successfully delivered scalable solutions that drive business
                growth. Looking to bring my expertise in React, Node.js, and cloud
                technologies to a dynamic team where I can continue to grow while
                making meaningful contributions to impactful projects.
              </p>

              <div className="flex items-center justify-center gap-4 md:gap-6 pt-6">
                <SocialLink
                  href="https://www.linkedin.com/in/pratik-mane-09s09/"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </SocialLink>
                
                <SocialLink
                  href="https://github.com/PratikMane09"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </SocialLink>
                
                <Link to="contact">
                  <div className="social-icon">
                    <AiOutlineMail />
                  </div>
                </Link>
                
                <SocialLink
                  href="https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing"
                  aria-label="Resume"
                >
                  <BsFillPersonFill />
                </SocialLink>
                
                <SocialLink
                  href="https://medium.com/@Pratik_Mane_9"
                  aria-label="Medium Profile"
                >
                  <FaMediumM />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .social-icon {
          @apply rounded-full shadow-lg shadow-gray-400 p-3 sm:p-4 cursor-pointer 
                 hover:scale-110 ease-in duration-300 flex items-center justify-center;
        }
        .social-icon > svg {
          @apply text-base sm:text-lg md:text-xl;
        }
      `}</style>
    </div>
  );
};

// Reusable component for social links
const SocialLink = ({ href, children, ...props }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    <div className="social-icon">
      {children}
    </div>
  </a>
);

export default Home;
