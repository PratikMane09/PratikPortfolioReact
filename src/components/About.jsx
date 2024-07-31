import React from "react";
import { Link } from "react-scroll";
import pratik from "../assets/pratik.jpg";
const About = () => {
  return (
    <div name="about" className="max-w-[1240px] mx-auto px-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700">MERN Developer</p>
          <p className="py-2 text-gray-700">
            I am a<span className="text-[#5651e5]"> MERN Developer </span>who
            loves working on development projects. Although I studied B.Tech. in
            Electronics and Telecommunication (ENTC) for my undergraduate
            degree, earning an 8.54 CGPA, I have always been passionate about
            technology. In 2023, I started learning full stack web development,
            beginning with the basics.
          </p>
          <p className="py-2 text-gray-700">
            Inspired by my love for programming, I started exploring web
            development after seeing its potential. JavaScript was my first
            step, and I soon found a passion for building interactive websites.
            I am skilled in programming languages like C, Java, React.js,
            Node.js, Express.js, MongoDB, and SQL. Every day, I face new
            challenges that help me learn more, and I am excited about future
            opportunities. I am open to full-time jobs, internships, or projects
            to show my skills further.
          </p>
          <Link to={"portfolio"}>
            <p className="py-2 text-gray-700 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div
          className="w-full h-full m-auto shadow-lg shadow-gray-300 
                    rounded-xl flex items-center justify-center p-4 
                    hover:scale-105 ease-in duration-300"
        >
          <img
            className="rounded-xl"
            src={pratik}
            width="700"
            height="800"
            style={{ objectFit: "cover" }}
            alt="pratik_photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
