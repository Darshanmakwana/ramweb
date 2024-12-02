import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("introduction");

  const courseData = {
    frontend: {
      title: "Frontend Development",
      topics: {
        introduction: "This is an introduction to Frontend Development.",
        html: "HTML is the standard markup language for creating web pages.",
        css: "CSS is used for styling HTML elements.",
        javascript: "JavaScript is used for creating dynamic web pages.",
      },
    },
    backend: {
      title: "Backend Development",
      topics: {
        introduction: "This is an introduction to Backend Development.",
        nodejs:
          "Node.js is a runtime environment for building server-side applications.",
        express:
          "Express is a minimal and flexible Node.js web application framework.",
        database:
          "Databases like MongoDB are used to store data for web applications.",
      },
    },
    fullstack: {
      title: "Full-Stack Development",
      topics: {
        introduction:
          "Full-Stack Development includes both frontend and backend technologies.",
        html: "Learn the basics of HTML.",
        css: "Learn how to style your web pages with CSS.",
        react: "React is a frontend library for building user interfaces.",
        nodejs: "Node.js allows you to use JavaScript on the server.",
        express: "Express helps build web applications quickly.",
      },
    },
    uiux: {
      title: "UI/UX Design",
      topics: {
        introduction:
          "UI/UX Design focuses on the user experience and user interface.",
        design_principles:
          "Design principles include things like layout, contrast, and spacing.",
        figma: "Figma is a popular tool for designing user interfaces.",
      },
    },
  };

  const course = courseData[courseId];
  if (!course) {
    return <p className="text-center mt-10">Course not found.</p>;
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-100 p-4 shadow-lg">
        <h2 className="text-xl font-semibold text-center text-black mb-4">
          {course.title}
        </h2>
        <ul className="space-y-1">
          {Object.keys(course.topics).map((topicKey) => (
            <li
              key={topicKey}
              className={`cursor-pointer p-2 hover:bg-blue-200 rounded-lg ${
                selectedTopic === topicKey
                  ? "bg-blue-500 text-white"
                  : "text-black"
              }`}
              onClick={() => setSelectedTopic(topicKey)}
            >
              {topicKey.charAt(0).toUpperCase() + topicKey.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">
          {selectedTopic.charAt(0).toUpperCase() + selectedTopic.slice(1)}
        </h3>
        <p className="text-gray-700">{course.topics[selectedTopic]}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
