import React from 'react'
import { motion} from "framer-motion";
import kesari from '../assets/kesricafe1.jpg'
import acservice from '../assets/acservice5.jpg'
import slide from '../assets/slide3.png'



const Portfolio = () => {
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
                color: ['#034067', '#2564eb', '#034067']
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
            }}
        >
            Our <span className="text-[#2564eb]">Portfolio</span> 
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
                    title: "SUPER AC SERVICE AND REPAIRING",
                    image: acservice,
                    description: "Ac Service And Repairing - React JS,  Mongo Db, Express js",
                    tech: ["React", "MongoDB", "Express"]
                },
                {
                    title: "YOGESHWAR FIBRE",
                    image: slide,
                    description: "Fabrication Works - React JS, NodeJs, Mongo Db, Express js",
                    tech: ["React", "Node.js", "MongoDB", "Express"]
                },
                {
                    title: "KESARI CAFE",
                    image: kesari,
                    description: "portfolio - React JS, Node Js, Mongo Db, Express js",
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
  )
}

export default Portfolio
