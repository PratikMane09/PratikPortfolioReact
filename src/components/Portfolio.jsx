import React from "react";
import fast from "../assets/portfolio/pizza.png";
import work from "../assets/portfolio/workout.png";
import eat from "../assets/portfolio/eatsplit.png";
import World from "../assets/portfolio/worldwise.png";

import gps from "../assets/portfolio/gpss.png";
import port from "../assets/portfolio/port.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fast,
      demoLink: "https://fastpizza-reactjs.netlify.app/",
      demoCode: "https://github.com/PratikMane09/FastReactPizza",
    },
    {
      id: 2,
      src: World,
      demoLink: "https://worldwissee-reactjs.netlify.app/",
      demoCode: "https://github.com/PratikMane09/Worldwise",
    },
    {
      id: 3,
      src: eat,
      demoLink: "https://eatspilt-reactjs.netlify.app/",
      demoCode: "https://github.com/PratikMane09/eatsplitReact",
    },
    {
      id: 4,
      src: port,
      demoLink: "/home",
      demoCode: "https://github.com/PratikMane09/PratikPortfolioReact",
    },
    {
      id: 5,
      src: work,
      demoLink: "https://workout-time.vercel.app/",
      demoCode: "https://github.com/PratikMane09/WorkoutTime",
    },
    {
      id: 6,
      src: gps,
      demoLink:
        "https://medium.com/@Pratik_Mane_9/never-lose-track-of-your-stuff-again-building-a-real-time-work-tracking-system-final-year-project-f3cf4ad0c4df",
      demoCode:
        "https://medium.com/@Pratik_Mane_9/never-lose-track-of-your-stuff-again-building-a-real-time-work-tracking-system-final-year-project-f3cf4ad0c4df",
    },
  ];

  const handleDemoButtonClick = (demoLink) => {
    window.location.href = demoLink;
  };
  const handleCodeButtonClick = (demoCode) => {
    window.location.href = demoCode;
  };

  return (
    <div
      name="portfolio"
      className="max-w-[1240px] mx-auto px-2 py-16 md:h-screen"
    >
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, demoCode }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-400"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(demoCode)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-400"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
