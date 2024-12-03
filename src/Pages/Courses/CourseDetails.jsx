import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Frontend Course Topics
import HTMLBasics from "./FrontendCourse/HtmlCourse/HTMLBasics";
import CSSFundamentals from "./FrontendCourse/CssCourse/CSSFundamentals";
import JavaScriptEssentials from "./FrontendCourse/JavaScriptCourse/JavaScriptEssentials";

// Backend Course Topics
import NodeJSBasics from "./BackendCourse/NodeJSCourse/NodeJSBasics";
import ExpressJSBasics from "./BackendCourse/ExpressJSCourse/ExpressJSBasics";
import MongoDBBasics from "./BackendCourse/MongoDBCourse/MongoDBBasics";

// // Full-Stack Course Topics
// import FullStackOverview from "./FullstackCourse/FullStackOverview";
// import MERNStackBasics from "./FullstackCourse/MERNStackBasics";

// // UI/UX Course Topics
// import UIUXPrinciples from "./UIUXCourse/UIUXPrinciples";
// import FigmaBasics from "./UIUXCourse/FigmaBasics";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [selectedTopic, setSelectedTopic] = useState("Introduction");

  const coursesData = {
    frontend: {
      title: "Frontend Development",
      topics: [
        "Introduction",
        "HTML Basics",
        "CSS Fundamentals",
        "JavaScript Essentials",
      ],
    },
    backend: {
      title: "Backend Development",
      topics: [
        "Introduction",
        "Node.js Basics",
        "Express.js Basics",
        "MongoDB Basics",
      ],
    },
    // fullstack: {
    //   title: "Full-Stack Development",
    //   topics: ["Introduction", "Full-Stack Overview", "MERN Stack Basics"],
    // },
    // uiux: {
    //   title: "UI/UX Design",
    //   topics: ["Introduction", "UI/UX Principles", "Figma Basics"],
    // },
  };

  const topicComponents = {
    "HTML Basics": <HTMLBasics />,
    "CSS Fundamentals": <CSSFundamentals />,
    "JavaScript Essentials": <JavaScriptEssentials />,
    "Node.js Basics": <NodeJSBasics />,
    "Express.js Basics": <ExpressJSBasics />,
    "MongoDB Basics": <MongoDBBasics />,
    // "Full-Stack Overview": <FullStackOverview />,
    // "MERN Stack Basics": <MERNStackBasics />,
    // "UI/UX Principles": <UIUXPrinciples />,
    // "Figma Basics": <FigmaBasics />,
  };

  const course = coursesData[courseId] || { title: "Course Not Found", topics: [] };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">{course.title}</h2>
        <ul className="space-y-2">
          {course.topics.map((topic) => (
            <li
              key={topic}
              className={`p-2 cursor-pointer rounded ${
                selectedTopic === topic
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selectedTopic === "Introduction" ? (
          <div>
            <h2 className="text-2xl font-semibold">Welcome to {course.title}</h2>
            <p className="mt-2 text-gray-700">
              Select a topic from the sidebar to start learning.
            </p>
          </div>
        ) : (
          topicComponents[selectedTopic] || (
            <p className="text-gray-600">Content not found for this topic.</p>
          )
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
