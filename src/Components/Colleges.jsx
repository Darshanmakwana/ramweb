import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import djmit from '../assets/djmit-.png';
import itm from '../assets/itm.png';
import parul from '../assets/parul.jpg';

const Colleges = () => {
  // Constants
  const AUTOPLAY_INTERVAL = 4000;
  
  const colleges = useMemo(() => [
    {
      id: 1,
      name: "Dr. Jivraj Mehta Institute Of Technology",
      logo: djmit,
      description: "Leading technical institute offering cutting-edge programs",
      theme: {
        primaryColor: "#6A5ACD",
        secondaryColor: "#4B0082"
      }
    },
    {
      id: 2,
      name: "ITM (SLS) Baroda University",
      logo: itm,
      description: "Excellence in management and technical education",
      theme: {
        primaryColor: "#00CED1",
        secondaryColor: "#20B2AA"
      }
    },
    {
      id: 3,
      name: "Parul University Baroda",
      logo: parul,
      description: "Comprehensive education with global perspective",
      theme: {
        primaryColor: "#FF6347",
        secondaryColor: "#FF4500"
      }
    }
  ], []);

  // State management
  const [currentCollege, setCurrentCollege] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Memoized styles
  const gradientStyle = useMemo(() => ({
    background: `linear-gradient(135deg, 
      ${colleges[currentCollege].theme.primaryColor} 0%, 
      ${colleges[currentCollege].theme.secondaryColor} 100%)`
  }), [currentCollege, colleges]);

  // Handlers
  const handleCollegeChange = useCallback((index) => {
    setCurrentCollege(index);
    setIsAutoPlaying(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsAutoPlaying(true);
  }, []);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setCurrentCollege((prev) => (prev - 1 + colleges.length) % colleges.length);
    } else if (e.key === 'ArrowRight') {
      setCurrentCollege((prev) => (prev + 1) % colleges.length);
    }
  }, [colleges.length]);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentCollege((prev) => (prev + 1) % colleges.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, colleges.length]);

  // Keyboard navigation effect
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <section className="w-full min-h-screen bg-gray-50" aria-label="College Listings">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-8 bg-white shadow-md text-center"
      >
        <h1 className="text-3xl text-[#034067] font-bold">
          Active Internships Available from These Colleges
        </h1>
        <p className="text-gray-600 mt-2">
          Explore opportunities from our partner institutions
        </p>
      </motion.header>

      <div
        className="min-h-[600px] transition-all duration-500"
        style={gradientStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4 py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={colleges[currentCollege].id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-8"
            >
              {/* College Logo */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 hover:shadow-3xl transition-shadow duration-300"
              >
                <img
                  src={colleges[currentCollege].logo}
                  alt={`${colleges[currentCollege].name} Logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              {/* College Name */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-center"
                style={{ textShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              >
                {colleges[currentCollege].name}
              </motion.h2>

              {/* College Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-lg max-w-2xl mx-auto text-center opacity-90"
              >
                {colleges[currentCollege].description}
              </motion.p>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {colleges.map((college, index) => (
                  <button
                    key={college.id}
                    onClick={() => handleCollegeChange(index)}
                    aria-label={`View ${college.name}`}
                    className={`
                      w-4 h-4 rounded-full transition-all duration-300 
                      ${currentCollege === index
                        ? 'bg-white scale-150'
                        : 'bg-white/30 hover:bg-white/50'
                      }
                    `}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Colleges);