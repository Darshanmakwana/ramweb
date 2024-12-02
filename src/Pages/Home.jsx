import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUsersCog, 
    faHeadset, 
    faPaintBrush, 
    faChartLine, 
    faArrowRight,
    faClipboardList,
    faCogs,
    faLaptopCode,
    faShieldAlt,
    faRocket
} from '@fortawesome/free-solid-svg-icons';
import gif from "../assets/gif.gif";
import ServiceCards from "../Components/ServiceCards";
import HeroSection from "../Components/HeroSection";

const ProcessCard = ({ step, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      }}
      className={`relative overflow-hidden rounded-3xl 
        bg-gradient-to-br ${step.gradient} 
        text-white shadow-2xl transform transition-all duration-300 
        hover:shadow-2xl p-6 flex flex-col justify-between 
        group hover:scale-105 space-y-4`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern pointer-events-none"></div>

      {/* Icon Background */}
      <div className="absolute top-0 right-0 opacity-20 text-6xl">
        <FontAwesomeIcon
          icon={step.icon}
          className="text-4xl mr-4 text-white/80 transform group-hover:rotate-12 transition-transform"
        ></FontAwesomeIcon>
      </div>

      {/* Header */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon 
            icon={step.icon} 
            className="text-3xl md:text-4xl text-white/80"
          ></FontAwesomeIcon>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            {step.title}
          </h3>
        </div>

        <p className="text-xs md:text-sm opacity-80 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Details List */}
      <div className="space-y-2 relative z-10">
        {step.details.map((detail, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center bg-white/10 rounded-lg p-2 
              hover:bg-white/20 transition group"
          >
            <i
              className="fas fa-check-circle mr-3 text-white/70 
              group-hover:text-white transition"
            ></i>
            <span className="text-xs font-medium">{detail}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrow Button */}
      <motion.div
        whileHover={{ x: 10 }}
        className="absolute bottom-4 right-4 
          bg-white/20 rounded-full p-2 
          hover:bg-white/40 transition-all 
          group cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white group-hover:text-opacity-100 
            text-opacity-70 transition"
        ></FontAwesomeIcon>
      </motion.div>
    </motion.div>
  );
};

const interns = [
  {
    name: "Nandani Patel",
    role: "Full Stack",
    image: "https://placehold.co/100x100",
    alt: "Image of Nandani Patel",
  },
  {
    name: "Nidhi Parmar",
    role: "Ui/Ux",
    image: "https://placehold.co/100x100",
    alt: "Image of Nidhi Parmar",
  },
  {
    name: "Kalpesh",
    role: "React JS",
    image: "https://placehold.co/100x100",
    alt: "Image of Kalpesh",
  },
  {
    name: "Parth Goswami",
    role: "React JS",
    image: "https://placehold.co/100x100",
    alt: "Image of Parth Goswami",
  },
  {
    name: "Jeel Patel",
    role: "Data Analysis",
    image: "https://placehold.co/100x100",
    alt: "Image of Jeel Patel",
  },
  {
    name: "Zankhna",
    role: "React JS",
    image: "https://placehold.co/100x100",
    alt: "Image of Zankhna",
  },
  {
    name: "Mohit Prajapati",
    role: "React Native",
    image: "https://placehold.co/100x100",
    alt: "Image of Mohit Prajapati",
  },
];

const ServiceWords = [
  "Web Design",
  "SEO Optimization",
  "App Development",
  "Cloud Services",
  "Graphic Design",
  "Digital Marketing",
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {ServiceWords.map((word, index) => (
        <motion.div
          key={index}
          className="absolute text-[#001b53] opacity-20 text-5xl font-extrabold tracking-wider 
                      drop-shadow-[0_0_10px_rgba(37,100,235,0.5)] 
                      text-stroke-2 text-stroke-[#2564eb]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [0.5, 0.7, 0.5],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 10 + index * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

const Home = () => {
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

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Function to generate a new set of 4 bubbles
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 4 }, (_, index) => ({
        id: Date.now() + index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * 500,
        size: `w-${Math.floor(Math.random() * 20 + 20)} h-${Math.floor(
          Math.random() * 20 + 20
        )}`,
        color: "bg-[#ffff]/40",
        trajectory: {
          x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
        },
      }));

      setBubbles(newBubbles);
    };

    // Initial bubble generation
    generateBubbles();

    // Set interval to regenerate bubbles every 10 seconds
    const bubbleInterval = setInterval(() => {
      generateBubbles();
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(bubbleInterval);
  }, []);

  const explodeBubble = (bubbleToExplode) => {
    setBubbles((currentBubbles) =>
      currentBubbles.map((bubble) =>
        bubble.id === bubbleToExplode.id
          ? {
              ...bubble,
              exploding: true,
            }
          : bubble
      )
    );
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const processSteps = [
    {
      color: "blue",
      icon: faClipboardList,
      title: "Requirement Analysis",
      description: "Deep dive into project goals and technical landscape.",
      details: [
        "Comprehensive project scoping",
        "Technical feasibility mapping",
        "Stakeholder alignment",
      ],
      gradient: "from-[#4A90E2] to-[#6A11CB]",
    },
    {
      color: "green",
      icon: faCogs,
      title: "Strategic Planning",
      description: "Crafting a precise technological roadmap.",
      details: [
        "Advanced tech stack selection",
        "Architectural blueprint",
        "Resource optimization",
      ],
      gradient: "from-[#11998e] to-[#38ef7d]",
    },
    {
      color: "purple",
      icon: faLaptopCode,
      title: "Agile Development",
      description: "Iterative, flexible, and adaptive development approach.",
      details: [
        "Continuous integration",
        "Rapid prototyping",
        "Iterative refinement",
      ],
      gradient: "from-[#8E2DE2] to-[#4A00E0]",
    },
    {
      color: "teal",
      icon: faShieldAlt,
      title: "Quality Assurance",
      description: "Rigorous testing and performance optimization.",
      details: [
        "Comprehensive test coverage",
        "Performance benchmarking",
        "Security vulnerability assessment",
      ],
      gradient: "from-[#00B4DB] to-[#0083B0]",
    },
    {
      color: "red",
      icon: faRocket,
      title: "Deployment & Support",
      description: "Seamless launch and continuous technical support.",
      details: [
        "Zero-downtime deployment",
        "24/7 monitoring",
        "Proactive maintenance",
      ],
      gradient: "from-[#FF416C] to-[#FF4B2B]",
    },
  ];

  return (
    <>
      <HeroSection />
      <section className=" to-blue-600 py-16 md:py-20 text-[#2564eb]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Internship <span className="text-[#034067]">Opportunities</span>
            </h2>
            <div className="h-1 w-72 bg-[#034067] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#034067]/5 p-6 rounded-xl border border-[#034067]/20 text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-[#2564eb]/30">
              <div className="mb-4 text-4xl text-blue-300">💻</div>
              <h3 className="text-xl font-semibold mb-3 text-[#034067]">
                Web Devlopment
              </h3>
              <p className="text-base opacity-80 text-[#2564eb]">
                We create responsive, scalable web applications to elevate your
                business and adapt seamlessly to your needs.
              </p>
            </div>

            <div className="bg-[#034067]/5 p-6 rounded-xl border border-[#034067]/20 text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-[#2564eb]/30">
              <div className="mb-4 text-4xl text-blue-300">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-[#034067]">
                Graphic Designing
              </h3>
              <p className="text-base opacity-80 text-[#2564eb]">
                Graphic design blends creativity with technology, crafting
                visual experiences that communicate and inspire innovation.
              </p>
            </div>

            <div className="bg-[#034067]/5 p-6 rounded-xl border border-[#034067]/20 text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-[#2564eb]/30">
              <div className="mb-4 text-4xl text-blue-300">☁️</div>
              <h3 className="text-xl font-semibold mb-3 text-[#034067]">
                Digital Marketing
              </h3>
              <p className="text-base opacity-80 text-[#2564eb]">
                Digital marketing drives brand engagement through data
                strategies, leveraging social media, SEO, and content.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white border-2 border-[#034067]  text-[#034067] font-bold rounded-full 
              transition duration-300 ease-in-out 
              hover:bg-[#034067] hover:text-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen flex justify-center items-center 
          bg-gradient-to-br from-[#f0f4f8] to-[#e6f2ff] 
          py-16 relative overflow-hidden"
      >
        {/* Floating Geometric Backgrounds */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-float-slow"></div>
        </motion.div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            className="grid md:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20"
          >
            {/* Illustration Section with Advanced Animations */}
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -10 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group"
            >
              {/* Layered Background Effect */}
              <div
                className="absolute -inset-6 bg-gradient-to-br from-blue-100/20 to-purple-100/20 
                          rounded-3xl opacity-50 blur-2xl group-hover:opacity-70 transition-all duration-500"
              ></div>

              <motion.img
                src="https://placehold.co/600x400"
                alt="Illustration of a person analyzing a bar chart with upward trends"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl 
                              transform transition-transform duration-300 
                              group-hover:scale-105 group-hover:rotate-1 "
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                }}
              />

              {/* Floating Accent Element */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-8 -right-8 
                              bg-gradient-to-br from-blue-500 to-purple-600 
                              text-white p-5 rounded-full 
                              shadow-2xl z-20 hover:shadow-xl 
                              transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-4xl"
                ></FontAwesomeIcon>
              </motion.div>
            </motion.div>

            {/* Content Section with Enhanced Interactivity */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h2
                  className="text-blue-600 text-lg font-semibold mb-2 
                              tracking-wider uppercase"
                  whileHover={{ scale: 1.05, color: "#3b82f6" }}
                >
                  Why Choose Us
                </motion.h2>
                <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
                  Reasons to{" "}
                  <span className="text-blue-600">Trust Our Expertise</span>
                </h1>
                <div className="h-1 w-24 bg-blue-600 rounded-full mb-4"></div>
              </motion.div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide tailored, all-in-one website solutions that blend
                expert design, cutting-edge technology, and comprehensive
                support to help your business shine online.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: faUsersCog,
                    color: "orange",
                    title: "Experienced Team",
                    description:
                      "Our experts know their stuff and will make sure your website looks great and works well.",
                  },
                  {
                    icon: faHeadset,
                    color: "purple",
                    title: "Dedicated Support",
                    description:
                      "We offer continuous support and make sure everything runs smoothly from start to finish.",
                  },
                  {
                    icon: faPaintBrush,
                    color: "blue",
                    title: "Custom Design",
                    description:
                      "We create websites that perfectly fit your brand and achieve your unique goals.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="flex items-center space-x-6 p-5 
                                      bg-gradient-to-br from-white to-blue-50 
                                      rounded-2xl shadow-md 
                                      hover:shadow-xl transition-all duration-300 
                                      border border-blue-100/50"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-20 h-20 rounded-full 
                                          bg-${feature.color}-100 flex items-center 
                                          justify-center shadow-md`}
                    >
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className={`text-3xl text-${feature.color}-500`}
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                              text-white rounded-full text-lg font-semibold
                              hover:from-blue-700 hover:to-purple-700 
                              transition-all duration-300 
                              flex items-center space-x-3 
                              shadow-2xl hover:shadow-xl"
                >
                  <span>Learn More</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform group-hover:translate-x-1"
                  ></FontAwesomeIcon>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Add some custom CSS for floating animations */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes float-reverse {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
      <section className="min-h-screen flex justify-center items-center  p-6 relative">
        <div className="container relative z-10">
          <h1 className="text-6xl font-bold mb-8 text-center text-[#2564eb]">
            <span className="text-[#034067]">Our</span> Services
            <div className="h-1 w-52 bg-[#2564eb] mx-auto rounded-full"></div>
          </h1>
          <ServiceCards />
        </div>
        <BackgroundAnimation />
      </section>
      <section className="flex flex-col items-center py-12 bg-[#034067] relative overflow-hidden px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-[#2564eb] relative z-10 text-center"> 
          <span className="text-white">Our students are completing </span> internship 
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
                    stiffness: 300
                  }}
                  className={`flex flex-col items-center transition-all duration-500 ease-in-out
                    ${index === 0 ? 'opacity-100 scale-100 z-10' : 
                      index === 1 ? 'opacity-75 scale-90 md:-translate-x-4 z-0' : 
                      index === 2 ? 'opacity-50 scale-80 md:-translate-x-8 z-0' : 
                      index === 3 ? 'opacity-25 scale-80 md:-translate-x-8 z-0' :
                      'opacity-25 scale-70 md:-translate-x-12 z-0'}`}
                >
                  <div className="relative">
                    <img 
                      src={intern.image} 
                      alt={intern.alt} 
                      className="rounded-full border-2 border-[#2564eb] 
                        w-16 h-16 md:w-24 md:h-24 object-cover 
                        transform transition-transform hover:scale-110"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#2564eb] text-white 
                      rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center 
                      text-xs md:text-sm font-bold">
                      {index + 1}
                    </div>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      <section ref={ref} className="container mx-auto px-4 py-16 bg-gradient-to-br from-[#f4f7ff] to-[#e6f2ff] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.h2 
            className="text-sm md:text-lg text-blue-600 font-semibold mb-2 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Innovative Approach
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold mb-4 text-[#034067] tracking-tight leading-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              viewport: { once: true }
            }}
          >
            Comprehensive Development <br />
            <span className="text-[#2564eb]">Process Framework</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ 
              duration: 1, 
              ease: "easeInOut",
              viewport: { once: true }
            }}
            className="h-1 bg-[#2564eb] mx-auto rounded-full"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                delayChildren: 0.3, 
                staggerChildren: 0.2 
              } 
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {processSteps.map((step, index) => (
            <ProcessCard 
              key={step.title} 
              step={step} 
              index={index} 
            />
          ))}
        </motion.div>
      </section>
      <section className="p-8 bg-[#f4f7ff]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
            <motion.h1 
                className="text-5xl font-bold mb-4 text-[#034067] text-center"
                animate={{
                    scale: [1, 1.05, 1],
                    color: ['#034067', '#2564eb', '#034067']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                }}
            >
                Our <span className="text-[#2564eb]">Studant</span> Projects
            </motion.h1>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 200 }}  // 32 * 4 = 128px
                transition={{ 
                    duration: 1, 
                    ease: "easeInOut"
                }}
                className="h-1 bg-[#2564eb]  mx-auto mb-12 rounded-full"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "SMART CAB POINT",
                        image: "https://placehold.co/600x400?text=Yellow+Cab+in+City",
                        description: "Cab Booking Software - React JS, Node Js, Mongo Db, Express js",
                        tech: ["React", "Node.js", "MongoDB", "Express"]
                    },
                    {
                        title: "SMILE CAFE POINT",
                        image: "https://placehold.co/600x400?text=Bowl+of+Soup+with+Bread",
                        description: "Food Ordering Software - React JS, NodeJs, Mongo Db, Express js",
                        tech: ["React", "Node.js", "MongoDB", "Express"]
                    },
                    {
                        title: "ZEPHYR",
                        image: "https://placehold.co/600x400?text=Person+in+Black+Jacket",
                        description: "E-Commerce Site - React JS, Node Js, Mongo Db, Express js",
                        tech: ["React", "Node.js", "MongoDB", "Express"]
                    }
                ].map((project, index) => (
                    <motion.div 
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 300
                        }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden 
                        border border-[#2564eb]/10 
                        transform transition-all duration-300 
                        hover:shadow-2xl hover:border-[#2564eb]/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-[#034067]/70 
                                flex items-center justify-center 
                                opacity-0 hover:opacity-100 
                                transition-opacity duration-300"
                  >
                    <span className="text-white text-2xl font-bold">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-[#034067]">
                    {project.title}
                  </h2>
                  <p className="text-[#2564eb] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#2564eb]/10 
                                        text-[#034067] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
