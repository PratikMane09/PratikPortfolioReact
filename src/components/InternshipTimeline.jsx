import React from "react";
import { Card, CardContent } from "@mui/material";
import { Briefcase, Calendar, Clock, ChevronRight } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Associate Software Development Engineer",
      company: "Dossiefoyer Private Limited",
      location: "Pune, India",
      period: "Dec 2024 - Present",
      achievements: {
        "Frontend Development Excellence": [
          "Developed high-performance web applications using Next.js, achieving 25% faster page load times",
          "Implemented SSR and SSG, improving SEO scores by 35%",
          "Architected responsive React components, resulting in 30% improvement in user engagement",
          "Engineered reusable components with Redux for state management",
          "Optimized API integration patterns, achieving 40% reduction in latency",
        ],
        "Backend Infrastructure Innovation": [
          "Designed and deployed RESTful APIs using Node.js",
          "Implemented RBAC system for enhanced security",
          "Orchestrated MongoDB architecture with 50% faster query performance",
          "Developed CI/CD pipelines using Jenkins and Docker",
          "Implemented JWT-based authentication protocols",
        ],
        "Technical Leadership": [
          "Led cross-functional team of 5 developers, delivering projects 15% ahead of schedule",
          "Pioneered microservices architecture, improving scalability by 40%",
          "Established coding standards, reducing onboarding time by 50%",
          "Conducted bi-weekly code reviews and mentoring sessions",
        ],
      },
    },
    {
      title: "Fullstack Developer Intern",
      company: "Dossiefoyer Private Limited",
      location: "Pune, India",
      period: "Jun 2024 - Dec 2024",
      schedule: "10:30 AM to 7:30 PM (Mon to Sat)",
      achievements: {
        "Technical Achievements": [
          "Built and optimized Next.js pages and components",
          "Developed responsive React components",
          "Integrated RESTful APIs using Node.js",
          "Collaborated on MongoDB database design",
          "Implemented automated testing with 85% coverage",
        ],
        "Project Contributions": [
          "Assisted in deployment automation, reducing manual efforts by 40%",
          "Contributed to documentation and codebase maintenance",
          "Participated in daily stand-ups and sprint planning",
        ],
      },
    },
  ];

  return (
    <div name="experince" className="w-full min-h-screen p-2 bg-gradient-to-b">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl p-2 pt-24 tracking-widest uppercase text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">Where I've Worked</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-[#5651e5]">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-[#5651e5]" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                </div>

                <div className="ml-7 space-y-2 mb-4">
                  <div className="text-lg font-medium text-[#5651e5]">
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.schedule && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{exp.schedule}</span>
                    </div>
                  )}
                </div>

                <div className="ml-7 space-y-6">
                  {Object.entries(exp.achievements).map(
                    ([category, items], idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {category}
                        </h4>
                        <ul className="space-y-2">
                          {items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2"
                            >
                              <ChevronRight className="w-4 h-4 mt-1 text-[#5651e5] flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
