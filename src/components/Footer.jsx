import React from "react";
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      icon: <FaLinkedinIn className="text-xl" />,
      href: "https://www.linkedin.com/in/pratik-mane-09s09/",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/PratikMane09",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <AiOutlineMail className="text-xl" />,
      link: "contact",
      isScroll: true,
      label: "Email",
    },
    {
      id: 4,
      icon: <BsFillPersonFill className="text-xl" />,
      href: "https://drive.google.com/file/d/1aaIQr4qsqkjHx-OVz4cd11LuXtz3TWpv/view?usp=sharing",
      label: "Resume",
    },
    {
      id: 5,
      icon: <FaMediumM className="text-xl" />,
      href: "https://medium.com/@Pratik_Mane_9",
      label: "Medium",
    },
  ];

  return (
    <footer className="bg-white shadow-lg shadow-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-signature">Pratik Mane</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              A passionate developer focused on creating interactive and
              user-friendly web experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ id, icon, href, link, isScroll, label }) =>
                isScroll ? (
                  <Link
                    key={id}
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-500 hover:text-[#5651e5] transition-colors duration-300"
                    aria-label={label}
                  >
                    {icon}
                  </Link>
                ) : (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#5651e5] transition-colors duration-300"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-600 hover:text-[#5651e5] capitalize transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto: pratik09092001@gmail.com"
                  className="hover:text-[#5651e5] transition-colors duration-300"
                >
                  pratik09092001@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <span>Available for remote opportunities</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌍</span>
                <span>Based in India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Pratik Mane. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
