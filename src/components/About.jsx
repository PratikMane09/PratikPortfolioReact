import React from "react";
import { Link } from "react-scroll";
import pratik from "../assets/pratik.jpg";

const About = () => {
  return (
    <div name="about" className="max-w-[1240px] mx-auto px-2 py-16 md:h-screen">
      {" "}
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {" "}
        <div className="col-span-2">
          {" "}
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {" "}
            About{" "}
          </p>{" "}
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700">Full Stack MERN Developer</p>
          <p className="py-2 text-gray-700">
            I am a <span className="text-[#5651e5]">Full Stack Developer</span>{" "}
            with a strong foundation in modern web development. My journey began
            with a B.Tech. in Electronics and Telecommunication (8.54 CGPA),
            where I developed a solid analytical mindset and problem-solving
            skills. Despite my background in electronics, my passion for
            creating innovative web solutions led me to pursue a career in
            software development.
          </p>
          <p className="py-2 text-gray-700">
            Currently serving as an Associate Software Development Engineer at
            Dossiefoyer Private Limited, I've had the opportunity to work on
            challenging projects that have significantly improved my technical
            capabilities. My role involves developing and optimizing web
            applications, where I've successfully improved application
            performance and user experience. The dynamic environment has allowed
            me to grow both as a developer and a team player, contributing to
            projects that have made real impact.
          </p>
          <p className="py-2 text-gray-700">
            My journey into web development started in 2023, where I immersed
            myself in learning modern development practices. What began as
            curiosity quickly evolved into passion as I discovered the creative
            possibilities in building interactive and efficient web
            applications. Through hands-on experience and continuous learning,
            I've developed a comprehensive understanding of full-stack
            development, always staying current with the latest industry trends
            and best practices.
          </p>
          <Link to={"portfolio"} className="inline-block">
            <p className="py-2 text-gray-700 underline cursor-pointer hover:text-[#5651e5] transition-colors">
              View my portfolio projects →
            </p>
          </Link>
        </div>
        <div className="w-full h-full m-auto rounded-xl flex items-center justify-center p-4                      hover:scale-105 ease-in duration-300">
          {" "}
          <img
            className="rounded-xl"
            src={pratik}
            width="700"
            height="800"
            style={{ objectFit: "cover" }}
            alt="pratik_photo"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default About;
