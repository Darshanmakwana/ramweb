import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import OurCourses from "./Pages/OurCourses";
import CourseDetails from "./Components/CourseDetails";
import Contect from "./Pages/Contect";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<OurCourses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </>
  );
};

export default App;
