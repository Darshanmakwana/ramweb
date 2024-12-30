import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpeg';
import about4 from '../assets/about4.jpeg';
import about5 from '../assets/about5.jpeg';

const About = () => {
  const images = [about1, about2, about3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            RAM WEB SOLUTION
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl"
          >
            Transforming Ideas into Digital Reality
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Pioneering Digital Excellence
              </h2>
              <div className="h-1 w-20 bg-blue-600"></div>
              <p className="text-gray-600 leading-relaxed">
                As a leading technology solutions provider, we combine innovation 
                with expertise to deliver cutting-edge digital solutions. Our team 
                of skilled professionals is dedicated to transforming businesses 
                through technology, ensuring sustainable growth and digital success.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                  <p className="text-gray-600">Expert Team</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img 
                src={about4} 
                alt="About Us" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold">10+</h3>
                <p>Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
              <p className="leading-relaxed">
                To be the global leader in innovative digital solutions, 
                driving technological advancement and digital transformation 
                across industries.
              </p>
              <ul className="space-y-4">
                {[
                  "Digital Innovation Leadership",
                  "Global Technology Impact",
                  "Sustainable Solutions",
                  "Client Success Focus"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
              <p className="leading-relaxed">
                To deliver exceptional digital solutions that empower businesses 
                to thrive in the digital age through innovation, expertise, and 
                unwavering commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Innovation", value: "100%" },
                  { title: "Quality", value: "99%" },
                  { title: "Reliability", value: "100%" },
                  { title: "Support", value: "24/7" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 p-4 rounded-lg"
                  >
                    <h3 className="text-xl font-bold text-blue-600">{stat.value}</h3>
                    <p className="text-gray-400">{stat.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;