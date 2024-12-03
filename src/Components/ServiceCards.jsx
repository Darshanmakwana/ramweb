import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptopCode, 
  FaSearchPlus, 
  FaMobileAlt, 
  FaCloud, 
  FaPalette, 
  FaChartLine 
} from "react-icons/fa";

const THEME_COLORS = {
  primary: '#ffff',     
  secondary: '#0000',   
  background: '#034067', 
  text: '#034067',       
  accent: '#2564eb'       
};

const ServiceCard = ({ title, description, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative w-full max-w-xs h-[250px] mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 
        rounded-2xl shadow-2xl transform transition-all duration-500 
        hover:rotate-3 hover:scale-105"
        style={{ 
          backgroundColor: THEME_COLORS.primary,
          backgroundImage: `linear-gradient(135deg, ${THEME_COLORS.primary}, ${THEME_COLORS.secondary})` 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {!isHovered ? (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col items-center justify-center p-6 text-center"
              style={{ color: THEME_COLORS.text }}
            >
              <div className="text-6xl mb-6" style={{ color: THEME_COLORS.accent }}>
                <Icon />
              </div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="opacity-70">Hover to explore</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl 
              flex flex-col items-center justify-center p-6 text-center"
              style={{ 
                backgroundColor: THEME_COLORS.secondary,
                color: '#034067' 
              }}
            >
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="leading-relaxed">{description}</p>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="mt-6 px-6 py-2 rounded-full font-semibold transition"
                style={{ 
                  backgroundColor: THEME_COLORS.background,
                  color: THEME_COLORS.accent 
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = [
    { 
      title: "Web Design", 
      description: "Crafting responsive, cutting-edge websites that blend aesthetics with functionality.", 
      Icon: FaLaptopCode 
    },
    { 
      title: "SEO Optimization", 
      description: "Boosting your online visibility with strategic search engine optimization techniques.", 
      Icon: FaSearchPlus 
    },
    { 
      title: "App Development", 
      description: "Creating innovative mobile and web applications tailored to your unique needs.", 
      Icon: FaMobileAlt 
    },
    { 
      title: "Cloud Services", 
      description: "Implementing secure, scalable cloud solutions for seamless digital transformation.", 
      Icon: FaCloud 
    },
    { 
      title: "Graphic Design", 
      description: "Designing compelling visual identities that tell your brand's unique story.", 
      Icon: FaPalette 
    },
    { 
      title: "Digital Marketing", 
      description: "Developing comprehensive strategies to amplify your brand's online presence.", 
      Icon: FaChartLine 
    },
  ];

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-fixed"
     
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              Icon={service.Icon} 
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCards;