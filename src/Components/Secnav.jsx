import React, { useState } from "react";

const Secnav = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const categories = [
    { name: "Frontend", items: ["React", "Vue", "Angular"] },
    { name: "Backend", items: ["Node.js", "Django", "Flask"] },
    { name: "Python", items: ["Pandas", "NumPy", "SciPy"] },
    { name: "Data Analysis", items: ["Excel", "Tableau", "Power BI"] },
    { name: "App Development", items: ["React Native", "Flutter", "Swift"] },
    { name: "Tailwind css", items: ["Basics", "Components", "Utilities"] },
    { name: "UI/UX", items: ["Figma", "Sketch", "Adobe XD"] },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenCategory(index)}
              onMouseLeave={() => setOpenCategory(null)}
              onClick={() => setOpenCategory(openCategory === index ? null : index)}
            >
              <button
                className="w-full md:w-auto text-left md:text-center 
                           px-4 py-2 rounded-lg 
                           bg-white/80 hover:bg-blue-100 
                           text-gray-800 font-semibold 
                           flex items-center justify-between 
                           transition duration-300 ease-in-out 
                           transform hover:scale-105 
                           shadow-md hover:shadow-lg"
              >
                {category.name}
                <svg
                  className={`ml-2 h-5 w-5 transform transition-transform duration-300 
                              ${openCategory === index ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute z-20 left-0 mt-2 w-full  
                            bg-white rounded-lg shadow-xl 
                            transition-all duration-300 ease-in-out 
                            ${
                              openCategory === index
                                ? "opacity-100 scale-100 visible"
                                : "opacity-0 scale-95 invisible"
                            }`}
              >
                {category.items.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-4 py-2 
                               text-gray-700 hover:bg-blue-50 
                               hover:text-blue-600 
                               transition duration-200 
                               first:rounded-t-lg 
                               last:rounded-b-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Secnav;
