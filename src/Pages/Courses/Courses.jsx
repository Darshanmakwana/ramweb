import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaServer, FaLayerGroup, FaPencilRuler } from "react-icons/fa";
import Star from "../../Components/Star";
import Colleges from "../../Components/Colleges";


const Courses = () => {
  const courses = [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Learn HTML, CSS, JavaScript, and React.",
      icon: <FaCode className="text-blue-500 text-4xl" />,
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Master Node.js, Express, and databases.",
      icon: <FaServer className="text-green-500 text-4xl" />,
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "Become proficient in MERN stack.",
      icon: <FaLayerGroup className="text-purple-500 text-4xl" />,
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Understand design principles and Figma.",
      icon: <FaPencilRuler className="text-orange-500 text-4xl" />,
    },
  ];

  return (
    <section>
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="flex items-center justify-center">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl p-8">
          Explore Our Courses
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-full sm:w-64 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">{course.icon}</div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2 text-center">
              {course.title}
            </h2>
            <p className="text-gray-600 text-center">{course.description}</p>
            <div className="flex justify-center mt-4">
              <Link to={`/courses/${course.id}`}>
                <div className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                  Start Learning
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  <Star/>
  
  <Colleges/>
    </section>
  );
};

export default Courses;
