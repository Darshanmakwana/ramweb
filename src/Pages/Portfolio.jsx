import React from "react";
import { motion } from "framer-motion";
import kesari from "../assets/kesricafe1.jpg";
import acservice from "../assets/acservice5.jpg";
import slide from "../assets/slide3.png";


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const projects = [
    {
      title: "SUPER AC SERVICE AND REPAIRING",
      image: acservice,
      link: "superacserviceandrepairing.com",
      category: "html",
      tech: ["React", "MongoDB", "Express"],
    },
    {
      title: "YOGESHWAR FIBRE",
      image: slide,
      link: "yogeshwarfibre.com",
      category: "wordpress",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "KESARI CAFE",
      image: kesari,
      link: "kesaricafe.com",
      category: "react.js",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
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
            color: ["#034067", "#2564eb", "#034067"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Our <span className="text-[#2564eb]">Portfolio</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }} // 32 * 4 = 128px
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="h-1 bg-[#2564eb]  mx-auto mb-12 rounded-full"
        />

        <div className="mb-4 flex justify-center gap-1 space-x-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              selectedCategory === "all"
                ? "bg-[#034067] text-white"
                : "bg-[#2564eb] text-white hover:bg-[#034067]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("html")}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              selectedCategory === "html"
                ? "bg-[#034067] text-white"
                : "bg-[#2564eb] text-white hover:bg-[#034067]"
            }`}
          >
            HTML
          </button>
          <button
            onClick={() => setSelectedCategory("wordpress")}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              selectedCategory === "wordpress"
                ? "bg-[#034067] text-white"
                : "bg-[#2564eb] text-white hover:bg-[#034067]"
            }`}
          >
            WordPress
          </button>
          <button
            onClick={() => setSelectedCategory("react.js")}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              selectedCategory === "react.js"
                ? "bg-[#034067] text-white"
                : "bg-[#2564eb] text-white hover:bg-[#034067]"
            }`}
          >
            React.js
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 300,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden 
                      border border-[#2564eb]/10 
                      transform transition-all duration-300 
                      hover:shadow-2xl hover:border-[#2564eb]/30"
              onClick={() => window.open(`https://${project.link}`, "_blank")}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold mb-3 text-[#034067]">
                  {project.title}
                </h2>
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
                <h1 className="text-[#2564eb] mb-4 font-semibold">
                  {project.link}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
