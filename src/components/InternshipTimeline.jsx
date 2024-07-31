import React from "react";
import { FaBriefcase, FaCalendarAlt, FaClock } from "react-icons/fa";

const InternshipTimeline = () => {
  return (
    <div
      name="experince"
      className="w-full min-h-screen p-2 pt-24 bg-gradient-to-b"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <div className="bg-white shadow-xl rounded-lg p-8 my-8">
          <h3 className="text-3xl font-bold text-sky-600 mb-6">
            Internship Experience
          </h3>
          <div className="relative border-l-4 border-sky-400 ml-3">
            <div className="mb-8 ml-6">
              <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <div className="flex items-center mb-1">
                <FaBriefcase className="text-sky-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Fullstack Developer – Intern
                </h3>
              </div>
              <div className="mb-2 text-sky-700 font-medium">
                Dossiefoyer Private Limited, Pune
              </div>
              <div className="mb-4 flex items-center text-gray-700">
                <FaCalendarAlt className="mr-2" />
                <time>Jun-2024 - Present</time>
              </div>
              <div className="mb-4 flex items-center text-gray-700">
                <FaClock className="mr-2" />
                <span>10:30AM to 7:30PM (Mon to Sat)</span>
              </div>
              <p className="mb-3 text-gray-800 font-medium">
                Key Responsibilities:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Frontend Development with React and React Native</li>
                <li>Backend Development using Node.js and Java</li>
                <li>API Design and Development</li>
                <li>Database Management (MongoDB, MySQL, PostgreSQL)</li>
                <li>Cloud Deployment (AWS, Azure, Google Cloud Platform)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipTimeline;
