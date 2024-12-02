import React, { useEffect, useState } from "react";
import gif from "../assets/gif.gif";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "RAM WEB SOLUTION";

  useEffect(() => {
    let currentText = "";
    let index = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping) {
        if (index < fullText.length) {
          currentText += fullText[index];
          setDisplayText(currentText);
          index++;
          setTimeout(typeWriter, 200);
        } else {
          setTimeout(() => {
            isTyping = false;
            setTimeout(resetText, 1000);
          }, 1000);
        }
      }
    };

    const resetText = () => {
      currentText = "";
      index = 0;
      isTyping = true;
      setDisplayText("");
      typeWriter();
    };

    typeWriter();

    return () => {
      isTyping = false;
    };
  }, []);
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:gap-20 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 flex justify-center">
          <img
            src={gif}
            alt="Pentagon shapes"
            className="h-[40vh] md:h-[60vh] max-w-full object-contain"
          />
        </div>
        <div className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl text-[#034067] font-[Vidaloka] md:text-5xl font-bold animate-bounce">
              {displayText}
            </h1>
            <hr className="border-t-2 border-[#034067] mt-2" />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold">
              <span className="text-[#034067]">MASTER</span>
              <span className="text-[#2564eb]">{" "}WEB DEVELOPMENT</span>
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              <span className="text-[#034067]">{" "}WITH</span>
              <span className="text-[#2564eb]">{" "}US</span>
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-[#2564eb]">
              {" "}EASY-TO-FOLLOW <span className="text-[#034067]">{" "}TUTORIALS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Learn step-by-step and become a professional web developer with
              tutorials designed for all skill levels.
            </p>
          </div>

          <div className="mt-6 md:mt-8 flex justify-center space-x-4">
            <button className="px-4 py-2 md:px-6 md:py-2 border-2 border-[#034067] text-blue-500 rounded-full hover:bg-[#034067] hover:text-white transition text-sm md:text-base">
              TRAINING
            </button>
            <button className="px-4 py-2 md:px-6 md:py-2 border-2 border-[#034067] text-blue-500 rounded-full hover:bg-[#034067] hover:text-white transition text-sm md:text-base">
              INTERNSHIP
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
