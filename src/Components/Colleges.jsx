import React, { useState, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import djmit from '../assets/djmit-.png'  
import itm from '../assets/itm.png'  
import parul from '../assets/parul.jpg'  

const Colleges = () => {  
  const colleges = [  
    {  
      id: 1,  
      name: "Dr. Jivraj Mehta Institute Of Technology",  
      logo: djmit,  
      theme: {  
        primaryColor: "#6A5ACD",  
        secondaryColor: "#4B0082"  
      }  
    },  
    {  
      id: 2,  
      name: "ITM (SLS) Baroda University",  
      logo: itm,  
      theme: {  
        primaryColor: "#00CED1",  
        secondaryColor: "#20B2AA"  
      }  
    },  
    {  
      id: 3,  
      name: "Parul University Baroda",  
      logo: parul,  
      theme: {  
        primaryColor: "#FF6347",  
        secondaryColor: "#FF4500"  
      }  
    }  
  ];  

  const [currentCollege, setCurrentCollege] = useState(0);  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentCollege((prev) => (prev + 1) % colleges.length);  
    }, 4000);  

    return () => clearInterval(interval);  
  }, []);  

  const handleCollegeChange = (index) => {  
    setCurrentCollege(index);  
  };  

  return (  
    <div>  
      <motion.header  
        initial={{ y: -100, opacity: 0 }}  
        animate={{ y: 0, opacity: 1 }}  
        transition={{ delay: 0.5, duration: 0.5 }}  
        className="bg-white text-center  shadow-md "  
      >  
        <h1 className="text-3xl text-[#034067]  font-bold">Active Internships Available from These Colleges</h1>  
      </motion.header>  
      <div   
        className="min-h-96 flex items-center justify-center"  
        style={{  
          background: `linear-gradient(135deg, ${colleges[currentCollege].theme.primaryColor} 0%, ${colleges[currentCollege].theme.secondaryColor} 100%)`  
        }}  
      >  
        <div className="container mx-auto px-4 text-center overflow-hidden">  
          {/* College Logo and Name Display */}  
          <AnimatePresence mode="wait">  
            <motion.div  
              key={colleges[currentCollege].id}  
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: -50 }}  
              transition={{ duration: 0.6 }}  
              className="mb-8"  
            >  
              <div className="flex flex-col items-center">  
                {/* College Logo */}  
                <motion.div  
                  initial={{ scale: 0.5, opacity: 0 }}  
                  animate={{ scale: 1, opacity: 1 }}  
                  transition={{ delay: 0.3, duration: 0.5 }}  
                  className="mb-6 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-4"  
                >  
                  <img   
                    src={colleges[currentCollege].logo}   
                    alt={`${colleges[currentCollege].name} Logo`}  
                    className="max-w-full max-h-full object-contain"  
                  />  
                </motion.div>  

                {/* Full College Name */}  
                <h1   
                  className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"  
                  style={{   
                    textShadow: '0 10px 20px rgba(0,0,0,0.2)',  
                    lineHeight: 1.2  
                  }}  
                >  
                  {colleges[currentCollege].name}  
                </h1>  
              </div>  
            </motion.div>  
          </AnimatePresence>  

          {/* Navigation Dots */}  
          <div className="flex justify-center space-x-3 mt-8">  
            {colleges.map((college, index) => (  
              <button  
                key={college.id}  
                onClick={() => handleCollegeChange(index)}  
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
        </div>  
      </div>  
    </div>  
  );  
};  

export default Colleges;