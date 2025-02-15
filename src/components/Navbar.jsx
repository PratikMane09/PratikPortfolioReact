import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experince",
      label: "Experience",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "portfolio",
    },
    {
      id: 7,
      link: "contact",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/pratik-mane-09s09/",
      label: "LinkedIn Profile",
    },
    {
      id: 2,
      icon: <FaGithub />,
      href: "https://github.com/PratikMane09",
      label: "GitHub Profile",
    },
    {
      id: 3,
      icon: <BsFillPersonFill />,
      href: "https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing",
      label: "View Resume",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 md:px-8 fixed z-50 transition-all duration-300 ${
        scrollBackground
          ? "bg-white shadow-lg shadow-gray-200"
          : "bg-white/95 shadow-md shadow-gray-200/50"
      }`}
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-signature ml-2 text-[#5651e5] relative group">
          Pratik
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5651e5] group-hover:w-full transition-all duration-300" />
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex mr-6">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-600 hover:text-[#5651e5] relative group transition-all duration-200"
            >
              <Link to={link} smooth duration={500} className="py-2 block">
                {label || link}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5651e5] group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* Social Icons for Desktop */}
        <div className="flex space-x-3 pl-6 border-l border-gray-200">
          {socialLinks.map(({ id, icon, href, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-[#5651e5] transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-20 text-gray-500 hover:text-[#5651e5] transition-colors md:hidden p-2 rounded-full hover:bg-gray-100"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setNav(false)}
        >
          <div
            className="fixed right-0 top-0 w-3/4 h-full bg-white shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#5651e5] mb-6">
                  Pratik Mane
                </h2>
                <div className="flex space-x-4 mb-8">
                  {socialLinks.map(({ id, icon, href, label }) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-500 hover:text-[#5651e5] transition-colors duration-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <ul className="flex-1 space-y-4">
                {links.map(({ id, link, label }) => (
                  <li
                    key={id}
                    className="cursor-pointer capitalize text-lg text-gray-700 hover:text-[#5651e5] transition-colors duration-200"
                  >
                    <Link
                      onClick={() => setNav(false)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {label || link}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mt-auto pt-8 border-t border-gray-100">
                &copy; {new Date().getFullYear()} Pratik Mane
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
