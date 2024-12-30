import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import harsh from "../assets/harsh.jpg";
import vishva from "../assets/vishva.jpg";
import yagnik from "../assets/yagnik.jpg";
import vaibhavi from "../assets/vaibhavi.jpg";
import nill from "../assets/nill.jpg";
import mahek from "../assets/mahek.jpg";
import hiren from "../assets/hiren.jpg";

const interns = [
    {
      name: "Harsh Patel",
      role: "Graphic Designer",
      image: harsh,
      alt: "Image of harsh",
    },
    {
      name: "Vishva Kanani",
      role: "Web Devlopment",
      image: vishva,
      alt: "Image of vishva",
    },
    {
      name: "Yagnik Sadhu",
      role: "Web devlopment",
      image: yagnik,
      alt: "Image of yagnish",
    },
    {
      name: "Vaibhavi Chauhan",
      role: "Web developer",
      image: vaibhavi,
      alt: "Image of vaibhavi",
    },
    {
      name: "Neel patni",
      role: "Web developer",
      image: nill,
      alt: "Image of neel ",
    },
    {
      name: "Mahek soni",
      role: "Web developer",
      image: mahek,
      alt: "Image of mahek",
    },
    {
      name: "Hiren Patel",
      role: "Web Devloper",
      image: hiren,
      alt: "Image of hiren",
    },
  ];
  

const Star = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % interns.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? interns.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interns.length);
    };
  
    // Helper function to get the next 4 interns in a circular manner
    const getVisibleInterns = () => {
      return [
        interns[currentIndex % interns.length],
        interns[(currentIndex + 1) % interns.length],
        interns[(currentIndex + 2) % interns.length],
        interns[(currentIndex + 3) % interns.length],
        interns[(currentIndex + 4) % interns.length],
      ];
    };

  return (
    <section className="flex flex-col items-center py-12 bg-[#034067] relative overflow-hidden px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-[#2564eb] relative z-10 text-center">
          <span className="text-white">Our students are completing </span>{" "}
          internship
        </h1>
        <div className="h-1 w-24 md:w-96 mb-12 bg-[#2564eb] mx-auto rounded-full relative z-10"></div>

        <div className="relative w-full max-w-5xl z-20">
          <div className="flex justify-center items-center relative">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-20 relative">
              {getVisibleInterns().map((intern, index) => (
                <motion.div
                  key={intern.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className={`flex flex-col items-center transition-all duration-500 ease-in-out
                    ${
                      index === 0
                        ? "opacity-100 scale-100 z-10"
                        : index === 1
                        ? "opacity-75 scale-90 md:-translate-x-4 z-0"
                        : index === 2
                        ? "opacity-50 scale-80 md:-translate-x-8 z-0"
                        : index === 3
                        ? "opacity-25 scale-80 md:-translate-x-8 z-0"
                        : "opacity-25 scale-70 md:-translate-x-12 z-0"
                    }`}
                >
                  <div className="relative">
                    <img
                      src={intern.image}
                      alt={intern.alt}
                      className="rounded-full border-2 border-[#2564eb] 
                        w-16 h-16 md:w-24 md:h-24 object-cover 
                        transform transition-transform hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 font-semibold text-white text-center text-xs md:text-sm">
                    {intern.name}
                  </p>
                  <p className="text-blue-300 text-center text-xs md:text-sm">
                    {`-${intern.role}-`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Responsive Navigation Buttons */}
          <div className="absolute inset-y-0 flex items-center justify-between w-full">
            <motion.button
              onClick={prevSlide}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block bg-white/20 hover:bg-white/40 
                text-white rounded-full p-2 md:p-3 
                transform transition-all duration-300 
                hover:scale-110 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block bg-white/20 hover:bg-white/40 
                text-white rounded-full p-2 md:p-3 
                transform transition-all duration-300 
                hover:scale-110 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden mt-4 flex items-center justify-center space-x-2">
          <div className="h-2 w-2 bg-white/50 rounded-full"></div>
          <div className="h-2 w-2 bg-[#2564eb] rounded-full"></div>
          <div className="h-2 w-2 bg-white/50 rounded-full"></div>
        </div>
      </section>
  )
}

export default Star
