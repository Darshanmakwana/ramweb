import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Courses from "./Pages/Courses/Courses";
import CourseDetails from "./Pages/Courses/CourseDetails";
import Contect from "./Pages/Contect";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import FloatingContactoIcons from "./Components/FloatingContactoIcons";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FloatingContactoIcons/>
      <Footer/>
    </>
  );
};

export default App;
