import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa"; // Import React Icons
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const TechStackOverview = () => {
  // Define tech stack with corresponding icons
  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React JS", icon: <FaReact className="text-blue-400" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ];

  const totalItems = techStack.length;

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center h-auto md:h-[600px] w-full overflow-hidden p-6 md:p-8 rounded-md">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center h-auto md:h-full w-full md:w-1/2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#2564eb] animate-bounce">
          CODECRAFT <br />
          <span className="text-[#ff760ef5]">UTILITIES</span>
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center h-auto md:h-full w-full md:w-1/2">
        <div className="relative flex items-center justify-center w-full h-[300px] md:h-full">
          {/* Outer Dotted Circle */}
          <div className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-transparent border-4 border-dotted border-[#034067] rounded-full flex items-center justify-center shadow-lg">
            {/* Inner Circle with TechStack */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-[#034067] rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-[#ff760ef5] rounded-full flex items-center justify-center shadow-md">
                {/* TechStack Text */}
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl text-center font-semibold mt-2 sm:mt-0">
                  TechStack
                </span>
              </div>
            </div>
          </div>

          {/* Orbiting Icons */}
          {techStack.map((tech, index) => {
            const animationDuration = totalItems * 1; // Duration to complete all rotations
            const delay = index; // Delay each icon based on its index

            return (
              <div
                className="orbiting-text absolute"
                key={index}
                style={{
                  animation: `orbit ${animationDuration}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                <span className="flex flex-col items-center text-xs sm:text-sm md:text-lg lg:text-xl font-medium mt-2 sm:mt-0 md:mt-0">
                  {tech.icon} {/* Render the icon */}
                  <span className="mt-1">{tech.name}</span> {/* Optional name */}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackOverview;
