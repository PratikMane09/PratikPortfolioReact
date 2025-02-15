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

    // Prevent body scroll when mobile menu is open
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

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
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/pratik-mane-09s09/",
      label: "LinkedIn Profile",
    },
    {
      id: 2,
      icon: <FaGithub size={20} />,
      href: "https://github.com/PratikMane09",
      label: "GitHub Profile",
    },
    {
      id: 3,
      icon: <BsFillPersonFill size={20} />,
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

      {/* Mobile Menu Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden transition-opacity duration-300"
          onClick={() => setNav(false)}
        >
          {/* Mobile Menu Content */}
          <div
            className="fixed right-0 top-0 w-3/4 h-full bg-white shadow-2xl transition-transform duration-300 transform translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Mobile Header */}
              <div className="px-6 py-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-[#5651e5] mb-4">
                  Pratik Mane
                </h2>
                <p className="text-gray-600 text-sm">
                  Full Stack Web Developer 
                </p>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="px-6 py-6">
                <ul className="space-y-6">
                  {links.map(({ id, link, label }) => (
                    <li
                      key={id}
                      className="block"
                    >
                      <Link
                        onClick={() => setNav(false)}
                        to={link}
                        smooth
                        duration={500}
                        className="text-gray-700 hover:text-[#5651e5] text-lg font-medium capitalize block transition-colors duration-200"
                      >
                        {label || link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Social Links */}
              <div className="mt-auto border-t border-gray-100 px-6 py-6">
                <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                  Connect with me
                </h3>
                <div className="flex space-x-5">
                  {socialLinks.map(({ id, icon, href, label }) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-500 hover:text-[#5651e5] transition-colors duration-300 p-2"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  &copy; {new Date().getFullYear()} Pratik Mane
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
