import React from "react";
import html from "../assets/html.png.png";
import css from "../assets/css.png";
import js from "../assets/js.svg";
import react from "../assets/logo192.png";
import tailwind from "../assets/icons8-tailwind-css.svg";
import node from "../assets/node.png";
import redux from "../assets/icons8-redux.svg";
import git from "../assets/icons8-github.svg";
import md from "../assets/icons8-mongodb.svg";
import java from "../assets/Java.png";
import supa from "../assets/supabase-seeklogo.svg";
import sql from "../assets/icons8-database-administrator-94 (1).png";
import nextjs from "../assets/next.js.svg";
import jenkins from "../assets/jenkins.svg";
import docker from "../assets/docker.jpg";
const SkillCard = ({ skill }) => (
  <div className="p-6 bg-white shadow-md rounded-xl hover:scale-105 ease-in duration-300">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <img
          src={skill.logo}
          width={64}
          height={64}
          alt={`${skill.name}_logo`}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3>{skill.name}</h3>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "Next.js", logo: nextjs },
    { name: "React", logo: react },
    { name: "TailwindCSS", logo: tailwind },
    { name: "Node JS", logo: node },
    { name: "Java", logo: java },
    { name: "SQL", logo: sql },
    { name: "Redux", logo: redux },
    { name: "Github", logo: git },
    { name: "Jenkins", logo: jenkins },
    { name: "Docker", logo: docker },
    { name: "SupaBase", logo: supa },
    { name: "MongoDB", logo: md },
  ];

  return (
    <div name="skills" className="w-full min-h-screen p-2  bg-gradient-to-b">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl p-2 pt-24 tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
